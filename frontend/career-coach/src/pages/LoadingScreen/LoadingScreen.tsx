import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCareerDetails } from '../../context/CareerContext';
import { ColorRing } from 'react-loader-spinner';

interface QuoteState {
  quote: string;
  author: string;
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

export const LoadingScreen = () => {
  const [quote, setQuote] = useState<QuoteState | undefined>()
  const [time, setTime] = useState<number>(0);
  const { loading, roadmap } = useCareerDetails();
  const navigate = useNavigate();

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://career-coach-xh2c.onrender.com/quote/');
      const data = await response.json();
      if (data) {
        console.log(data)
        setQuote(data);
      }
    }catch (error) {
      console.error('Failed to fetch quote: ', error);
    }
  };

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 20000);

    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [])

  useEffect(() => {
    if (!loading && roadmap) {
      const emptyFields = roadmap.roadmap.length === 0 || roadmap.roadmap.some((course: RoadmapSectionType) => course.courses.length == 0)
      if (emptyFields) {
        navigate('/error')
      } else {
        navigate('/roadmap');
      }
    }
  }, [loading, navigate, roadmap]);


  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center max-w-[1200px] mt-28">
        <div className="">
          <p className="text-purpleText font-bold text-base lg:text-xl text-center leading-[45px] lg:leading-[60px]">Loading your results...</p>
          {time > 60 && (
            <p className="max-w-[350px] lg:max-w-[1200px] text-purpleText text-center mt-6 text-xxs lg:text-sm font-medium leading-[15px] lg:leading-[30px] mx-10">Our server must be tired. Please bear with us while it wakes up!</p>
          )}
        </div>
        {quote ? (
          <div className="my-12 mx-10">
          <blockquote className="bg-loading-screen-quote gradient-text text-sm lg:text-base font-bold text-center leading-[30px] lg:leading-[40px]">"{quote.quote}" - {quote.author}</blockquote>
          </div>
        ) : (
          <div className="my-12 mx-10">
            <blockquote className="bg-loading-screen-quote gradient-text lg:text-base font-bold leading-[30px] lg:leading-[40px]">
            "Embrace the journey of growth, for each step forward illuminates the path to becoming the best version of yourself." - ChatGPT
            </blockquote>
          </div>
        )}
        <div>
          <ColorRing
            height="400"
            width="400"
            colors={['#448FD9', '#A270C0', '#D76573', '#F0944C', '#F7D400']}
          />
        </div>
      </div>
    </div>
  )
}
