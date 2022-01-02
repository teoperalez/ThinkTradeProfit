import Meta from '../Components/Meta'
import VideoList from '../Components/VideoList'
import StratList from '../Components/StratList'
import BlogList from '../Components/BlogList'
import Robinhood from '../Components/Robinhood'
import BlockFi from '../Components/BlockFi'


export default function Home({indicators}) {
   

  return (
    <div>
      <Meta title="Trading ThinkScripts || Top" description="Strategies for the Intelligent Trader" tags="investing, forex, stocks, techncal analysis, charts, trading signals, trading indicators, backtesting" /> 
      
      <VideoList />
      <Robinhood />
            <StratList indicators={indicators}  />
      <BlockFi />
      <BlogList />
      
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch("https://www.thinktradeprofit.com/api/indicator");

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const indicators = await response.json();
  return {
    props: {
      indicators
    }
  }
}
 

