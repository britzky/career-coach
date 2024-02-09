import { Routes, Route, useLocation } from "react-router-dom";
import {
    Budget, LandingPage, DesiredJob, DesiredSkills, HoursPerWeek, JobLevel,
    LearningStyle, LoadingScreen, SkillLevel, Timeframe
} from "../../pages";
import { NavBar } from "../../components/NavBar";

export const AllRoutes = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div>
      <NavBar isLandingPage={isLandingPage} />   
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
      </Routes>
    </div>
  )
}
