import { Builder } from 'selenium-webdriver';
import firefox from 'selenium-webdriver/firefox';

export async function createDriver() {
  const options = new firefox.Options();
  options.setBinary('/usr/bin/firefox');
  
  options.addArguments('--headless');
  options.addArguments('--disable-gpu'); 
  options.addArguments('--no-sandbox'); 

  try {
    const driver = new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(options)
        .build();

    return driver;
  } catch (error) {
    console.error('Erro ao criar o driver:', error);
    throw error;
  }
}
