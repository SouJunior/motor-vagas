import { By, until } from "selenium-webdriver";
import logger from "../../../shared/logger/logger";
import { createDriver } from "../../driver";
import { IListJobDTO } from "../dtos/ListJobs.dto";
import { elementGetter } from "./elements";

export async function jobCollector(locations: string[], keyword: string) {
  const driver = await createDriver();
  const jobs: IListJobDTO[] = [];
  try {
    logger.info("Starting job scrapping");

    for (const location of locations) {
      logger.info(`Scrapping jobs in ${location}`);
      const keywords = encodeURI(keyword);
      const url = `https://www.linkedin.com/jobs/search?keywords=${keywords}&location=${location}&f_TPR=r86400&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0`;

      logger.info(`Navigating to ${url}`);
      await driver.get(url);

      for (let i = 0; i < 4; i++) {
        logger.info("Scrolling to the bottom of the page");
        await driver.executeScript(
          "window.scrollTo(0, document.body.scrollHeight);"
        );

        logger.info("Waiting for the page to load");
        await driver.wait(
          until.elementLocated(By.css("ul.jobs-search__results-list>li"))
        );

        logger.info("Waiting 3 seconds before scrolling again");
        await driver.sleep(3000);
      }

      logger.info("Getting job elements");
      const jobElements = await driver.findElements(
        By.css("ul.jobs-search__results-list>li")
      );

      logger.info("Getting job details");
      for (const el of jobElements) {
        logger.info("Getting job title");
        const title = await elementGetter({
          el,
          selector: "h3.base-search-card__title",
        });

        logger.info("Getting job company");
        const company = await elementGetter({
          el,
          selector:
            '[data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle"]',
        });

        logger.info("Getting job location");
        const location = await elementGetter({
          el,
          selector: "span.job-search-card__location",
        });

        logger.info("Getting job time");
        const time = await elementGetter({ el, selector: "time" });

        logger.info("Getting job link");
        const link = await elementGetter({
          el,
          selector: "a.base-card__full-link",
          method: "attribute",
          attr: "href",
        });

        logger.info("Adding job to the list");
        jobs.push({
          title: title.toLocaleLowerCase(),
          company,
          location,
          time,
          link,
          visa: false,
          description: "",
          source: "Linkedin",
        });
      }
    }

    logger.info("Finishing job scrapping");

    return jobs;
  } catch (err) {
    logger.error(err);
  } finally {
    await driver?.quit();
  }
}
