import React, { useState, useEffect } from 'react'
import { InputBox, NavButton } from '../../components'
import { useCareerDetails } from '../../context/CareerContext'
import { useProgressState } from '../../context/ProgressContex/ProgressContext'
import { ProgressTracker } from '../../components/ProgressTracker'

export const Budget: React.FC = () => {
  const { updateCareer } = useCareerDetails();
  const [budget, setBudget] = useState<number | null>(null);
  const { setActiveStep } = useProgressState();

  const handleInputChange = (value: string) => {
    // Check if the entered value is not empty and is a valid number
    if (value.trim() !== '' && !isNaN(Number(value))) {
      // Update the budget state and career details
      const newBudget = Number(value);
      setBudget(newBudget);
      updateCareer('budget', newBudget);
    } else {
      // If the entered value is empty or not a valid number, clear the budget state and career details
      setBudget(0);
      updateCareer('budget', 0);
    }
  }

  useEffect(() => {
    if (budget !== null) {
      setActiveStep(4); // Set active step to 4 if budget is entered
    }
  }, [budget]);

  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex flex-col mt-28 w-full">
        <div className="flex justify-center mb-8">
          <p className='text-purpleText text-xl font-bold'>What is your <span className="bg-budget gradient-text">total budget</span> per month? (optional)</p>
        </div>
        <div className='flex justify-center'>
          <div className='flex items-center'>
            <InputBox placeholder='$100' onChange={handleInputChange}/>
            <span className='ml-2'>USD</span>
          </div>
        </div>
        <div className="flex justify-between mt-auto mb-10">
          <NavButton back to='/hours-per-week'>Back</NavButton>
          <div style={{ flexGrow: 1}} className='mx-[30rem]'>
            <ProgressTracker />
          </div>
          <NavButton to='/learning-style'>Continue</NavButton>
        </div>
      </div>
    </div>
  );
};

