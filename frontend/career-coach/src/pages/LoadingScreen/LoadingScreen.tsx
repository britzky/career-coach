import { useState, useEffect } from 'react';

interface QuoteState {
  quote: string;
  author: string;
}

export const LoadingScreen = () => {
  const [quote, setQuote] = useState<QuoteState | undefined>()

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


  return (
    <div className="flex justify-center mt-14">
      <div className="flex-col items-center">
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
