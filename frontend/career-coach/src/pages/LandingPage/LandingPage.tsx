import { useNavigate } from "react-router-dom";
import { Footer } from "../../components";
import skillDev from "../../assets/images/Moving forward.png"
import progress from "../../assets/images/Progress overview.png"
import career from "../../assets/images/Job hunt.png"
import road from "../../assets/images/road.svg"

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden flex flex-col min-h-screen">
      <div className="mt-28 mx-10">
        <div className="flex flex-col mb-7 h-[695px] w-[1708px]">
          <div className="max-w-[957px] flex flex-col">
            <span className="text-purpleText2 font-bold text-base">Get your DREAM JOB with our</span>
            <span className="gradient-text bg-landing-page-title font-bold text-xxl">AI-Powered Career Roadmaps</span>
            <p className="font-medium text-sm">Discover personalized courses, expert guidance, and a roadmap to your dream career, all powered by ChatGPT!</p>
          </div>
            <img src={road} alt="road" className="absolute -ml-28" />
          <div>
            <button
              type="button"
              onClick={() => navigate('/desired-job')}
              className="text-white bg-landing-page hover:bg-landing-page-reverse focus:ring-1 focus:outline-none focus:ring-purple-200 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-7"
              >
              Try our product without an account!
            </button>
          </div>
        </div>
        <div className="space-y-14 my-14">
          <h1 className="font-bold text-xxl gradient-text bg-logo text-center">What is a Career Roadmap?</h1>
          <p className="font-medium text-base">
            A career roadmap is your personalized guide to success,
            like a GPS for your career journey.
            It lists the optimal courses for you to take,
            outlines the steps needed to achieve your goals,
            and tracks your progress!
            With our platform,
            you'll have access to a tailored roadmap that empowers you to take control of your professional future.
          </p>
        </div>
        <div className="mb-7 space-y-7">
          <h1 className="font-bold text-xxl gradient-text bg-logo text-center w-full">Your Path to Success</h1>
          <div className="flex justify-between">
            <div className="flex flex-col items-center border-2 border-purpleText rounded-md h-[471px] w-[434px] gap-7">
              <img src={skillDev} alt="Man running" />
              <h6 className="font-bold text-sm text-purpleText">Skill development roadmap</h6>
              <p className="font-medium text-sm text-center">Receive a tailor-made roadmap outlining the skills you need to succeed in your chosen career path.</p>
            </div>
            <div className="flex flex-col items-center border-2 border-purpleText rounded-md h-[471px] w-[434px] gap-7">
              <img src={progress} alt="Woman showing progress chart" />
              <h6 className="font-bold text-sm text-purpleText">Progress Tracking and Analytics</h6>
              <p className="font-medium text-sm text-center">Monitor your progress and track your accomplishments with detailed analytics and performance insights.</p>
            </div>
            <div className="flex flex-col items-center border-2 border-purpleText rounded-md h-[471px] w-[434px] gap-7">
              <img src={career} alt="Man looking through binoculars at a city" />
              <h6 className="font-bold text-sm text-purpleText">Career Path Exploration</h6>
              <p className="font-medium text-sm text-center self-center">Explore various career paths aligned with your interests and skills with detailed insights and recommendations.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}
