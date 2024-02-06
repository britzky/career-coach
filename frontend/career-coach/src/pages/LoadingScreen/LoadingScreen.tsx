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
    const interval = setInterval(fetchQuote, 10000);

    return () => clearInterval(interval);
  }, [])
  console.log(quote)
  return (
    <div>
      <p>LoadingScreen</p>
      {quote &&
      <>
      <blockquote>{quote.quote}</blockquote>
      <p>{quote.author}</p>
      </>
      }
    </div>
  )
}
