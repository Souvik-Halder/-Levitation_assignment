import React, { ChangeEvent, useState, createContext, useContext } from 'react';
import {  useAppDispatch } from '../hooks/index'
import { setFile } from '../store/SingleFileUploadSlice/SingleFileUploadSlice';

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
  addFile: (file: FileData) => void;
}

const FileContext = createContext<FileContextData>({
  files: [],
  addFile: () => {},
});

const FileUploadComponent: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const dispatch = useAppDispatch()
  const { addFile } = useContext(FileContext);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file);
    if (file) {
      setFilePreview(URL.createObjectURL(file));
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      // Perform the file upload logic here

      // Simulating a file upload delay
      setTimeout(() => {
        const fileData: FileData = {
          path: selectedFile.path || '',
          name: selectedFile.name,
          type: selectedFile.type,
          size: selectedFile.size,
          mime: selectedFile.type,
          meta: {},
          url: filePreview || '',
        };

        addFile(fileData);
        dispatch(setFile(fileData))
        console.log(fileData)
      }, 1000);
    }
  };

  return (
    <div  className="mx-auto flex min-h-[340px] w-full items-center justify-center bg-gray-900 text-white">
      <input type="file" onChange={handleFileChange} />
      {filePreview && <img src={filePreview} alt="File Preview" />}
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

const FileProvider: React.FC = ({ children }) => {
  const [files, setFiles] = useState<FileData[]>([]);

  const addFile = (file: FileData) => {
    setFiles((prevFiles) => [...prevFiles, file]);
  };

  return (
    <FileContext.Provider value={{ files, addFile }}>
      {children}
    </FileContext.Provider>
  );
};

export { FileUploadComponent, FileProvider };
