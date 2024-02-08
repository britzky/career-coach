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
        <div className='flex justify-center'> {/* added this line/div  */}    
          <div className="flex flex-col justify-center w-[700px]">
            <div className='mb-8 flex items-center'>
              <span className='mr-2 text-purpleText text-base'>Skill 1</span>
              <InputBox placeholder='Figma' onBlur={handleInputChange} border/>
            </div>
            <div className='mb-8 flex items-center'>
              <span className='mr-2 text-purpleText text-base'>Skill 2</span>
              <InputBox placeholder='Skill 2' onBlur={handleInputChange} border/>
            </div>
            <div className='mb-8 flex items-center'>
              <span className='mr-2 text-purpleText text-base'>Skill 3</span>
              <InputBox placeholder='Skill 3' onBlur={handleInputChange} border/>
            </div>
            <div className='mb-8 flex items-center'>
              <span className='mr-2 text-purpleText text-base'>Skill 4</span>
              <InputBox placeholder='Skill 4' onBlur={handleInputChange} border/>
            </div>
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
