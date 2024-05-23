import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CareerInfoCard, NavButton } from '../../components';
import { useCareerDetails } from '../../context/CareerContext';
import { useProgressState } from '../../context/ProgressContex/ProgressContext';
import { ProgressTracker } from '../../components/ProgressTracker';

export const SkillLevel = () => {
  const { careerDetails, updateCareer, submitCareerDetails, loading, roadmap } = useCareerDetails()
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const navigate = useNavigate()
  const { setActiveStep } = useProgressState();

  const handleCardClick = (tag: string) => {
    updateCareer('current_knowledge', tag)
    setSelectedCard(tag)
  }

  const handleContinue = async () => {
    await submitCareerDetails();
  }

  const handleContinueClick = async () => {
    if (selectedCard) {
      await handleContinue();
      navigate('/loading-screen')
    } else {
      console.log("Please select a card before continuing.")
    }
  }

  useEffect(() => {
    if (loading) {
      navigate('/loading-screen');
    } else {
      if (roadmap) {
        navigate('/roadmap')
      }
    }
  }, [loading, navigate, roadmap])

  useEffect(() => {
    setActiveStep(selectedCard ? 7 : 6);
  }, [selectedCard]);

  return (
    <div className="flex justify-center min-h-screen w-full">
      <div className="flex flex-col justify-center w-full mt-28">
        <div className="flex flex-col justify-center mb-8">
          <p className="text-purpleText text-base lg:text-xl text-center font-bold">What is your current knowledge in <span className="bg-current-knowledge gradient-text">{careerDetails.career}</span>?</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 justify-center mb-44">
          <div>
            <CareerInfoCard
              text="Beginner"
              tag="Beginner"
              onCardClick={handleCardClick}
              selected={selectedCard === 'Beginner'}
            />
          </div>
          <div>
            <CareerInfoCard
              text="Intermediate"
              tag="Intermediate"
              onCardClick={handleCardClick}
              selected={selectedCard === 'Intermediate'}
            />
          </div>
          <div>
            <CareerInfoCard
              text="Expert"
              tag="Expert"
              onCardClick={handleCardClick}
              selected={selectedCard === 'Expert'}
            />
          </div>
        </div>
        <div className="flex justify-between lg:mt-auto mt-18 mb-10">
          <NavButton back to='/timeframe'>Back</NavButton>
          <div style={{ flexGrow: 1}} className='lg:mx-[30rem] hidden lg:block'>
            <ProgressTracker />
          </div>
          <NavButton disabled={!selectedCard} onClick={handleContinueClick}>Continue</NavButton>
        </div>
        <div className="lg:hidden mb-10">
          <ProgressTracker />
        </div>
      </div>
    </div>
  )
}
