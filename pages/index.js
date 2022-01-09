import PageMeta from '../components/pagemeta'
import TutorialsList from '../components/tutorialslist';
import ThoughtList from '../components/thoughtlist';
import BlockFi from '../components/BlockFi';
import Robinhood from '../components/robinhood';


export default function Home() {
   

  return (
    <div>
      <PageMeta title="Trading ThinkScripts || Top" description="Strategies for the Intelligent Trader" tags="investing, forex, stocks, techncal analysis, charts, trading signals, trading indicators, backtesting" /> 
      <ThoughtList />
      <BlockFi />
      
      <Robinhood />
      <TutorialsList />
      
      
      
      
    </div>
  )
}


 

