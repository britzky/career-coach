import { CourseAccordion, Footer } from "../../components";
import { RoadmapDetails } from "./RoadmapDetails";
import { Overview } from "./Overview";
import { Summary } from "./Summary";
import { BlurredContent } from "./BlurredContent";

export const Roadmap = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="flex flex-col mx-5 lg:mx-10">
          <div className="flex mt-28">
            <div className="hidden lg:block">
              <div className="flex flex-col gap-5 lg:flex-1 w-full lg:max-w-[300px]">
                <RoadmapDetails />
                <Overview />
              </div>
            </div>
            <div className="flex flex-col items-center flex-1 mx-0 lg:ml-7 mb-28 w-full">
              <Summary />
              <div className="lg:hidden space-y-5 mb-5">
                <RoadmapDetails />
                <Overview />
              </div>
              <CourseAccordion />
              <BlurredContent />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};
