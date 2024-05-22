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
          <p className='text-purpleText text-base text-center lg:text-xl font-bold'>What is your <span className="bg-budget gradient-text">total budget</span> per month? (optional)</p>
        </div>
        <div className='flex justify-center'>
          <div className='flex items-center w-[120px]'>
            <InputBox placeholder='$100' onChange={handleInputChange}/>
            <span className='ml-4 text-xs'>USD</span>
          </div>
        </div>
        <div className="flex justify-between mt-auto mb-10 w-full">
          <NavButton back to='/'>Back</NavButton>
          <div style={{ flexGrow: 1}} className='lg:mx-[30rem] hidden lg:block'>
            <ProgressTracker />
          </div>
          <div className='flex'>
            <NavButton to='/learning-style'>Continue</NavButton>
          </div>
        </div>
        <div className="lg:hidden mb-10">
          <ProgressTracker />
        </div>
      </div>
    </div>
  );
};

