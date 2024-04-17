import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { JobCard, NavButton } from '../../components'
import { useCareerDetails } from '../../context/CareerContext';
import { useProgressState } from '../../context/ProgressContex/ProgressContext';
import { ProgressTracker } from '../../components/ProgressTracker';

export const DesiredJob = () => {
  const { careerDetails, updateCareer } = useCareerDetails()
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const navigate = useNavigate();
  const { setActiveStep } = useProgressState();

  const handleCardClick = (tag: string) => {
    updateCareer('career', tag)
    setSelectedCard(tag)
  }

  const jobs = [
    'Product Designer',
    'UX Researcher',
    'UI Designer',
    'Full Stack Engineer',
    'Front End Engineer',
    'Back End Engineer',
    'Product Manager',
    'Cloud Developer',
    'Data Scientist',
    'Data Analyst',
    'DevOps Engineer',
    'Android Developer',
    'Software Architect',
    'Blockchain Developer',
    'Cyber Security Analyst',
  ]

  // remove before shipping to production
  useEffect(() => {
    console.log(careerDetails)
  }, [careerDetails])

  useEffect(() => {
    // Count the current step based on whether a selection is made or not
    setActiveStep(selectedCard || careerDetails.career ? 1 : 0);
  }, [selectedCard, careerDetails.career]);

  const handleContinueClick = () => {
    if (selectedCard) {
      navigate('/job-level')
    }
  }

  return (
    <div className="flex justify-center min-h-screen w-full">
      <div className="flex flex-col items-center mt-28 w-full">
        <div className="flex justify-center mb-8">
          <p className="text-purpleText text-xl font-bold bg-desired-job gradient-text">I want to be a...</p>
        </div>
        <div className="mb-7 flex justify-center">
        </div>
        <div className="flex flex-col xl:w-[1200px] gap-3 mb-[12px]">
          {jobs.map((job) => (
            <div key={job}>
              <JobCard
                text={job}
                tag={job}
                onCardClick={handleCardClick}
                selected={selectedCard === job}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-auto mb-10 w-full">
          <NavButton back to='/'>Back</NavButton>
          <div style={{ flexGrow: 1}} className='mx-[30rem]'>
            <ProgressTracker />
          </div>
          <div className='flex'>
            <NavButton disabled={!selectedCard} onClick={handleContinueClick}>Continue</NavButton>
          </div>
        </div>
      </div>
    </div>
  )
}