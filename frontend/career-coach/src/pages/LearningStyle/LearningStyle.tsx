import { useState, useEffect } from 'react';
import { CareerInfoCard, NavButton } from '../../components';
import { useCareerDetails } from '../../context/CareerContext';

export const LearningStyle = () => {
  const  { careerDetails, updateCareer } = useCareerDetails()
  const [selectedCard, setSelectedCard] = useState<string | null>(null)

  const handleCardClick = (tag: string) => {
    updateCareer('preferred_learning_style', tag)
    setSelectedCard(tag)
  }
  // remove before shipping to production
  useEffect(() => {
    console.log(careerDetails)
  }, [careerDetails])

  return (
    <div className="flex justify-center min-h-screen w-full mt-14">
      <div className="flex flex-col max-w-[1200px]">
        <div className="flex justify-center mb-8">
          <p className="text-purpleText text-base font-bold">What is the preferred <span className="bg-learning-style gradient-text">learning style</span>?</p>
        </div>
        <div className="flex gap-10 justify-center">
          <div>
            <CareerInfoCard
              text="Project Based"
              tag="Project"
              onCardClick={handleCardClick}
              selected={selectedCard === 'Project'}
            />
          </div>
          <div>
            <CareerInfoCard
              text="Video Based"
              tag="Video"
              onCardClick={handleCardClick}
              selected={selectedCard === 'Video'}
            />
          </div>
          <div>
            <CareerInfoCard
              text="Assessment Based"
              tag="Assessment"
              onCardClick={handleCardClick}
              selected={selectedCard === 'Assessment'}
            />
          </div>
          <div>
            <CareerInfoCard
              text="Micro Learning"
              tag="Micro Learning"
              onCardClick={handleCardClick}
              selected={selectedCard === 'Micro Learning'}
            />
          </div>
        </div>
        <div className="flex justify-between mt-40 w-[1200px]">
          <NavButton back to='/desired-skills'>Back</NavButton>
          <NavButton to='/timeframe'>Continue</NavButton>
        </div>
      </div>
    </div>
  )
}
