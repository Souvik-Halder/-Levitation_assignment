import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SingleFileUploadState {
  file: File | null;
}

const initialState: SingleFileUploadState = {
  file: null,
};

const SingleFileUploadSlice = createSlice({
  name: 'singleFileUpload',
  initialState,
  reducers: {
    setFile: (state, action: PayloadAction<File | null>) => {
      state.file = action.payload;
    },
  },
});

export const { setFile } = SingleFileUploadSlice.actions;

export default SingleFileUploadSlice.reducer;
