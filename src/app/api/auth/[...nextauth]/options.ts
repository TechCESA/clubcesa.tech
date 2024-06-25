import type { NextAuthOptions } from 'next-auth';
import Github from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        return {
          ...profile,
          github: profile.html_url,
          image: profile.avatar_url,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.github = user.github;
        token.picture = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.github = token.github;
        session.user.image = token.picture;
      }
      return session;
    },
  },
  theme: {
    logo: '/cesa_logo.png',
    colorScheme: 'light',
  },
} satisfies NextAuthOptions;
