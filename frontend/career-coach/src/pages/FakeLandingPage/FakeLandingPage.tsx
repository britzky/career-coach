import { useNavigate } from "react-router-dom";
import { Footer, TeamCard } from "../../components";
import skillDev from "../../assets/images/Moving forward.png";
import progress from "../../assets/images/Progress overview.png";
import career from "../../assets/images/Job hunt.png";
import road from "../../assets/images/road.svg"
import jay from "../../assets/images/jay.jpg";
import jon from "../../assets/images/jon.jpg";
import me from "../../assets/images/me2.jpg";
import juan from "../../assets/images/JuanCarlos.jpg";

import { useCareerDetails } from "../../context/CareerContext";

export const FakeLandingPage = () => {
  const navigate = useNavigate();
  const { careerDetails } = useCareerDetails();
  console.log(careerDetails);
  return (
    <div className="flex flex-col min-h-screen">
 <div className="overflow-x-hidden flex flex-col min-h-screen">
      <div className="relative -mx-24 min-w-full h-auto">
        <img src={road} alt="road" className="absolute mt-20 min-w-full h-auto" />
      </div>
      <div className="mt-28 mx-10">
        <div className="flex flex-col h-[695px]">
          <div className="max-w-[957px] flex flex-col">
            <span className="text-purpleText2 font-bold text-base">Get your DREAM JOB with our</span>
            <span className="gradient-text bg-landing-page-title font-bold text-xxl">AI-Powered Career Roadmaps</span>
            <p className="font-medium text-sm">Discover personalized courses, expert guidance, and a roadmap to your dream career, all powered by ChatGPT!</p>
          </div>
          <div>
            <button
              type="button"
              onClick={() => navigate('/desired-job')}
              className="text-white bg-landing-page hover:bg-landing-page-reverse focus:ring-1 focus:outline-none focus:ring-purple-200 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-7 z-10 cursor-pointer relative"
              >
              Try our product without an account!
            </button>
          </div>
        </div>
        <div className="overflow-x-hidden space-y-14 my-14 mt-[54rem]">
        <div className="overflow-x-hidden space-y-14 my-14 mt-[35rem]">
          <div className="flex flex-col items-center">
            <div className="max-w-[94rem]">
              <h1 className="font-bold text-xxl gradient-text bg-logo text-center mt-14">What is a Career Roadmap?</h1>
              <p className="font-medium text-base text-center">
                A career roadmap is your personalized guide to success,
                like a GPS for your career journey.
                It lists the optimal courses for you to take,
                outlines the steps needed to achieve your goals,
                and tracks your progress!
                With our platform,
                you'll have access to a tailored roadmap that empowers you to take control of your professional future.
              </p>
            </div>
          </div>
          </div>
          </div>
          <h1 className="font-bold text-sm lg:text-xxl gradient-text bg-logo text-center w-full lg:leading-normal">
            Your Path to Success
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
            <div className="flex flex-col items-center border-2 border-purpleText rounded-md lg:gap-7 gap-2 p-5 lg:w-[430px] lg:h-[470px]">
              <img
                src={skillDev}
                alt="Man running"
                className="w-[100px] lg:w-[200px] lg:h-[200px]"
              />
              <h6 className="font-bold text-xs lg:text-sm text-purpleText">
                Skill development roadmap
              </h6>
              <p className="font-medium text-xxs lg:text-sm text-center max-w-[24rem]">
                Receive a tailor-made roadmap outlining the skills you need to
                succeed in your chosen career path.
              </p>
            </div>
            <div className="flex flex-col items-center border-2 border-purpleText rounded-md gap-7 p-5 lg:w-[430px] lg:h-[470px]">
              <img
                src={progress}
                alt="Woman showing progress chart"
                className="w-[100px] lg:w-[200px] lg:h-[200px]"
              />
              <h6 className="font-bold text-xs lg:text-sm text-purpleText">
                Progress Tracking and Analytics
              </h6>
              <p className="font-medium text-xxs lg:text-sm text-center max-w-[24rem]">
                Monitor your progress and track your accomplishments with
                detailed analytics and performance insights.
              </p>
            </div>
            <div className="flex flex-col items-center border-2 border-purpleText rounded-md gap-7 p-5 lg:w-[430px] lg:h-[470px]">
              <img
                src={career}
                alt="Man looking through binoculars at a city"
                className="w-[100px] lg:w-[200px] lg:h-[200px]"
              />
              <h6 className="font-bold text-xs lg:text-sm text-purpleText">
                Career Path Exploration
              </h6>
              <p className="font-medium text-xxs lg:text-sm text-center max-w-[24rem]">
                Explore various career paths aligned with your interests and
                skills with detailed insights and recommendations.
              </p>
            </div>
          </div>
          <h1 className="font-bold text-sm lg:text-xxl gradient-text bg-logo text-center w-full lg:leading-normal">
            Meet the Team
          </h1>
          <div className="flex flex-col lg:flex-row justify-center gap-5">
            <TeamCard
              image={juan}
              name="Juan Carlos Yao"
              title="Product Manager"
              fact="I love to travel and collect pins from places I have visited!"
              link="https://www.linkedin.com/in/juancarlosyao"
            />
            <TeamCard
              image={jon}
              name="Jon Chiang"
              title="Product Designer"
              fact="I love any and all racket sports including badminton, tennis, and pickleball!"
              link="https://www.linkedin.com/in/jmchiang5"
            />
            <TeamCard
              image={jay}
              name="Juan Hernandez"
              title="Developer"
              fact="I have a twin sister and she is 1 minute older!"
              link="http://linkedin.com/in/j-hernandez-dev"
            />
            <TeamCard
              image={me}
              name="John Clapper"
              title="Developer"
              fact="I love Christmas!"
              link="https://www.linkedin.com/in/john-clapper"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 lg:mt-auto">
        <Footer />
      </div>
    </div>
  );
};
