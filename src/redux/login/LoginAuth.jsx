import { useToken } from "../../hooks/token";
import { apiSlice } from "../mianProcess/Slice";

const authapi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: (params = {}) => ({
                url: '/products',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${useToken()|| ""}`,
                },
            }),
          providesTags: ["Post"],
        }),
      })
})

export const {useGetPostsQuery} = authapi




