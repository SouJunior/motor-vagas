// import {parsPath} from './parsPath';
// import {cleanedText} from '../../helper/cleanedText';

// export async function checkAndSaveJobs(jobs: TJob[]) {
//   let count = 0;
//   try {
//     for (const job of jobs) {
//       const job_name: string = parsPath(job?.link);
//       const existingJob = await prisma.job.findFirst({
//         where: {
//           job_name: job_name,
//         },
//       });
//         count += 1;
//         const response = await prisma.job.create({
//           data: {
//             title: job.title,
//             company: job.company,
//             location: job.location,
//             time: job.time,
//             link: job.link,
//             description: cleanedText(job.description as string),
//             job_name: job_name,
//           },
//         });
//         console.log(response)
//     }
//   } catch (e: any) {
//     console.error(`Error saving jobs to database: ${e.message}`);
//     console.error(e);
//   } finally {
//     await prisma.$disconnect();
//   }
// }
