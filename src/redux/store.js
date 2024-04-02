import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import postSlice from './features/post/postSlice'
import requestSlice from './features/request/requestSlice'
import commentSlice from './features/comment/commentSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        post: postSlice,
        comment: commentSlice,
        request: requestSlice,
    },
})
