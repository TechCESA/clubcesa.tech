import { db } from '@/firebaseConfig';
import { doc, getDoc, setDoc } from '@firebase/firestore';
import type { NextAuthOptions } from 'next-auth';
import Github from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      async profile(profile) {
        try {
          const usersData = await getDoc(doc(db, 'admin', 'emails'));

          if (usersData.exists()) {
            const usersEmail = usersData.data()['data'] as string[];

            if (usersEmail.includes(profile.email)) {
              return {
                ...profile,
                github: profile.html_url,
                image: profile.avatar_url,
                role: 'admin',
              };
            }
          }

          return {
            ...profile,
            github: profile.html_url,
            image: profile.avatar_url,
            role: 'user',
          };
        } catch (error) {
          console.error('Error validating admin:', error);
          return {
            ...profile,
            github: profile.html_url,
            image: profile.avatar_url,
            role: 'user',
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
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.github = token.github;
        session.user.image = token.picture;
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
    async signIn({ user }) {
      try {
        const authorRef = doc(db, 'authors', user.id.toString());

        const authorSnap = await getDoc(authorRef);

        if (authorSnap.exists()) {
          return true;
        }

        await setDoc(authorRef, {
          name: user.name,
          email: user.email,
          github: user.github,
          role: user.role,
          avatar: user.image,
          resources: [],
          createdAt: Date.now(),
        });

        return true;
      } catch (error) {
        console.log({ error });
        throw new Error('Error: Adding author to firestore');
      }
    },
  },
  theme: {
    logo: '/cesa_logo.png',
    colorScheme: 'light',
  },
} satisfies NextAuthOptions;
