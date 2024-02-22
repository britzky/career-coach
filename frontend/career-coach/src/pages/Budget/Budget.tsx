import React from 'react'
import { InputBox, NavButton } from '../../components'
import { useCareerDetails } from '../../context/CareerContext';

export const Budget: React.FC = () => {
  const { updateCareer } = useCareerDetails();

  const handleInputChange = (value: string) => {
    updateCareer('budget', Number(value))
  }

  return (
    <div className="flex justify-center min-h-screen w-full">
      <div className="flex flex-col max-w-[1200px] mt-28">
        <div className="flex justify-center mb-8">
          <p className='text-purpleText text-base font-bold'>What is your <span className="bg-budget gradient-text">total budget</span> per week? (optional)</p>
        </div>
        <div className='flex justify-center'>
          <div className='flex items-center'>
            <InputBox placeholder='$100' onChange={handleInputChange}/>
            <span className='ml-2'>USD</span>
          </div>
        </div>
        <div className="flex justify-between mt-auto mb-10 w-[1200px]">
          <NavButton back to='/hours-per-week'>Back</NavButton>
          <NavButton to='/learning-style'>Continue</NavButton>
        </div>
      </div>
    </div>
  );
};

