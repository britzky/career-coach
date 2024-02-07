import { useEffect } from 'react';
import { CareerInfoCard, InputBox } from '../../components'
import { useCareerDetails } from '../../context/CareerContext';

export const DesiredJob = () => {
  const  { careerDetails, updateCareer } = useCareerDetails()

  const handleCardClick = (tag: string) => {
    updateCareer('career', tag)
  }

  const handleInputChange = (value: string) => {
    updateCareer('career', value)
  }
  // remove before shipping to production
  useEffect(() => {
    console.log(careerDetails)
  }, [careerDetails])

  return (
    <div className="flex justify-center min-h-screen w-full mt-14">
      <div className="flex flex-col max-w-[1200px]">
        <div className="flex justify-center mb-8">
          <p className="text-purpleText text-base font-bold bg-desired-job gradient-text">I want to be a...</p>
        </div>
        <div className="mb-7">
          <InputBox
            placeholder='If you cant find your job below, search it here'
            onChange={handleInputChange}
            border
          />
        </div>
        <div className="flex flex-wrap gap-10 justify-center">
          <div>
            <CareerInfoCard text="Product Designer" tag="Product Designer" onCardClick={handleCardClick}/>
          </div>
          <div>
            <CareerInfoCard text="UX Researcher" tag="UX Researcher" onCardClick={handleCardClick} />
          </div>
          <div>
            <CareerInfoCard text="UI Designer" tag="UI Designer" onCardClick={handleCardClick} />
          </div>
          <div>
            <CareerInfoCard text="Full Stack Engineer" tag="Full Stack Engineer" onCardClick={handleCardClick} />
          </div>
          <div>
            <CareerInfoCard text="Front End Engineer" tag="Front End Engineer" onCardClick={handleCardClick}/>
          </div>
          <div>
            <CareerInfoCard text="Back End Engineer" tag="Back End Engineer" onCardClick={handleCardClick} />
          </div>
          <div>
            <CareerInfoCard text="Prooduct Manager" tag="Product Manager" onCardClick={handleCardClick} />
          </div>
          <div>
            <CareerInfoCard text="Cloud Developer" tag="Cloud Developer" onCardClick={handleCardClick} />
          </div>
        </div>
      </div>
    </div>
  )
}
