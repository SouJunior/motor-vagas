import { createDriver } from '../../driver';
import {cleanedText} from '../../helper/cleanedText';
import {jobDescriptionClicker} from './elements';
import {By} from 'selenium-webdriver';

export async function scrapDescription(link: string) {
  const driver = await createDriver();
  try {
    await driver.get(link);
    await jobDescriptionClicker(driver);
    await driver.sleep(5000);
    const element = await driver.findElement(By.className('core-section-container'));
    const text = await element.getText();
    const editedText = cleanedText(text).substring(0, 3500);
    return editedText;
  } catch (err) {
    console.log(err);
  } finally {
    driver?.quit();
  }
}
