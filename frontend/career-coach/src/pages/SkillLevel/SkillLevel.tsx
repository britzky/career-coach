import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CareerInfoCard } from '../../components';
import { useCareerDetails } from '../../context/CareerContext';
import { NavButton } from '../../components';

export const SkillLevel = () => {
  const { careerDetails, updateCareer, submitCareerDetails, loading, roadmap } = useCareerDetails()
  const navigate = useNavigate();

  const handleCardClick = (tag: string) => {
    updateCareer('current_knowledge', tag)
  }

  const handleContinue = async () => {
    await submitCareerDetails();
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

  return (
    <div className="flex justify-center min-h-screen w-full mt-14">
      <div className="flex flex-col max-w-[1200px]">
        <div className="flex justify-center mb-8">
          <p className="text-purpleText text-base font-bold">What is your current knowledge in <span className="bg-current-knowledge gradient-text">{careerDetails.career}</span>?</p>
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
        <div className="flex justify-between mt-40 w-[1200px]">
          <NavButton back to='/timeframe'>Back</NavButton>
          <NavButton onClick={handleContinue}>Continue</NavButton>
        </div>
      </div>
    </div>
  )
}
