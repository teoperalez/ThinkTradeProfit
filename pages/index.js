import Meta from '../components/MainMeta'
import ThoughtList from '../Components/ThoughtList'
import IndiList from '../Components/IndiList'
import TutorialsList from '../Components/TutorialsList'
import Robinhood from '../Components/Robinhood'
import BlockFi from '../Components/BlockFi'


export default function Home({indicators}) {
   

  return (
    <div>
      <Meta title="Trading ThinkScripts || Top" description="Strategies for the Intelligent Trader" tags="investing, forex, stocks, techncal analysis, charts, trading signals, trading indicators, backtesting" /> 
      
      <ThoughtList />
      <Robinhood />
      <IndiList indicators={indicators}  />
      <BlockFi />
      <TutorialsList />
      
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
  };
}
 

