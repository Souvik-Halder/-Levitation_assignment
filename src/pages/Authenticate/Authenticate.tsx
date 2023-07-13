import { useState } from 'react';
import StepLogin from '../Steps/StepLogin/StepLogin';
import StepBasicDetails from '../Steps/StepBasicDetails/StepBasicDetails';

interface Steps {
  [key: number]: React.ComponentType<StepProps>;
}

interface StepProps {
  onNext: () => void;
  // Add other props here
}

const steps: Steps = {
  1: StepLogin,
  2: StepBasicDetails
};

const Authenticate = (): JSX.Element => {
  const [step, setStep] = useState<number>(1);
  const StepComponent: React.ComponentType<StepProps> = steps[step];

  function onNext(): void {
    setStep((prevStep) => prevStep + 1);
  }

  return (
    <>
      <StepComponent onNext={onNext} />
    </>
  );
};

export default Authenticate;
