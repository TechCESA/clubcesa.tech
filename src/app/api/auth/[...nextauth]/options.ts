import { db } from '@/firebaseConfig';
import { doc, getDoc } from '@firebase/firestore';
import type { NextAuthOptions } from 'next-auth';
import Github from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      async profile(profile) {
        const usersData = await getDoc(doc(db, 'admin', 'emails'));

        if (!usersData.exists()) {
          return {
            ...profile,
            github: profile.html_url,
            image: profile.avatar_url,
            role: 'user',
          };
        }

        const userEmails = usersData.data()['data'] as string[];

        if (userEmails.includes(profile.email)) {
          return {
            ...profile,
            github: profile.html_url,
            image: profile.avatar_url,
            role: 'admin',
          };
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.github = user.github;
        token.picture = user.image;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.github = token.github;
        session.user.image = token.picture;
        session.user.role = token.role;
      }
      return session;
    },
  },
  theme: {
    logo: '/cesa_logo.png',
    colorScheme: 'light',
  },
} satisfies NextAuthOptions;
