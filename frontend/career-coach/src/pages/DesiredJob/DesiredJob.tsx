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
  ]
  const smallJobs = [
    'Product Designer',
    'UX Researcher',
    'Interaction Designer',
    'Visual Designer',
    'Full-stack Engineer',
    'Front-end Engineer',
    'Back-end Engineer',
    'Product Manager',
    'Project Manager',
    'Scrum Master',
  ]

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
    <div className="flex justify-center min-h-screen w-full leading-8 lg:leading-10">
      <div className="flex flex-col items-center mt-28 w-full">
        
        <div className="flex justify-center">
          <p className="text-purpleText text-base lg:text-xl font-bold bg-desired-job gradient-text">I want to be a...</p>
        </div>
        
        <div className="hidden lg:flex flex-col w-[1200px] mb-[12px]">
          <div className="gap-4">
            {jobs.map((job) => (
              <div key={job} className="lg:py-3">
                <JobCard
                  text={job}
                  tag={job}
                  onCardClick={handleCardClick}
                  selected={selectedCard === job}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden flex flex-col w-full mt-[12px]">
          <div className="grid grid-cols-2 gap-4">
            {smallJobs.map((job) => (
              <div key={job} className="lg:py-3">
                <JobCard
                  text={job}
                  tag={job}
                  onCardClick={handleCardClick}
                  selected={selectedCard === job}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between lg:mt-auto mt-20 mb-10 w-full">
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