import { useEffect } from 'react';
import { CareerInfoCard, NavButton } from '../../components';
import { useCareerDetails } from '../../context/CareerContext';


export const JobLevel = () => {
  const { careerDetails, updateCareer } = useCareerDetails()

  const handleCardClick = (tag: string) => {
    updateCareer('experience', tag)
  }
  // remove before shipping to production
  useEffect(() => {
    console.log(careerDetails)
  }, [careerDetails])

  return (
    <div className="flex justify-center min-h-screen w-full mt-14">
      <div className="flex flex-col max-w-[1200px]">
        <div className="flex justify-center mb-8">
          <p className="text-purpleText text-base font-bold">What is your <span className="bg-desired-job-level gradient-text">Expected Level </span>at your new job?</p>
        </div>
        <div className="flex flex-wrap gap-10 justify-center">
          <div>
            <CareerInfoCard text="Entry Level" years="0-3 years" tag="Entry" onCardClick={handleCardClick}/>
          </div>
          <div>
            <CareerInfoCard text="Mid Level" years="3-5 Years" tag="Mid" onCardClick={handleCardClick}/>
          </div>
          <div>
            <CareerInfoCard text="Senior Level" years="5-7 Years" tag="Senior" onCardClick={handleCardClick}/>
          </div>
          <div>
            <CareerInfoCard text="Manager" years="7-10 Years" tag="Manager" onCardClick={handleCardClick}/>
          </div>
        </div>
        <div className="flex justify-between mt-40">
          <NavButton to='/desired-job' back>Back</NavButton>
          <NavButton to='/hours-per-week'>Continue</NavButton>
        </div>
      </div>
    </div>
  )
}
