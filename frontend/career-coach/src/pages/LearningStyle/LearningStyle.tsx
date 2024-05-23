import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CareerInfoCard, NavButton } from '../../components';
import { useCareerDetails } from '../../context/CareerContext';
import { useProgressState } from '../../context/ProgressContex/ProgressContext';
import { ProgressTracker } from '../../components/ProgressTracker';

export const LearningStyle = () => {
  const  { careerDetails, updateCareer } = useCareerDetails()
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const navigate = useNavigate()
  const { setActiveStep } = useProgressState();

  const handleCardClick = (tag: string) => {
    updateCareer('preferred_learning_style', tag)
    setSelectedCard(tag)
  }
  // remove before shipping to production
  useEffect(() => {
    console.log(careerDetails)
  }, [careerDetails])

  useEffect(() => {
    setActiveStep(selectedCard ? 5 : 4); // Set active step based on whether a selection is made
  }, [selectedCard]);

  const handleContinueClick = () => {
    if (selectedCard) {
      navigate('/timeframe')
    }
  }

  return (
    <div className="flex justify-center min-h-screen w-full">
      <div className="flex flex-col w-full mt-28">
        <div className="flex justify-center mb-8">
          <p className="text-purpleText text-center text-base lg:text-xl font-bold">What is the preferred <span className="bg-learning-style gradient-text">learning style</span>?</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-7 lg:gap-10 justify-center">
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
        <div className="flex justify-between mt-auto mb-10 w-full">
          <NavButton back to='/'>Back</NavButton>
          <div style={{ flexGrow: 1}} className='lg:mx-[30rem] hidden lg:block'>
            <ProgressTracker />
          </div>
          <div className='flex'>
            <NavButton disabled={!selectedCard} onClick={handleContinueClick}>Continue</NavButton>
          </div>
        </div>
        <div className="lg:hidden mb-10">
          <ProgressTracker />
        </div>
      </div>
    </div>
  )
}
