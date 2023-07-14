import React from 'react'
import { FileProvider, MultiFileUploadComponent } from '../../../provider/MultiFileUploadProvider';

const StepMultiFileUpload = () => {
  return (
    <div>
         <FileProvider>
      <div>
        
        <MultiFileUploadComponent />
      </div>
    </FileProvider>
      
    </div>
  )
}

export default StepMultiFileUpload
