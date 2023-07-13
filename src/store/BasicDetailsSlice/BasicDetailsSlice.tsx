import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface BasicDetails {
    userName: string;
    phone: number;
    email: string;
}

type InitialState = {
 basicDetails:BasicDetails|null;


}
const initialState: InitialState = {
  basicDetails: null,
  
}


const basicDetailsSlice = createSlice({
  name: 'basicdetails',
  initialState,
  reducers: {
  
    basicDetailsHandler: (state, action: PayloadAction<BasicDetails>) => {
      console.log(action.payload)
      state.basicDetails = action.payload
    }
  }
})

export default basicDetailsSlice.reducer
export const { basicDetailsHandler } = basicDetailsSlice.actions