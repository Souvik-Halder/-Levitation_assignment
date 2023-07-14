import { useState,useEffect } from 'react';
import StepBasicDetails from '../Steps/StepBasicDetails/StepBasicDetails';
import StepAddress from '../Steps/StepAddress/StepAddress';
import StepFileUpload from '../Steps/StepFileUpload/StepFileUpload';
import StepMultiFileUpload from '../Steps/StepMultiFileUpload/StepMultiFileUpload';
import StepStatus from '../Steps/StepStatus/StepStatus';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import toast, { Toaster } from 'react-hot-toast'
import Logout from '../../components/Logout/Logout';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { decreaseStage, increaseStage } from '../../store/StageSlice/StageSlice';
interface Steps {
  [key: number]: React.ComponentType<StepProps>;
}

interface StepProps {
  onNext: () => void;
  // Add other props here
}

const steps: Steps = {
  1: StepBasicDetails,
  2:StepAddress,
  3:StepFileUpload,
  4:StepMultiFileUpload,
  5:StepStatus
};

const Activate = (): JSX.Element => {


  
  const navigate=useNavigate()
  const [step, setStep] = useState<number>(1);
useEffect(()=>{
  if(localStorage.getItem('token')===null){
    console.log(localStorage.getItem('token'))
    navigate('/')
    const {stage}=useAppSelector(state=>state.stage)
    setStep(stage)
  }
},[navigate,step])


 
  const StepComponent: React.ComponentType<StepProps> = steps[step];
const dispatch=useAppDispatch()
  function onNext(): void {
    if(step===5){
      toast.error('You can\'t go next from this step', {
        style: {
          border: '1px solid #FFEA00',
          padding: '16px',
          color: '#713200',
        },
        icon: '⚠️',
      });
      return
    }
    setStep((prevStep) => prevStep + 1);
  }

  function onPrev(): void {
    if(step===1){
      toast.error('You can\'t go back from this step', {
        style: {
          border: '1px solid #FFEA00',
          padding: '16px',
          color: '#713200',
        },
        icon: '⚠️',
      });
      return
    }
      dispatch(decreaseStage())
    setStep((prevStep) => prevStep - 1);
  }

  return (
    <>
    <Toaster position="top-center"
  reverseOrder={false}
/>
    <div  className="mx-auto flex min-h-screen w-full flex-col items-center justify-center bg-gray-900 text-white">

<ProgressBar value={step}/>
<Logout/>
      <StepComponent onNext={onNext} />
 


 <div className='flex flex-wrap  sm:justify-center justify-center  items-center mb-14 gap-10'>
  <div>
  <button  onClick={onPrev} className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-black text-lg font-bold text-white">
  Back
    <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
  </button>
  </div>
  <div>
  <button  onClick={onNext} className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-black text-lg font-bold text-white">
     Next
    <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
  </button>
  </div>
  </div>

</div>
    </>
  );
};

export default Activate;
