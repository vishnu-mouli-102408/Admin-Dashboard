import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL,
  }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Likelihood", "Relevance", "Year", "Country", "Topic"],
  endpoints: (build) => ({
    getIntensity: build.query({
      query: () => `client/intensity`,
      providesTags: ["User"],
    }),
    getLikelihood: build.query({
      query: () => `client/likelihood`,
      providesTags: ["Likelihood"],
    }),
    getRelevance: build.query({
      query: () => `client/relevance`,
      providesTags: ["Relevance"],
    }),
    getYear: build.query({
      query: () => `client/year`,
      providesTags: ["Year"],
    }),
    getCountry: build.query({
      query: () => `client/country`,
      providesTags: ["Country"],
    }),
    getTopic: build.query({
      query: () => `client/topics`,
      providesTags: ["Topic"],
    }),
  }),
});

export const {
  useGetIntensityQuery,
  useGetLikelihoodQuery,
  useGetRelevanceQuery,
  useGetYearQuery,
  useGetCountryQuery,
  useGetTopicQuery,
} = api;
