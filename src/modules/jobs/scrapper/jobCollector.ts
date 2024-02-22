import {By, until} from 'selenium-webdriver';
import {elementGetter} from './elements';
import { createDriver } from '../../driver';
import { IListJobDTO } from '../dtos/ListJobs.dto';

export async function jobCollector(locations: string[], keyword: string) {
  const driver = await createDriver();
  const jobs: IListJobDTO[] = [];
  try {
    for (const location of locations) {
      const keywords = encodeURI(keyword);
      await driver.get(
        `https://www.linkedin.com/jobs/search?keywords=${keywords}&location=${location}&f_TPR=r86400&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0`,
      );

      for (let i = 0; i < 4; i++) {
        await driver.executeScript('window.scrollTo(0, document.body.scrollHeight);');

        await driver.wait(until.elementLocated(By.css('ul.jobs-search__results-list>li')));

        await driver.sleep(3000);
      }

      const jobElements = await driver.findElements(By.css('ul.jobs-search__results-list>li'));
  
      for (const el of jobElements) {
        const title = await elementGetter({el, selector: 'h3.base-search-card__title'});
        const company = await elementGetter({
          el,
          selector: '[data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle"]',
        });
        const location = await elementGetter({el, selector: 'span.job-search-card__location'});
        const time = await elementGetter({el, selector: 'time'});
        const link = await elementGetter({el, selector: 'a.base-card__full-link', method: 'attribute', attr: 'href'});

          jobs.push({
            title: title.toLocaleLowerCase(),
            company,
            location,
            time,
            link,
            visa: false,
            description: '',
            source: 'Linkedin',
          });
      }
    }
    return jobs;

  } catch (err) {
    console.log(err);
  } finally {
    await driver?.quit();
  }
}
