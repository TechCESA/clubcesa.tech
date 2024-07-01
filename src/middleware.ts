import { getToken } from 'next-auth/jwt';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith('/learn/contribute') && !token) {
    return NextResponse.redirect(
      new URL('/api/auth/signin?callbackUrl=/learn/contribute', req.url),
    );
  }

  if (pathname.startsWith('/dashboard/login') && !token) {
    return NextResponse.redirect(
      new URL('/api/auth/signin?callbackUrl=/dashboard', req.url),
    );
  }

  if (pathname.startsWith('/dashboard/login') && token) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  if (pathname.startsWith('/dashboard') && (!token || token.role !== 'admin')) {
    return NextResponse.redirect(new URL('/not-found', req.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/learn/contribute', '/me/:path*'],
};
