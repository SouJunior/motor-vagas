import { cleanedText } from '../../helper/cleanedText';
import { createDriver } from '../../driver';
import {jobDescriptionClicker} from './elements';
import { IListJobDTO } from '../dtos/ListJobs.dto';
import { By } from 'selenium-webdriver';

export async function filterKeyword(jobs: IListJobDTO[]): Promise<IListJobDTO[]> {
  const driver = await createDriver();
  const jobItems = jobs.filter(job => job.link.length > 1);
  try {
    const filteredJobs: IListJobDTO[] = [];
    for (const job of jobItems) {
      await driver.get(job.link);
      await jobDescriptionClicker(driver);
      await driver.sleep(3000);
      const element = await driver.findElement(By.className('core-section-container'));
      const text = ""

      if(element) {
      const text = await element.getText();
      } else {
        console.log("Element not found")
      }
        
      await driver.sleep(3000);
      const haveVisa =
        text.toLocaleLowerCase().includes('visa sponsorship');
      job.visa = !!haveVisa;
      job.description = cleanedText(text).substring(0, 300) + '...';
      filteredJobs.push(job);
      const handles = await driver.getAllWindowHandles();
      for (let i = 1; i < handles.length; i++) {
        await driver.switchTo().window(handles[i]);
        await driver.close();
      }
      await driver.switchTo().window(handles[0]);
    }
    return filteredJobs;
  } catch (err) {
    console.log(err);
    await driver.quit();
    throw new Error('Ocurred a problem when filtering jobs');
  } finally {
    await driver?.quit();
  }
}
