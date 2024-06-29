import 'next-auth';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    github?: string;
    role?: string;
  }
  interface Session {
    user: {
      github?: string;
      role?: string;
      id?: string;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    github?: string;
    role?: string;
    id?: string;
  }
}
