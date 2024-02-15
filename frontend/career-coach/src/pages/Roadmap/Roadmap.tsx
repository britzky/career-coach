import { CourseAccordion } from "../../components";
import { RoadmapDetails } from "./RoadmapDetails";
import { Overview } from "./Overview";
import { Summary } from "./Summary";

export const Roadmap = () => {
  return (
    <div className="mt-28 flex flex-col md:flex-row">
      <div className="flex flex-col gap-5 ml-5 mb-5 md:mb-0 md:flex-1">
        <RoadmapDetails />
        <Overview />
      </div>
        <div className="flex flex-col gap-5 items-center flex-1 mx-7">
          <Summary />
          <CourseAccordion />
        </div>
      </div>
  );
};
