import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface PrimaryAddress {
    primaryAddress: string;
    primaryCountry: string;
    primaryPin: string;
}
interface SecondaryAddress {
    secondaryAddress: string;
    secondaryCountry: string;
    secondaryPin: string;
}
type InitialState = {
 primaryAddress:PrimaryAddress|null;
 secondaryAddress:SecondaryAddress|null;

}
const initialState: InitialState = {
  primaryAddress: null,
  secondaryAddress:null
}


const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    secondaryAddressHandler: (state, action: PayloadAction<SecondaryAddress>) => {
        console.log(action.payload)
        state.secondaryAddress = action.payload
    },
    primaryAddressHandler: (state, action: PayloadAction<PrimaryAddress>) => {
      console.log(action.payload)
      state.primaryAddress = action.payload
    }
  }
})

export default addressSlice.reducer
export const { secondaryAddressHandler, primaryAddressHandler } = addressSlice.actions