import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

const customBaseQuery = fetchBaseQuery({
  baseUrl: 'https://property-4u-befe5e00eae1.herokuapp.com',

  prepareHeaders: (headers) => {
    // Get your token from wherever you have it stored
    const userToken = Cookies.get('ilemiUserToken');

    if (userToken) {
      // Set the 'Authorization' header with the token
      headers.set('Authorization', `Bearer ${userToken}`);
      headers.set('x-access-token', userToken);
    }

    return headers;
  },
});

export const apiSLice = createApi({
  baseQuery: customBaseQuery,

  tagTypes: ['allProperty', 'jobs', 'sub', 'candidates', 'Teams'],

  // All endpoints
  endpoints: (builder) => ({
    // get user data
    getAgent: builder.query({
      query: (agentId) => `/Agent/get-agent-by-id/${agentId}`,

      //   the param here is the id, hence the reason for id: arg
      providesTags: [{ type: 'sub', id: 'LIST' }],
    }),

    getReqStats: builder.query({
      query: (id) => `/tenantrequest/tenant/${id}/stats`,
      // providesTags: [{ type: 'sub', id: 'LIST' }],
    }),
  }),
});

export const { useGetAgentQuery, useGetReqStatsQuery } = apiSLice;
