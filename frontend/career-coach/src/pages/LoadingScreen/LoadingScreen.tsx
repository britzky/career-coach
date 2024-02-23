import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCareerDetails } from '../../context/CareerContext';

interface QuoteState {
  quote: string;
  author: string;
}

export const LoadingScreen = () => {
  const [quote, setQuote] = useState<QuoteState | undefined>()
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
    if (!loading && roadmap) {
      if (roadmap.roadmap.length === 0) {
        navigate('/error')
      } else {
        navigate('/roadmap');
      }
    }
  }, [loading, navigate, roadmap]);


  return (
    <div className="flex justify-center">
      <div className="flex flex-col max-w-[1200px] mt-28">
        <div className="self-center">
          <p className="text-purpleText font-bold text-xl text-center">Loading your results...</p>
        </div>
        {quote &&
        <div className="my-12">
        <blockquote className="bg-loading-screen-quote gradient-text text-base font-bold">"{quote.quote}" - {quote.author}</blockquote>
        </div>
        }
      </div>
    </div>
  )
}
