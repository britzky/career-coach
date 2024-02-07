import React from 'react'
import { InputBox } from '../../components/InputBox'
import { NavButton } from '../../components/NavButton'

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
    <div className="flex justify-center min-h-screen w-full mt-14">
      <div className="flex flex-col max-w-[1200px]">
        <div className="flex justify-center mb-8">
          <p className='text-purpleText text-base font-bold'>What is your <span className="bg-budget gradient-text">total budget</span>? (optional)</p>
        </div>
        <div className='flex justify-center'>
          <div>
            <InputBox placeholder='$100'/>
          </div>
        </div>
        <div style={{ marginTop: 'auto' }}>
          <Footer>
            <NavButton>Back</NavButton>
            <NavButton>Continue</NavButton>
          </Footer>
        </div>
      </div>
    </div>
  );
};

