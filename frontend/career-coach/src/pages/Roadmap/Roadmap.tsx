import { CourseAccordion } from "../../components";
import { RoadmapDetails } from "./RoadmapDetails";
import { Overview } from "./Overview";
import { Summary } from "./Summary";

export const Roadmap = () => {
  return (
    <div className="mt-28">
      <div className="grid grid-cols-5 row-span-1">
        <div className="col-span-1 ml-5">
          <div className="flex flex-col gap-5">
            <RoadmapDetails />
            <Overview />
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex flex-col gap-5 items-center">
            <Summary />
            <CourseAccordion />
          </div>
        </div>
      </div>
    </div>
  );
};
