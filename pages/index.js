import Meta from '../Components/Meta'
import VideoList from '../Components/VideoList'
import StratList from '../Components/StratList'
import BlogList from '../Components/BlogList'
import Robinhood from '../Components/Robinhood'
import { useState, useEffect } from 'react'


export default function Home() {
  const [section, setSection] = useState(1); 
  const [indicators, setIndicators] = useState([]);

  useEffect( () =>  {
    
    const fetchData = async () => {
    const response = await fetch("http://localhost:3000/api/indicator");

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    };
    const indi = await response.json();
    setIndicators(indi)
    };
  
    fetchData();
  }, []);

  return (
    <div>
      <Meta title="Trading ThinkScripts || Top" description="Strategies for the Intelligent Trader" tags="investing, forex, stocks, techncal analysis, charts, trading signals, trading indicators, backtesting" /> 
      
      <VideoList />
      <Robinhood />
      <StratList indicators={indicators}  />
      <BlogList />
      
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json();
  const response = await fetch("http://localhost:3000/api/indicator");

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const indicators = await response.json();
  return {
    props: {
      articles,
      indicators
    }
  }
}
 

