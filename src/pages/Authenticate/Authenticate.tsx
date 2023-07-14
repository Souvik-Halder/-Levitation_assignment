import { useState,useEffect } from 'react';
import StepLogin from '../Steps/StepLogin/StepLogin';
import { useNavigate } from 'react-router-dom';
import {  Toaster } from 'react-hot-toast';

interface Steps {
  [key: number]: React.ComponentType<StepProps>;
}

interface StepProps {
  onNext: () => void;
  // Add other props here
}

const steps: Steps = {
  1: StepLogin,
 
};

const Authenticate = (): JSX.Element => {
  const [step, setStep] = useState<number>(1);
  const StepComponent: React.ComponentType<StepProps> = steps[step];

  function onNext(): void {
    setStep((prevStep) => prevStep + 1);
  }

  const navigate=useNavigate()

  useEffect(()=>{
    if(localStorage.getItem('token')!==null){
      console.log(localStorage.getItem('token'))
      navigate('/activate');
    }
  },[navigate])

  return (
    <>
      <Toaster position="top-center"
  reverseOrder={false}
/>

      <StepComponent onNext={onNext} />
    </>
  );
};

export default Authenticate;
