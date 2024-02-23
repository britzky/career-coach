import { useState, useEffect } from 'react';
import { CareerInfoCard, InputBox, NavButton } from '../../components'
import { useCareerDetails } from '../../context/CareerContext';

export const DesiredJob = () => {
  const  { careerDetails, updateCareer } = useCareerDetails()
  const [selectedCard, setSelectedCard] = useState<string | null>(null)

  const handleCardClick = (tag: string) => {
    updateCareer('career', tag)
    setSelectedCard(tag)
  }

  const handleInputChange = (value: string) => {
    updateCareer('career', value)
    setSelectedCard(null)
  }

  const jobs = [
    'Product Designer',
    'UX Researcher',
    'UI Designer',
    'Full Stack Engineer',
    'Front End Engineer',
    'Back End Engineer',
    'Product Manager',
    'Cloud Developer'
  ]

  // remove before shipping to production
  useEffect(() => {
    console.log(careerDetails)
  }, [careerDetails])

  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex flex-col mt-28">
        <div className="flex justify-center mb-8">
          <p className="text-purpleText text-xl font-bold bg-desired-job gradient-text">I want to be a...</p>
        </div>
        <div className="mb-7 flex justify-center">
          <div className="w-[1200px]">
            <InputBox
              placeholder="If you can't find your job below, search it here"
              onChange={handleInputChange}
              border
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-10 justify-center">
          {jobs.map((job) => (
            <div key={job}>
              <CareerInfoCard
                text={job}
                tag={job}
                onCardClick={handleCardClick}
                selected={selectedCard === job}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-auto mb-10"> {/* changed from mt-14 mb-3 flex justify-end */}
          <NavButton to='/job-level'>Continue</NavButton>
        </div>
      </div>
    </div>
  )
}