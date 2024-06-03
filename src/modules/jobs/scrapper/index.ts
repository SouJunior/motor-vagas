import {jobCollector} from './jobCollector';
import {filterKeyword} from './filterKeywords';

export const scraper = async (
  locations: string[],
  keyword: string,
  isCheckDescription?: boolean,
) => {
  try {
    const jobs = (await jobCollector(locations, keyword)) ?? [];
    const filteredJobs = isCheckDescription ? jobs : await filterKeyword(jobs);

    return filteredJobs
  } catch (err) {
    console.log(err);
  } finally {
    console.log('jobs saved!');
  }
};
