import React, { ChangeEvent, useState, createContext, useContext } from 'react';
import {  useAppDispatch } from '../hooks/index'
import { addMultipleFile } from '../store/MultiFileUploadSlice/MultipleFileUploadSlice';

interface FileData {
  path: string;
  name: string;
  type: string;
  size: number;
  mime: string;
  meta: Record<string, any>;
  url: string;
}

interface FileContextData {
  files: FileData[];
  addFiles: (files: FileData[]) => void;
}

const FileContext = createContext<FileContextData>({
  files: [],
  addFiles: () => {},
});

const MultiFileUploadComponent: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [filePreviews, setFilePreviews] = useState<string[]>([]);
  const dispatch = useAppDispatch()
  const { addFiles } = useContext(FileContext);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newSelectedFiles: File[] = Array.from(files);
      setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...newSelectedFiles]);

      const newFilePreviews: string[] = Array.from(files).map((file) => URL.createObjectURL(file));
      setFilePreviews((prevFilePreviews) => [...prevFilePreviews, ...newFilePreviews]);
    }
  };

  const handleFileUpload = () => {
    setTimeout(() => {
    const fileData: FileData[] = selectedFiles.map((file, index) => {
      return {
        path: file.path || '',
        name: file.name,
        type: file.type,
        size: file.size,
        mime: file.type,
        meta: {},
        url: filePreviews[index] || '',
      };
    });
    console.log(fileData)
    addFiles(fileData);
    dispatch(addMultipleFile(fileData))
    }, 1000);
  };

  return (
    <div  className="mx-auto flex max-h-full min-h-[300px] w-full items-center justify-center bg-gray-900 text-white">
      <input type="file" multiple onChange={handleFileChange} />
     
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

const FileProvider: React.FC = ({ children }) => {
  const [files, setFiles] = useState<FileData[]>([]);

  const addFiles = (newFiles: FileData[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);

  };

  return (
    <FileContext.Provider value={{ files, addFiles }}>
      {children}
    </FileContext.Provider>
  );
};

export { MultiFileUploadComponent, FileProvider };
