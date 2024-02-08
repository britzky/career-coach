import { useNavigate } from "react-router-dom";
export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        type="button"
        onClick={() => navigate('/desired-job')}
        className="text-white bg-landing-page hover:bg-landing-page-reverse focus:ring-1 focus:outline-none focus:ring-purple-200 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Try our product without an account!
      </button>
    </div>
  )
}
