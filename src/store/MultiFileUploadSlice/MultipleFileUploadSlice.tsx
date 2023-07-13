import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MultipleFileUploadState {
  files: File[];
}

const initialState: MultipleFileUploadState = {
  files: [],
};

const MultipleFileUploadSlice = createSlice({
  name: 'multipleFileUpload',
  initialState,
  reducers: {
    addMultipleFile: (state, action: PayloadAction<File>) => {
      state.files.push(action.payload);
    },
  },
});

export const { addMultipleFile } = MultipleFileUploadSlice.actions;

export default MultipleFileUploadSlice.reducer;
