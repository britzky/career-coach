import { useState, useContext, createContext, ReactNode, Dispatch, SetStateAction } from 'react'

// need var for total steps
// need state for active step
// need to set active step for each page.
// Desired job -> JobLevel -> Hours per week -> Budget -> Learning Style -> Timeframe -> Current knowledge
// on continue click increment active step
// on back click decrement active step unless its on the desired job page

interface ProgressContextType {
    activeStep: number;
    totalSteps: number
    setActiveStep: Dispatch<SetStateAction<number>>;
}

interface ProgressProviderProps {
    children: ReactNode;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<ProgressProviderProps> = ({children}) => {
    const [activeStep, setActiveStep] = useState<number>(-1);
    const totalSteps = 7;

  return (
    <ProgressContext.Provider value={{activeStep, setActiveStep, totalSteps}}>
        {children}
    </ProgressContext.Provider>
  )
}

export const useProgressState = () => {
    const context = useContext(ProgressContext);
    if (context === undefined) {
        throw new Error("useProgressState must be used withtin a ProgressProvider");
    }
    return context;
}
