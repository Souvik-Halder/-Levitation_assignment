import React from 'react'
import { FileProvider, MultiFileUploadComponent } from '../../../provider/MultiFileUploadProvider';

const StepMultiFileUpload = () => {
  return (
    <div>
         <FileProvider>
      <div>
        <h1>Multiple File Upload Example</h1>
        <MultiFileUploadComponent />
      </div>
    </FileProvider>
      
    </div>
  )
}

export default StepMultiFileUpload
