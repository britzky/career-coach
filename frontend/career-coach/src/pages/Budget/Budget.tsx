import React from 'react'
import { InputBox } from '../../components/InputBox'
import { NavButton } from '../../components/NavButton';

// export const Budget = () => {
//   return (
//     <>
//     <div>Budget</div>
//     <div className='w-40'><InputBox placeholder='this is the budget'/></div>
//      </>
    
      
//   )
// }

export const Budget: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      <div>What is your budget? (optional)</div>
      <div className='w-40'><InputBox placeholder='Enter your budget'/></div>
      <div style={{ marginTop: 'auto' }}>
        <NavButton>Back</NavButton>
        <NavButton>Continue</NavButton>
      </div>
    </div>
  );
};