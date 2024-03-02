import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stepper, Step } from '@mui/material';
import { Checkmark } from "../../assets/icons/Checkmark";
import { CareerInfoCard, NavButton } from '../../components';
import { useCareerDetails } from '../../context/CareerContext';

const totalSteps = 7;

export const LearningStyle = () => {
  const  { careerDetails, updateCareer } = useCareerDetails()
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState(4);

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
          <p className="text-purpleText text-xl font-bold">What is the preferred <span className="bg-learning-style gradient-text">learning style</span>?</p>
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
        <div className="flex justify-between mt-auto mb-10">
          <NavButton back to='/budget'>Back</NavButton>
          <div style={{ flexGrow: 1}} className='mx-[30rem]'>
            <Stepper activeStep={activeStep}>
              {[...Array(totalSteps)].map((_, index) => (
                <Step key={index}>
                  <div className={`flex items-center justify-center w-6 h-6 rounded-full ${activeStep > index + 1 ? 'bg-purple' : 'border-2 border-purpleText'}`}>
                    {activeStep >= index + 1 ? <Checkmark /> : null}
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
