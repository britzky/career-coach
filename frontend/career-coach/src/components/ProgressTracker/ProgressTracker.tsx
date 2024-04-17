import { Stepper, Step } from '@mui/material';
import { Checkmark } from '../../assets/icons/Checkmark';
import { useProgressState } from '../../context/ProgressContex/ProgressContext';

export const ProgressTracker = () => {
    const { totalSteps, activeStep } = useProgressState();

  return (
    <Stepper activeStep={activeStep}>
    {[...Array(totalSteps)].map((_, index) => (
      <Step key={index}>
        <div className={`flex items-center justify-center w-6 h-6 rounded-full ${activeStep > index + 1 ? 'bg-purple' : 'border-2 border-purpleText'}`}>
          {activeStep >= index + 1 ? <Checkmark /> : null}
        </div>
      </Step>
    ))}
  </Stepper>
  )
}
