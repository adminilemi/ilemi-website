import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifySession } from './libs/session';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // console.log(`Middleware called for path: ${pathname}`);

  // Allow the user to access auth routes without authentication
  if (!pathname.startsWith('/dashboard/')) {
    // console.log('Auth route accessed, allowing without authentication');
    return NextResponse.next();
  }

  // Check if the user is authenticated
  const session = await verifySession();

  if (!session.isAuth) {
    // Redirect to the login page if not authenticated
    // console.log('User not authenticated, redirecting to /auth/signin');
    const loginUrl = new URL('/auth/signin', req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Continue to the requested page if authenticated
  // console.log('User authenticated, allowing access');
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
