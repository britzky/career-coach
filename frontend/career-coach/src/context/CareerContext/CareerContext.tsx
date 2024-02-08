import { useState, useContext, createContext, ReactNode } from 'react'

interface CareerDetailsState {
  career: string;
  experience: string;
  hours_dedicated_to_learning: number;
  budget: number;
  skills: string[];
  preferred_learning_style: string;
  timeframe: string;
  current_knowledge: string;
}

type CareerDetailsValue = string | number | string[]

interface CareerContextType {
  careerDetails: CareerDetailsState;
  updateCareer: (key: keyof CareerDetailsState, value: CareerDetailsValue) => void;
}

interface CareerProviderProps {
  children: ReactNode;
}

const CareerContext = createContext<CareerContextType | undefined>(undefined);

export const CareerProvider: React.FC<CareerProviderProps> = ({ children }) => {
  const [careerDetails, setCareerDetails] = useState<CareerDetailsState>({
    career: '',
    experience: '',
    hours_dedicated_to_learning: 0,
    budget: 0,
    skills: [],
    preferred_learning_style: '',
    timeframe: '',
    current_knowledge: '',
  });

  const updateCareer: CareerContextType['updateCareer'] = (key, value) => {
    setCareerDetails((prevCareer) => {
      if (key === 'skills' && typeof value === 'string') {
        return {
          ...prevCareer,
          [key]: [...prevCareer.skills, value],
        }
      } else {
        return {
          ...prevCareer,
          [key]: value,
        }
      }
    });
  };

  return (
    <CareerContext.Provider value={{careerDetails, updateCareer }}>
      {children}
    </CareerContext.Provider>
  )
}

export const useCareerDetails = () => {
  const context = useContext(CareerContext);
  if (context === undefined) {
    throw new Error('useCareerDetails must be used within a CareerProvider')
  }
  return context;
}
