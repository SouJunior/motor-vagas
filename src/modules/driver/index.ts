import { Builder, By } from 'selenium-webdriver';
import firefox from 'selenium-webdriver/firefox';

export async function createDriver() {
  const options = new firefox.Options();
  options.setBinary('/usr/bin/firefox');
  options.addArguments('--headless', '--ignore-ssl-errors=yes', '--ignore-certificate-errors', '--no-sandbox');

  try {
    const driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
    return driver;
  } catch (error) {
    console.error('Erro ao criar o driver:', error);
    throw error;
  }
}
