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

  const admin_token = req.cookies.get('cesa_admin_token')?.value as string;

  const user_token = req.cookies.get('user_verify_token')?.value as string;

  if (path.startsWith('/learn/contribute') && !user_token) {
    return NextResponse.redirect(new URL('/learn/user-verify', req.url));
  }

  if (path.startsWith('/learn/user-verify') && user_token) {
    return NextResponse.redirect(new URL('/learn/contribute', req.url));
  }

  // If the path is not an admin path and there's no admin_token, allow the request
  if (!isAdminPath && !admin_token) {
    return NextResponse.next();
  }

  // If the path is an admin path and there's no admin_token, redirect to login
  if (isAdminPath && !admin_token) {
    return NextResponse.redirect(new URL(ADMIN.LOGIN, req.url));
  }

  // If the path is the login page and there's a admin_token, redirect to dashboard
  if (path === ADMIN.LOGIN && admin_token) {
    return NextResponse.redirect(new URL(ADMIN.DASHBOARD, req.url));
  }

  // If the path is not an admin path and there's a admin_token, allow the request
  if (!isAdminPath && admin_token) {
    return NextResponse.next();
  }

  try {
    // Verify the admin admin_token
    await verifyAdmin(admin_token);

    // If admin_token is valid, allow the request
    return NextResponse.next();
  } catch (err) {
    // If admin_token is invalid, redirect to login
    return NextResponse.redirect(new URL(ADMIN.LOGIN, req.url));
  }
}

export const config = {
  matcher: [
    '/admin/dashboard/(.*)',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
