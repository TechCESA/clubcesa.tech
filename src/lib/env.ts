import { z } from 'zod';

const envVariables = z.object({
  JWT_SECRETE: z.string(),
  NODEMAILER_EMAIL: z.string(),
  NODEMAILER_PASS: z.string(),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
