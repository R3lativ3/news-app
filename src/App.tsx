import React, { useEffect, useState } from 'react';
import './App.css';
import { New } from './entities/news.entity'
import News from './components/News';
import Header from './components/Header';

function App() {
  const [news, setNews] = useState<New[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => { 
    const fetchData = async () => {
      let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=5daa30194a9641e6acdbfb5eefe1d42f' 
      try{
        const response = await fetch(url)
        const result = await response.json();
        setNews(result.articles)
        setIsLoading(false)  
      }catch(exception: any){
        setIsLoading(false)  
      }
    }
  
    fetchData()
  }, [])
  
  const RenderNews = () => {
    return (
      <div className='grid justify-items-center'>
        {news?.map((newx, index) => (
          <News key={index} {...newx} />
        ))}
      </div>
    );
  }

  return (
    <div className="App text-white decoration-sky-500/30">
        <Header />

        <div className="text-5xl p-10 font-light underline underline-offset-8">Ultimate News</div>
        { isLoading ? <p>Loading...</p> : <RenderNews /> }
    </div>
  );
}

export default App;
