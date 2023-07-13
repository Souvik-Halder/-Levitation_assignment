import React from 'react'
import { FileProvider, FileUploadComponent } from '../../../provider/FileUploadProvider';
const StepFileUpload = () => {
  return (
    <div>

<FileProvider>
      <div>
        
        <FileUploadComponent />
      </div>
    </FileProvider>
      
    </div>
  )
}

export default StepFileUpload
