import { useEffect } from 'react';
import { CareerInfoCard } from '../../components'
import { useCareerDetails } from '../../context/CareerContext';

export const LearningStyle = () => {
  const  { careerDetails, updateCareer } = useCareerDetails()

  const handleCardClick = (tag: string) => {
    updateCareer('preferred_learning_style', tag)
  }
  // remove before shipping to production
  useEffect(() => {
    console.log(careerDetails)
  }, [careerDetails])

  return (
    <div className="flex justify-center min-h-screen w-full mt-14">
      <div className="flex flex-col">
        <div className="flex justify-center mb-8">
          <p className="text-purpleText text-base font-bold">What is the preferred <span className="bg-learning-style gradient-text">learning style</span>?</p>
        </div>
        <div className="flex gap-10 justify-center">
          <div>
            <CareerInfoCard text="Project Based" tag="project" onCardClick={handleCardClick}/>
          </div>
          <div>
            <CareerInfoCard text="Video Based" tag="video" onCardClick={handleCardClick} />
          </div>
          <div>
            <CareerInfoCard text="Assessment Based" tag="Assessment" onCardClick={handleCardClick} />
          </div>
          <div>
            <CareerInfoCard text="Micro learning" tag="micro learning" onCardClick={handleCardClick} />
          </div>
        </div>
      </div>
    </div>
  )
}
