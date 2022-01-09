import PageMeta from '../components/pagemeta'
import TutorialsList from '../components/tutorialslist';
import ThoughtList from '../components/thoughtlist';
import BlockFi from '../components/BlockFi';


export default function Home({indicators}) {
   

  return (
    <div>
      <PageMeta title="Trading ThinkScripts || Top" description="Strategies for the Intelligent Trader" tags="investing, forex, stocks, techncal analysis, charts, trading signals, trading indicators, backtesting" /> 
      <ThoughtList />
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
 

