import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import Github from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        return {
          ...profile,
          github: `https://github.com/${profile.login}`,
          avatar: profile.avatar_url,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.github = user.github;
        token.avatar = user.avatar;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.github = token.github;
        session.user.avatar = token.avatar;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
