import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  email: string;
    password: string;
}
const initialState: InitialState = {
  email: '',
password: ''
}

const signInSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  
    signInHandler: (state, action: PayloadAction<number>) => {
        const {email,password}=action.payload
      state.email=email;
        state.password=password;
    }
  }
})

export default signInSlice.reducer
export const { signInHandler } = signInSlice.actions