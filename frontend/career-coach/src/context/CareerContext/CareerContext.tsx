import { useState, useContext, createContext, ReactNode, Dispatch, SetStateAction } from 'react'

interface CareerDetailsState {
  career: string;
  experience: string;
  hours_dedicated_to_learning: number;
  budget: number;
  // skills: string[];
  preferred_learning_style: string;
  // timeframe: string;
  current_knowledge: string;
}

type CareerDetailsValue = string | number | string[]

interface CareerContextType {
  careerDetails: CareerDetailsState;
  updateCareer: (key: keyof CareerDetailsState, value: CareerDetailsValue) => void;
  resetCareer: () => void;
  submitCareerDetails: () => Promise<void>;
  roadmap?: RoadmapState;
  loading: boolean;
  months: number;
  setMonths:Dispatch<SetStateAction<number>>;
}

interface CareerProviderProps {
  children: ReactNode;
}

interface RoadmapState {
  summary: string;
  roadmap: RoadmapSectionType[];
}

interface RoadmapSectionType {
  month: string;
  courses: CourseInfoType[];
  overview: string;
}

interface CourseInfoType {
  coursename: string;
  link: string;
  skilllevel: string;
  price: string;
  duration: string;
  description: string;
}

const CareerContext = createContext<CareerContextType | undefined>(undefined);

const emptyCareerDetails: CareerDetailsState = {
  career: '',
  experience: '',
  hours_dedicated_to_learning: 0,
  budget: 0,
  // skills: [],
  preferred_learning_style: '',
  // timeframe: '',
  current_knowledge: '',
}

export const CareerProvider: React.FC<CareerProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [roadmap, setRoadmap] = useState<RoadmapState>()
  const [months, setMonths] = useState<number>(0)
  const [careerDetails, setCareerDetails] = useState<CareerDetailsState>(emptyCareerDetails);

  const updateCareer: CareerContextType['updateCareer'] = (key, value) => {
    setCareerDetails((prevCareer) => {
      // if (key === 'skills' && typeof value === 'string') {
      //   return {
      //     ...prevCareer,
      //     [key]: [...prevCareer.skills, value],
      //   }
      // } else {
        return {
          ...prevCareer,
          [key]: value,
        // }
      }
    });
  };

  const resetCareer = () => {
    setCareerDetails(emptyCareerDetails)
    setRoadmap(undefined)
    setMonths(0)
  }

  const submitCareerDetails = async () => {
    setLoading(true)

    try {
      const response = await fetch('https://mypdp-cta4i5qpaq-uc.a.run.app/generate-roadmap/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(careerDetails)
      });
      const data = await response.json()
      if (data) {
        console.log(data)
        setRoadmap(data)
      }
    } catch (error) {
      console.error('Failed to generate roadmap:', error);
    } finally {
      setLoading(false)
    }
  }

  return (
    <CareerContext.Provider value={{careerDetails, updateCareer, resetCareer, submitCareerDetails, roadmap, loading, months, setMonths }}>
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
