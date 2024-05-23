import { useEffect } from 'react'
import { InputBox, NavButton } from '../../components'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import { useCareerDetails } from '../../context/CareerContext'
import { useProgressState } from '../../context/ProgressContex/ProgressContext'
import { ProgressTracker } from '../../components/ProgressTracker'


export const Timeframe = () => {
    const { setMonths, months } = useCareerDetails();
    const { setActiveStep } = useProgressState();

//   const handleInputChange = (value: string) => {
//     updateCareer('timeframe', value)
//   }

    useEffect(() => {
        if (months > 0) {
            setActiveStep(6); // Set active step to 6 if months are filled out
        } else {
            setActiveStep(5); // Set active step to 5 if months are not filled out
        }
    }, [months]);

    const tempInputChange = (value: string) => {
        setMonths(Number(value))
    }

  return (
    <div className="flex justify-center min-h-screen w-full">
        <div className="flex flex-col w-full mt-28">
            <div className="flex justify-center mb-8">
                <p className="text-purpleText text-center text-base lg:text-xl font-bold">What is your expected<span className="bg-timeframe gradient-text"> timeframe</span>?</p>
            </div>
            <div className="flex flex-col items-center">
                <div className='mb-6 w-[120px] lg:w-40 flex justify-center items-center'>
                    <InputBox placeholder='0' onChange={tempInputChange} />
                    <span className='ml-2 text-xs'>Months</span>
                </div>
            </div>
            <div className='flex flex-col items-center mt-auto mb-10'>
                <h5 className="flex font-medium text-xxs lg:text-sm text-purpleText mb-6">
                    <span className='mr-2'><ErrorOutlineOutlinedIcon /></span>
                    <span>
                        Attention: Currently, our career roadmaps only support showing the first 3 months.
                        < br/>
                        We intend to increase our ability to show the full roadmap at a later update.
                    </span>
                </h5>
            </div>
            <div className="flex justify-between mb-10 w-full">
                <NavButton back to='/'>Back</NavButton>
                <div style={{ flexGrow: 1}} className='lg:mx-[30rem] hidden lg:block'>
                    <ProgressTracker />
                </div>
                <div className='flex'>
                    <NavButton to='/learning-style'>Continue</NavButton>
                </div>
            </div>
            <div className="lg:hidden mb-10">
                <ProgressTracker />
            </div>
        </div>
    </div>
  )
}
