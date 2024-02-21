import { CourseAccordion } from "../../components";
import { RoadmapDetails } from "./RoadmapDetails";
import { Overview } from "./Overview";
import { Summary } from "./Summary";

export const Roadmap = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col md:flex-row mt-28">
        <div className="flex flex-col gap-5 ml-5 md:flex-1">
          <RoadmapDetails />
          <Overview />
        </div>
        <div className="flex flex-col  items-center flex-1 mx-7 mb-28">
          <Summary />
          <CourseAccordion />
        </div>
      </div>
    </div>
  );
};
