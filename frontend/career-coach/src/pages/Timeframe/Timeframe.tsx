import { InputBox, NavButton } from '../../components'
import { useCareerDetails } from '../../context/CareerContext'

export const Timeframe = () => {
  const { updateCareer } = useCareerDetails();

  const handleInputChange = (value: string) => {
    updateCareer('timeframe', value)
  }

  return (
    <div className="flex justify-center min-h-screen w-full mt-14">
      <div className="flex flex-col max-w-[1200px]">
        <div className="flex justify-center mb-8">
          <p className="text-purpleText text-base font-bold">What is your expected<span className="bg-timeframe gradient-text"> timeframe</span>?</p>
        </div>
        <div className="flex flex-col items-center">
          <div className='mb-6 w-40 flex justify-center'> {/* added flex justify-center */}
            <InputBox placeholder='12' onChange={handleInputChange}/>
            <span className='ml-2'>Months</span> {/* added this line */}
          </div>
          <div className='mb-6 w-40 flex justify-center'>
            <InputBox placeholder='0' onChange={handleInputChange} />
            <span className='ml-2'>Years</span>
          </div>
        </div>
        <div className="flex justify-between mt-40 w-[1200px]">
          <NavButton back to='/learning-style'>Back</NavButton>
          <NavButton to='/skill-level'>Continue</NavButton>
        </div>
      </div>
    </div>
  )
}
