import { configureStore } from '@reduxjs/toolkit'
import addressReducer from './AddressSlice/addressSlice'
import basicDetailsReducer from './BasicDetailsSlice/BasicDetailsSlice'
import singleFileUploadReducer from './SingleFileUploadSlice/SingleFileUploadSlice'
import multipleFileUploadReducer from './MultiFileUploadSlice/MultipleFileUploadSlice'
import signInReducer from './SignInSlice/SignInSlice'
import locationReducer from './LocationSlice/locationSlice'
import stageReducer from './StageSlice/StageSlice'


const store = configureStore({
  reducer: {
    address:addressReducer,
    basicdetails:basicDetailsReducer,
    singleFileUpload: singleFileUploadReducer,
    multipleFileUpload:multipleFileUploadReducer,
    auth:signInReducer,
    location:locationReducer,
    stage:stageReducer
  }
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch