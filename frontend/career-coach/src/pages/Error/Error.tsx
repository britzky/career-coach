import error from '../../assets/images/error.png'
export const Error = () => {
  return (
    <div className="flex justify-center min-h-screen w-full">
      <div className="flex flex-col items-center max-w-[1200px] mt-28 gap-3">
        <div className="max-w-[586px]">
            <h1 className="text-error text-lg font-bold text-center">Uh Oh!</h1>
            <p className="text-error font-medium text-base text-center">It seems our roadmap got lost on the career highway.</p>
        </div>
        <img src={error} alt="Error image" />
        <p className="text-purpleText text-sm font-medium">Click below to give our roadmap another spin!</p>
        <button
          type="button"
          className="w-full text-white bg-purpleText font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-10"
        >
          Try again
        </button>
        </div>
    </div>
  )
}
