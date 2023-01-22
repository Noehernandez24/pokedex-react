import { configureStore } from '@reduxjs/toolkit'
import  postPerPageSlice from './slices/postPerPage.slice'
import  userNameSlice  from './slices/userName.slice'

export default configureStore({
  reducer: {
    userName: userNameSlice,
    postPerPage: postPerPageSlice,
	}
})