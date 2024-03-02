import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stepper, Step } from '@mui/material';
import { Checkmark } from "../../assets/icons/Checkmark";
import { CareerInfoCard, NavButton } from '../../components';
import { useCareerDetails } from '../../context/CareerContext';

const totalSteps = 7;

export const SkillLevel = () => {
  const { careerDetails, updateCareer, submitCareerDetails, loading, roadmap } = useCareerDetails()
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState(6)

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
      <div className="flex flex-col w-full mt-28">
        <div className="flex justify-center mb-8">
          <p className="text-purpleText text-xl font-bold">What is your current knowledge in <span className="bg-current-knowledge gradient-text">{careerDetails.career}</span>?</p>
        </div>
        <div className="flex gap-10 justify-center">
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
        <div className="flex justify-between mt-auto mb-10">
          <NavButton back to='/timeframe'>Back</NavButton>
          <div style={{ flexGrow: 1}}>
            <Stepper activeStep={activeStep}>
              {[...Array(totalSteps)].map((_, index) => (
                <Step key={index}>
                  <div className={`flex items-center justify-center w-6 h-6 rounded-full ${activeStep > index + 1 ? 'bg-purple' : 'border-2 border-purpleText'}`}>
                    {activeStep >= index + 1 ? <Checkmark /> : index + 1}
                  </div>
                </Step>
              ))}
            </Stepper>
          </div>
          <NavButton disabled={!selectedCard} onClick={handleContinueClick}>Continue</NavButton>
        </div>
      </div>
    </div>
  )
}
