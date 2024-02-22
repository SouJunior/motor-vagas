import {By} from 'selenium-webdriver';
import { createDriver } from '../../driver';
import { ISaveCompanyDTO } from '../dtos/SaveCompanies.dto';

export const siaExplains = async () => {
  const driver = await createDriver();

  try {
    await driver.get('https://siaexplains.github.io/visa-sponsorship-companies/');
    await driver.sleep(3000);

    const parentElement = await driver.findElements(By.className('odd:bg-white'));

    const companies: ISaveCompanyDTO[] = [];

    for (const element of parentElement) {
      const childElement = await element.findElement(By.css('td:first-child'));
      const name = await childElement.getText();

      const company = { 
        name: name.toLocaleLowerCase(),
    }
  
    companies.push(company);
    }

    return companies;
  } catch (err) {
    console.log(err);
  } finally {
    await driver.quit();
  }
};
