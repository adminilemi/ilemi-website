import { createSession, deleteSession, fetchHeaders } from '@/libs/session';
import { baseUrl } from './Apis';
import { redirect } from 'next/navigation';
import { cache } from 'react';

export const UserGoogleAuth = async (formData) => {
  const signUpData = await fetch(`${baseUrl}/user/auth/signup-with-google`, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  if (!signUpData.ok) {
    const errorResponse = await signUpData.json();
    return errorResponse;
  }
  const rsp = await signUpData.json();

  const userId = rsp?.data?.access_token;

  await createSession(userId);

  return await rsp;
};

export const CreateUser = async (formData) => {
  const signUpData = await fetch(`${baseUrl}/auth/TenantSignup`, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'content-type': 'application/json',
    },

    //   next: {
    //     revalidate: 0, // don't cache this data at all
    //   },
  });

  if (!signUpData.ok) {
    const errorResponse = await signUpData.json();
    return errorResponse;
  }

  const rsp = await signUpData.json();
  const userId = rsp?.data?.token;

  await createSession(userId);

  return await rsp;
};

export const LoginUser = async (formData) => {
  const LoginData = await fetch(`${baseUrl}/auth/Tenantlogin`, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  if (!LoginData.ok) {
    const errorResponse = await LoginData.json();
    return errorResponse;
  }

  const rsp = await LoginData.json();

  // const expiresAt = new Date();
  const userId = rsp?.data?.token;
  await createSession(userId);

  return await rsp;
};

export const passwordChangeReq = async (email) => {
  const passwordData = await fetch(
    `${baseUrl}/tenant/verification/initiate-forgot-password-flow/${email}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  );

  if (!passwordData.ok) {
    const errorResponse = await passwordData.json();
    return errorResponse;
  }

  const rsp = await passwordData.json();

  return await rsp;
};

export const resetPassword = async (formData) => {
  const passwordData = await fetch(
    `${baseUrl}/tenant/verification/change-password`,
    {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  );

  if (!passwordData.ok) {
    const errorResponse = await passwordData.json();
    return errorResponse;
  }

  const rsp = await passwordData.json();

  return await rsp;
};

export const resendOTP = async (userId) => {
  const LoginData = await fetch(
    `${baseUrl}/tenant/TenatResend-otp-code/${userId}`,
    {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  );

  if (!LoginData.ok) {
    const errorResponse = await LoginData.json();
    return errorResponse;
  }

  const rsp = await LoginData.json();

  return await rsp;
};

export const verifyWithOTP = async (formData) => {
  const LoginData = await fetch(
    `${baseUrl}/tenant/Tenatification/verify-signup-or-login-code`,
    {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  );

  if (!LoginData.ok) {
    const errorResponse = await LoginData.json();
    return errorResponse;
  }

  const rsp = await LoginData.json();

  return await rsp;
};

export const LogoutUser = async () => {
  deleteSession();
  redirect('/login');
};

export const updateUser = async (formData) => {
  const headers = await fetchHeaders();

  const rsp = await fetch(`${baseUrl}/tenant/update-Tenant`, {
    method: 'PUT',
    body: JSON.stringify(formData),
    headers,
  });

  if (!rsp.ok) {
    const errorResponse = await rsp.json();
    return errorResponse;
  }

  return await rsp.json();
};

export const inAppPasswordChange = async (formData) => {
  const headers = await fetchHeaders();

  const rsp = await fetch(`${baseUrl}/user/change/password`, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers,
  });

  if (!rsp.ok) {
    const errorResponse = await rsp.json();
    return errorResponse;
  }

  return await rsp.json();
};

export const getCurrentUser = cache(async ({ userId }) => {
  const headers = await fetchHeaders();

  const rsp = await fetch(`${baseUrl}/tenant/get-Tenant-by-id/${userId}`, {
    method: 'GET',
    headers,

    next: { revalidate: 0 },
  });

  if (!rsp.ok) {
    const errorResponse = await rsp.json();
    return errorResponse;
  }
  return await rsp.json();
});
