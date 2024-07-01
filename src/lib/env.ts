import { z } from 'zod';

const envVariables = z.object({
  JWT_SECRET: z.string(),
  NODEMAILER_EMAIL: z.string(),
  NODEMAILER_PASS: z.string(),
  GITHUB_ID: z.string(),
  GITHUB_SECRET: z.string(),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
