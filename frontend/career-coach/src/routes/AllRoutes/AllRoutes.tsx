import { Routes, Route } from "react-router-dom";
import {
    Budget, LandingPage, DesiredJob, DesiredSkills, HoursPerWeek, JobLevel,
    LearningStyle, LoadingScreen, SkillLevel, Timeframe, Roadmap, Error
} from "../../pages";
import { NavBar } from "../../components/NavBar";

export const AllRoutes = () => {

  return (
    <div className="mx-10">
      <NavBar />
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="budget" element={<Budget />} />
            <Route path="desired-job" element={<DesiredJob />} />
            <Route path="desired-skills" element={<DesiredSkills />} />
            <Route path="hours-per-week" element={<HoursPerWeek />} />
            <Route path="job-level" element={<JobLevel />} />
            <Route path="learning-style" element={<LearningStyle />} />
            <Route path="loading-screen" element={<LoadingScreen />} />
            <Route path="skill-level" element={<SkillLevel />} />
            <Route path="timeframe" element={<Timeframe />} />
            <Route path="roadmap" element={<Roadmap />} />
            <Route path="error" element={<Error />} />
        </Routes>
    </div>
  )
}
