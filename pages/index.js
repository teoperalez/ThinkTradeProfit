import PageMeta from '../components/pagemeta'
import VideoList from '../components/VideoList';
import ThoughtList from '../components/thoughtlist';
import BlockFi from '../components/BlockFi';
import Robinhood from '../components/robinhood';
import IList from '../components/IList';
import { getAllPosts } from '../lib/api';



export default function Home({indicators, allPosts, videos}) {
   

  return (
    <div>
      <PageMeta title="Trading ThinkScripts || Top" description="Strategies for the Intelligent Trader" tags="investing, forex, stocks, techncal analysis, charts, trading signals, trading indicators, backtesting" /> 
      
      
      <ThoughtList allPosts={allPosts}/>
      <BlockFi />
      <IList indicators={indicators}/>
      <Robinhood />
      <VideoList videos = {videos} />
      
      
      
      
    </div>
  )
}


export const getServerSideProps = async () => {
  const response = await fetch("https://www.thinktradeprofit.com/api/indicator");
  const response2 = await fetch("https://www.thinktradeprofit.com/api/video");
  
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
  const videos = await response2.json();
  return {
    props: {
      indicators, 
      allPosts,
      videos
    }
  };
}



 

