import BLayout from "../../components/BLayout";
import VideoList from "../../components/VideoList";
import PageMeta from "../../components/pagemeta";

export default function Video({ videos }) {
    return (
        <>
    <BLayout>
    <PageMeta title="ThinkTradeProfit.com || Thoughts Blog" description="Strategies for the Intelligent Trader" tags="investing, forex, stocks, techncal analysis, charts, trading signals, trading indicators, backtesting" /> 
         <VideoList videos={videos}/>         
    </BLayout>
      
    </>
    )
}
export const getServerSideProps = async () => {
    const response = await fetch("https://www.thinktradeprofit.com/api/video");
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const videos = await response.json();
  
  return {
    props: {
      videos 
      
    }
  };
}