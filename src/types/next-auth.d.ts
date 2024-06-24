import 'next-auth';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    github?: string;
    avatar?: string;
  }
  interface Session {
    user: {
      github?: string;
      avatar?: string;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    github?: string;
    avatar?: string;
  }
}
