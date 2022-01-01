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
    const response = await fetch("https://think-trade-profit-7on24wr6w-teoperalez.vercel.app/api/indicator");

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    };
    const indi = await response.json();
    setIndicators(indi)
    };
  
    fetchData();
  }, [response]);

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


 

