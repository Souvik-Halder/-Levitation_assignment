import React, { ChangeEvent, useState, createContext, useContext } from 'react';
import {  useAppDispatch } from '../hooks/index'
import { addMultipleFile } from '../store/MultiFileUploadSlice/MultipleFileUploadSlice';
import DetailsHeading from '../components/DetailsHeading/DetailsHeading';
import { toast } from 'react-hot-toast';

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
    toast.success('Multiple File Uploaded Successfully,Now go to the Next page', {
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
      icon: '👏',
    });
    }, 1000);
  };

  return (
    <div  className="mx-auto flex min-h-[540px] w-full items-center justify-center bg-gray-900 text-white">

    
    <div className="container">
      <DetailsHeading value='Upload Multiple Files'/>
      <div className="max-w-4xl flex items-center justify-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-20">
        <div
          id="profile"
          className="w-auto rounded-lg shadow-2xl bg-white opacity-80 mx-6 lg:mx-0"
        >
          <div className="p-2 md:p-8 text-center lg:text-left">
            <div className="flex justify-start  rounded-full lg:mb-4 shadow-xl mx-auto lg:mx-1 -mt-20 h-48 w-48 bg-cover bg-center">
              <img className="rounded-full" src="/10.jpg" alt="" />
            </div>

            <div className="p-2 md:p-8 text-center lg:text-left">
              <div className="flex justify-center  ">
                <div className="py-4 pr-5">
                  <div
                   
                  
                    
                  >
                    <input
                      type="file"
                      className="h-10 w-28 text-white rounded-lg "

                      onChange={handleFileChange}
                      multiple
                      name="upload"
                      
                    />
                    <input
                      className="bg-green-700 h-10 w-28 text-white rounded-lg hover:bg-green-600"
                      onClick={handleFileUpload}
                      type="submit"
                      value="Upload"
                    />
                  </div>
                </div>
              </div>
              <p className="text-sm">
                Need help,feel free to &nbsp;
                <a href="#" className="font-bold underline hover:text-green-700">
                  contact us
                </a>{" "}
                &nbsp; or just use the below links
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
