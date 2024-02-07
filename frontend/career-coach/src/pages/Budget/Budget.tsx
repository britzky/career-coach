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
const Footer: React.FC = ({ children }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {children}
    </div>
  );
};

export const Budget: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      <div>
        <p className='text-purple-900'>What is your budget? (optional)</p>
      </div>
      <div className='w-40'><InputBox placeholder='Enter your budget'/></div>
      <div style={{ marginTop: 'auto' }}>
        <Footer>
          <NavButton>Back</NavButton>
          <NavButton>Continue</NavButton>
        </Footer>
      </div>
    </div>
  );
};

