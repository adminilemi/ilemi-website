'use server';

import { cookies } from 'next/headers';

import { SignJWT, jwtVerify } from 'jose';

const secretKey = process.env.NEXT_PUBLIC_SESSION_KEY;

const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1d')
    .sign(encodedKey);
}

export async function decrypt(session) {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    });

    return payload;
  } catch (error) {
    console.log('Failed to verify session');
  }
}

export async function createSession(userId) {
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });

  cookies().set('property4u-tenant-session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
}

export const verifySession = async () => {
  const cookie = cookies().get('property4u-tenant-session')?.value;
  const session = await decrypt(cookie);
  if (!session) {
    // redirect('/auth/signin');
    return { isAuth: false };
  }

  return { isAuth: true, userId: session.userId };
};

export async function deleteSession() {
  cookies().delete('property4u-tenant-session');
}

// This will be the global headers since i cant make the interceptor work
export const fetchHeaders = async () => {
  const { userId } = await verifySession();

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ['Authorization']: `Bearer ${userId}`,
  };
  return headers;
};

export const uploadHeaders = async () => {
  const { userId } = await verifySession();

  const headers = {
    // 'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
    // 'Content-Type': 'application/json',
    ['Authorization']: `Bearer ${userId}`,
  };
  return headers;
};
