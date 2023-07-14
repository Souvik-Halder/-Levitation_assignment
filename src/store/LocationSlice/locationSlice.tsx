import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  geolocation: string
}
const initialState: InitialState = {
  geolocation: ''
}

const locationSlice = createSlice({
  name: 'geolocation',
  initialState,
  reducers: {
  
    storeGeoLocation: (state, action: PayloadAction<number>) => {
        const {geolocation}=action.payload
      state.geolocation =geolocation
    }
  }
})

export default locationSlice.reducer
export const { storeGeoLocation  } = locationSlice.actions