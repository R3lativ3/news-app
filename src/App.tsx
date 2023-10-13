import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

interface New {
  author: string
  content: string
  description: string
  publishedAt: Date
  source: {
    id: number
    name: string
  }
  title: string
  url: string
  urlToImage: string
}


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
      <div>
        {news?.map(x => <p key={x.title} className="text-3xl font-bold underline p-10"> {x.title} </p>)}
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { isLoading ? <p>Loading...</p> : <RenderNews /> }
      </header>
    </div>
  );
}

export default App;
