import { NextRequest, NextResponse } from 'next/server';
import { verifyAdmin } from './lib/verify_admin';

enum ADMIN {
  HOME = '/admin',
  DASHBOARD = '/admin/dashboard',
  LOGIN = '/admin/login',
}

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isAdminPath =
    path === ADMIN.DASHBOARD || path.startsWith(ADMIN.DASHBOARD);

  const token = req.cookies.get('cesa_admin_token')?.value as string;

  // If the path is not an admin path and there's no token, allow the request
  if (!isAdminPath && !token) {
    return NextResponse.next();
  }

  // If the path is an admin path and there's no token, redirect to login
  if (isAdminPath && !token) {
    return NextResponse.redirect(new URL(ADMIN.LOGIN, req.url));
  }

  // If the path is the login page and there's a token, redirect to dashboard
  if (path === ADMIN.LOGIN && token) {
    return NextResponse.redirect(new URL(ADMIN.DASHBOARD, req.url));
  }

  // If the path is not an admin path and there's a token, allow the request
  if (!isAdminPath && token) {
    return NextResponse.next();
  }

  try {
    // Verify the admin token
    await verifyAdmin(token);

    // If token is valid, allow the request
    return NextResponse.next();
  } catch (err) {
    // If token is invalid, redirect to login
    return NextResponse.redirect(new URL(ADMIN.LOGIN, req.url));
  }
}

export const config = {
  matcher: [
    '/admin/dashboard/(.*)',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
