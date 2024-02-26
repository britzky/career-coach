import { CourseAccordion, Footer } from "../../components";
import { RoadmapDetails } from "./RoadmapDetails";
import { Overview } from "./Overview";
import { Summary } from "./Summary";
import { BlurredContent } from "./BlurredContent";

export const Roadmap = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="flex flex-col md:flex-row mx-10">
          <div className="flex flex-col md:flex-row mt-28">
            <div className="flex flex-col gap-5 md:flex-1 max-w-[300px]">
              <RoadmapDetails />
              <Overview />
            </div>
            <div className="flex flex-col items-center flex-1 ml-7 mb-28 w-full">
              <Summary />
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
