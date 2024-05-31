import { cleanedText } from '../../helper/cleanedText';
import { createDriver } from '../../driver';
import { jobDescriptionClicker } from './elements';
import { IListJobDTO } from '../dtos/ListJobs.dto';
import { By } from 'selenium-webdriver';

export async function filterKeyword(jobs: IListJobDTO[]): Promise<IListJobDTO[]> {
  const driver = await createDriver();
  // Filtrando previamente para garantir que todos os trabalhos tenham um link válido
  const jobItems = jobs.filter(job => job.link && job.link.length > 1);
  try {
    const filteredJobs: IListJobDTO[] = [];
    for (const job of jobItems) {
      await driver.get(job.link);
      await jobDescriptionClicker(driver);
      await driver.sleep(3000); // Aguarda para garantir que a página carregue completamente
      
      let text = ""; // Inicializa a variável text fora do bloco if
      try {
        const element = await driver.findElement(By.className('core-section-container'));
        if (element) {
          text = await element.getText(); // Atribui novo valor à variável text
          console.log(text);
        }
      } catch (e) {
        console.log("Element not found or error in fetching text", e);
      }
      
      const haveVisa = text.toLocaleLowerCase().includes('visa sponsorship');
      job.visa = haveVisa;
      job.description = text;
      filteredJobs.push(job);

      // Fechamento correto de abas/guias adicionais, se houver
      const handles = await driver.getAllWindowHandles();
      for (let i = 1; i < handles.length; i++) {
        await driver.switchTo().window(handles[i]);
        await driver.close();
      }
      await driver.switchTo().window(handles[0]);
    }
    return filteredJobs;
  } catch (err) {
    console.error("Ocurred a problem when filtering jobs:", err);
    throw err; // Relança o erro após logar para permitir tratamentos adicionais fora dessa função
  } finally {
    await driver.quit(); // Garante que o WebDriver seja fechado independentemente do resultado
  }
}
