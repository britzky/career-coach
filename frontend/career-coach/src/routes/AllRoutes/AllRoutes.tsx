import { Routes, Route } from "react-router-dom";
import {
    Budget, LandingPage, DesiredJob, DesiredSkills, HoursPerWeek, JobLevel,
    LearningStyle, LoadingScreen, SkillLevel, Timeframe
} from "../../pages";

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="budget" element={<Budget />} />
        <Route path="desired-job" element={<DesiredJob />} />
        <Route path="desired-skills" element={<DesiredSkills />} />
        <Route path="hours-per-week" element={<HoursPerWeek />} />
        <Route path="job-level" element={<JobLevel />} />
        <Route path="learning-style" element={<LearningStyle />} />
        <Route path="loading-screen" element={<LoadingScreen />} />
        <Route path="skill-level" element={<SkillLevel />} />
        <Route path="timeframe" element={<Timeframe/>} />
    </Routes>
  )
}
