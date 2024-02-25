import { useNavigate } from 'react-router-dom'
import error from '../../assets/images/error.png'
import { useCareerDetails } from '../../context/CareerContext';

export const Error = () => {
    const navigate = useNavigate();
    const { resetCareer } = useCareerDetails();

    const handleClick = () => {
      resetCareer();
      navigate('/')
    }

  return (
    <div className="flex justify-center min-h-screen w-full">
      <div className="flex flex-col items-center w-full mt-28 gap-3">
        <div className="max-w-[586px]">
          <h1 className="text-error text-lg font-bold text-center">Uh Oh!</h1>
          <p className="text-error font-medium text-base text-center">It seems our roadmap got lost on the career highway.</p>
          <div className="flex flex-col items-center mb-10">
            <img src={error} alt="Error image" />
            <p className="text-purpleText text-sm font-medium self-center mb-7">Let's go back to the homepage and try again!</p>
            <button
              type="button"
              className="w-full text-white bg-purpleText font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={handleClick}
              >
              Take Me Back!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
