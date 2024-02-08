import React from 'react'
import { InputBox } from '../../components/InputBox'
import { NavButton } from '../../components/NavButton'

export const Budget: React.FC = () => {
  return (
    <div className="flex justify-center min-h-screen w-full mt-14">
      <div className="flex flex-col max-w-[1200px]">
        <div className="flex justify-center mb-8">
          <p className='text-purpleText text-base font-bold'>What is your <span className="bg-budget gradient-text">total budget</span>? (optional)</p>
        </div>
        <div className='flex justify-center'>
          <div className='flex items-center'>
            <InputBox placeholder='$100'/>
            <span className='ml-2'>USD</span>
          </div>
        </div>
        <div className="flex justify-between mt-40 w-[1200px]">
          <NavButton back to='/hours-per-week'>Back</NavButton>
          <NavButton to='/desired-skills'>Continue</NavButton>
        </div>
      </div>
    </div>
  );
};

