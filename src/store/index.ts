import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../store/CakeSlice/cakeSlice'
import addressReducer from './AddressSlice/AddressSlice'
import basicDetailsReducer from './BasicDetailsSlice/BasicDetailsSlice'
import singleFileUploadReducer from './SingleFileUploadSlice/SingleFileUploadSlice'
import multipleFileUploadReducer from './MultiFileUploadSlice/MultipleFileUploadSlice'
import signInReducer from './SignInSlice/SignInSlice'
import locationReducer from './LocationSlice/LocationSlice'


const store = configureStore({
  reducer: {
    cake: cakeReducer,
    address:addressReducer,
    basicdetails:basicDetailsReducer,
    singleFileUpload: singleFileUploadReducer,
    multipleFileUpload:multipleFileUploadReducer,
    auth:signInReducer,
    location:locationReducer
  }
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch