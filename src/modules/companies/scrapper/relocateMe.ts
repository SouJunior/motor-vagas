import {By} from 'selenium-webdriver';
import { createDriver } from '../../driver';
import { ISaveCompanyDTO } from '../dtos/SaveCompanies.dto';

export const relocateMe = async () => {
  const driver = await createDriver();

  try {
    await driver.get('https://relocate.me/companies');
    await driver.sleep(3000);
    const parentElement = await driver.findElements(By.className('wwbc-companies__link'));

    const companies: ISaveCompanyDTO[] = [];

    for (const element of parentElement) {
      const childElement = await element.findElement(By.css('span:first-child'));

      const name = await childElement.getText();

      const company = { 
          name: name.toLocaleLowerCase(),
      }

      companies.push(company);
    }

      return companies;

  } catch (error) {
      console.log(error.message)
  } finally {
    await driver.quit();
  }
}
