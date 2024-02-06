import { CareerInfoCard } from '../../components'

export const LearningStyle = () => {
  return (
    <div className="flex justify-center min-h-screen w-full mt-14">
      <div className="flex flex-col">
        <div className="flex justify-center mb-8">
          <p className="text-purple-700">What is preferred <span className="text-green-500">learning style</span>?</p>
        </div>
        <div className="flex gap-10 justify-center">
          <div>
            <CareerInfoCard text="Project Based" />
          </div>
          <div>
            <CareerInfoCard text="Video Based" />
          </div>
          <div>
            <CareerInfoCard text="Assessment Based" />
          </div>
          <div>
            <CareerInfoCard text="Micro learning" />
          </div>
        </div>
      </div>
    </div>
  )
}
