import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface PrimaryAddress {
    address_one: string;
    address_two: string;
    pinCode: number;
    state:string;
    city:string;
    country:string;

}

type InitialState = {
 primaryAddress:PrimaryAddress|null;
 

}
const initialState: InitialState = {
  primaryAddress: null,
 
}


const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
  
    addressHandler: (state, action: PayloadAction<PrimaryAddress>) => {
      console.log(action.payload)
      state.primaryAddress = action.payload;
    }
  }
})

export default addressSlice.reducer
export const { addressHandler } = addressSlice.actions