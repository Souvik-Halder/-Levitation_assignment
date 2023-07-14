import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  stage: number
}
const initialState: InitialState = {
  stage: 1
}

const stageSlice = createSlice({
  name: 'stage',
  initialState,
  reducers: {
    increaseStage: (state) => {
      state.stage++
    },
    decreaseStage: (state) => {
      state.stage--
    }
  }
})

export default stageSlice.reducer
export const { increaseStage, decreaseStage } = stageSlice.actions