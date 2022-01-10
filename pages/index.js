import PageMeta from '../components/pagemeta'
import TutorialsList from '../components/tutorialslist';
import ThoughtList from '../components/thoughtlist';
import BlockFi from '../components/BlockFi';
import Robinhood from '../components/robinhood';
import IList from '../components/IList';
import { getAllPosts } from '../lib/api';



export default function Home({indicators, allPosts}) {
   

  return (
    <div>
      <PageMeta title="Trading ThinkScripts || Top" description="Strategies for the Intelligent Trader" tags="investing, forex, stocks, techncal analysis, charts, trading signals, trading indicators, backtesting" /> 
      
      
      <ThoughtList allPosts={allPosts}/>
      <BlockFi />
      <IList indicators={indicators}/>
      <Robinhood />
      <TutorialsList />
      
      
      
      
    </div>
  )
}


export const getServerSideProps = async () => {
  const response = await fetch("https://www.thinktradeprofit.com/api/indicator");
  
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])
    

  const indicators = await response.json();
  return {
    props: {
      indicators, 
      allPosts
    }
  };
}



 

