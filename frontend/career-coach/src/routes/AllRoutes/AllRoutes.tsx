
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import {
    Budget, LandingPage, DesiredJob, HoursPerWeek, JobLevel,
    LearningStyle, LoadingScreen, SkillLevel, Roadmap, Error
} from "../../pages";



export const AllRoutes = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <div className={isLandingPage ? "" : "mx-10"}>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="budget" element={<Budget />} />
            <Route path="desired-job" element={<DesiredJob />} />
            {/* Redirect from Desired Skills to Learning Style to minimize load time */}
            <Route path="desired-skills" element={<Navigate to= "/learning-style" replace />} />
            <Route path="hours-per-week" element={<HoursPerWeek />} />
            <Route path="job-level" element={<JobLevel />} />
            <Route path="learning-style" element={<LearningStyle />} />
            <Route path="loading-screen" element={<LoadingScreen />} />
            <Route path="skill-level" element={<SkillLevel />} />
            {/* <Route path="timeframe" element={<Timeframe />} /> */}
            <Route path="roadmap" element={<Roadmap />} />
            <Route path="error" element={<Error />} />
        </Routes>
    </div>
  )
}
