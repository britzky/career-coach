import { useEffect } from 'react';
import { CareerInfoCard } from '../../components';
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
        <div className="flex gap-10 justify-center">
          <div>
            <CareerInfoCard text="Entry Level" tag="entry" onCardClick={handleCardClick}/>
            <br />
            <span>0-3 Years</span>
          </div>
          <div>
            <CareerInfoCard text="Mid Level 3-5 Years" tag="mid" onCardClick={handleCardClick}/>
          </div>
          <div>
            <CareerInfoCard text="Senior Level 5-7 Years" tag="senior" onCardClick={handleCardClick}/>
          </div>
          <div>
            <CareerInfoCard text="Manager 7-10 Years" tag="manager" onCardClick={handleCardClick}/>
          </div>
        </div>
      </div>
    </div>
  )
}
