import { InputBox, NavButton } from '../../components'
import InfoIcon from '@mui/icons-material/Info'
// import { useCareerDetails } from '../../context/CareerContext'

export const Timeframe = () => {
//   const { updateCareer } = useCareerDetails();

//   const handleInputChange = (value: string) => {
//     updateCareer('timeframe', value)
//   }

  return (
    <div className="flex justify-center min-h-screen w-full">
        <div className="flex flex-col mt-28">
            <div className="flex justify-center mb-8">
                <p className="text-purpleText text-xl font-bold">What is your expected<span className="bg-timeframe gradient-text"> timeframe</span>?</p>
            </div>
            <div className="flex flex-col items-center">
                <div className='mb-6 w-40 flex justify-center items-center'>
                    <InputBox placeholder='3'/>
                    <span className='ml-2'>Months</span>
                </div>
            </div>
            <div className="mt-auto mb-10">
                <h5 className="font-medium text-sm text-purpleText mb-10">
                    <span className='mr-2'><InfoIcon /></span>
                    *Attention:
                    The scope of our career roadmap is restricted to a 3 month timeframe,
                    which will increase in a later update.
                    Kindly consider this limitation when setting your career goals.
                </h5>
                <div className="flex justify-between">
                    <NavButton back to='/learning-style'>Back</NavButton>
                    <NavButton to='/skill-level'>Continue</NavButton>
                </div>
            </div>
        </div>
    </div>
  )
}
