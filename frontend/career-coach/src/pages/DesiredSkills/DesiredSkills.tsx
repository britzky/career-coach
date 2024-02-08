import { useEffect } from 'react'
import { InputBox } from '../../components/InputBox'
import { NavButton } from '../../components/NavButton'
import { useCareerDetails } from '../../context/CareerContext'

export const DesiredSkills = () => {
  const { updateCareer, careerDetails } = useCareerDetails();

  const handleInputChange = (value: string) => {
    if (value) {
      updateCareer('skills', value);
    }
  }

  // remove before shipping to production
  useEffect(() => {
    console.log(careerDetails)
  }, [careerDetails])

  return (
    <div className="flex justify-center min-h-screen w-full mt-14">
      <div className="flex flex-col items-center max-w-[1200px]">
        <div className="flex justify-center mb-8">
          <p className="text-purpleText text-base font-bold">What are some<span className="bg-desired-skills gradient-text"> skills </span>you want to gain? (optional)</p>
        </div>
        <div className="flex flex-col justify-center w-[791px]">
          <div className='mb-8'>
            <InputBox placeholder='Skill 1' border onBlur={handleInputChange} />
          </div>
          <div className='mb-8'>
            <InputBox placeholder='Skill 2' border onBlur={handleInputChange} />
          </div>
          <div className='mb-8'>
            <InputBox placeholder='Skill 3' border onBlur={handleInputChange} />
          </div>
          <div className='mb-8'>
            <InputBox placeholder='Skill 4' border onBlur={handleInputChange} />
          </div>
        </div>
        <div className="flex justify-between mt-28 w-[1200px]">
          <NavButton back to='/budget'>Back</NavButton>
          <NavButton to='/learning-style'>Continue</NavButton>
        </div>
      </div>
    </div>
  )
}
