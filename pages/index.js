import Meta from '../Components/Meta'
import VideoList from '../Components/VideoList'
import StratList from '../Components/StratList'
import BlogList from '../Components/BlogList'
import Robinhood from '../Components/Robinhood'
import { useState, useEffect } from 'react'
import {data} from '../indidata'


export default function Home() {
  const [section, setSection] = useState(1); 
  const [indicators, setIndicators] = useState([data]);

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


 

