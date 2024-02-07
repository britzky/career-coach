import React from 'react'
import { InputBox } from '../../components/InputBox'
import { NavButton } from '../../components/NavButton'

export const Timeframe = () => {
  return (
    <div className="flex justify-center min-h-screen w-full mt-14">
      <div className="flex flex-col max-w-[1200px]">
        <div className="flex justify-center mb-8">
          <p className="text-purpleText text-base font-bold">What is your expected<span className="bg-timeframe gradient-text"> timeframe</span>?</p>
        </div>
        <div className="flex flex-col items-center">
          <div className='mb-6 w-40'>
            <InputBox placeholder='12 Months'/>
          </div>
          <div className='mb-6 w-40'>
            <InputBox placeholder='0 Years'/>
          </div>         
        </div>
      </div>
    </div>
  )
}
