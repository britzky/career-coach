import { useEffect } from 'react';
import { CareerInfoCard } from '../../components';
import { useCareerDetails } from '../../context/CareerContext';

export const SkillLevel = () => {
  const { careerDetails, updateCareer } = useCareerDetails()

  const handleCardClick = (tag: string) => {
    updateCareer('current_knowledge', tag)
  }
  // remove before shipping to production
  useEffect(() => {
    console.log(careerDetails)
  }, [careerDetails])

  return (
    <div className="flex justify-center min-h-screen w-full mt-14">
      <div className="flex flex-col max-w-[1200px]">
        <div className="flex justify-center mb-8">
          <p className="text-purpleText text-base font-bold">What is your current knowledge in <span className="bg-current-knowledge gradient-text">updateCareer('career', value)</span>?</p>
        </div>
        <div className="flex gap-10 justify-center">
          <div>
            <CareerInfoCard text="Beginner" tag="beginner" onCardClick={handleCardClick}/>
          </div>
          <div>
            <CareerInfoCard text="Intermediate" tag="intermediate" onCardClick={handleCardClick}/>
          </div>
          <div>
            <CareerInfoCard text="Expert" tag="expert" onCardClick={handleCardClick}/>
          </div>
        </div>
      </div>
    </div>
  )
}
