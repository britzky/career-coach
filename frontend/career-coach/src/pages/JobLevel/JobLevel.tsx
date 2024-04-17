import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CareerInfoCard, NavButton } from '../../components';
import { useCareerDetails } from '../../context/CareerContext';
import { useProgressState } from '../../context/ProgressContex/ProgressContext';
import { ProgressTracker } from '../../components/ProgressTracker';

export const JobLevel = () => {
  const { careerDetails, updateCareer } = useCareerDetails()
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const navigate = useNavigate()
  const { setActiveStep } = useProgressState();

  const handleCardClick = (tag: string) => {
    updateCareer('experience', tag)
    setSelectedCard(tag)
  }
  // remove before shipping to production
  useEffect(() => {
    console.log(careerDetails)
  }, [careerDetails])

  useEffect(() => {
    // Count the current step based on whether a selection is made or not
    setActiveStep(selectedCard ? 2 : 1);
  }, [selectedCard]);

  const handleContinueClick = () => {
    if (selectedCard) {
      navigate('/hours-per-week')
    }
  }

  return (
    <div className="flex justify-center min-h-screen w-full">
      <div className="flex flex-col w-full mt-28">
        <div className="flex justify-center mb-8">
          <p className="text-purpleText text-xl font-bold">What is your <span className="bg-desired-job-level gradient-text">Expected Level </span>at your new job?</p>
        </div>
        <div className="flex flex-wrap gap-10 justify-center">
          <div>
            <CareerInfoCard
              text="Entry Level"
              years="0-3 Years"
              tag="Entry-level"
              onCardClick={handleCardClick}
              selected={selectedCard === 'Entry-level'}
            />
          </div>
          <div>
            <CareerInfoCard
              text="Mid Level"
              years="3-5 Years"
              tag="Mid-level"
              onCardClick={handleCardClick}
              selected={selectedCard === 'Mid-level'}
            />
          </div>
          <div>
            <CareerInfoCard
              text="Senior Level"
              years="5-7 Years"
              tag="Senior-level"
              onCardClick={handleCardClick}
              selected={selectedCard === 'Senior-level'}
            />
          </div>
          <div>
            <CareerInfoCard
              text="Manager"
              years="7-10 Years"
              tag="Manager"
              onCardClick={handleCardClick}
              selected={selectedCard === 'Manager'}
            />
          </div>
        </div>
        <div className="flex justify-between mt-auto mb-10">
          <NavButton to='/desired-job' back>Back</NavButton>
          <div style={{ flexGrow: 1}} className='mx-[30rem]'>
            <ProgressTracker />
          </div>
          <NavButton disabled={!selectedCard} onClick={handleContinueClick}>Continue</NavButton>
        </div>
      </div>
    </div>
  )
}