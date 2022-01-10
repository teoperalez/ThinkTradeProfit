import BLayout from "../../components/BLayout";
import IList from "../../components/IList";
import PageMeta from "../../components/pagemeta";

export default function Indicator({ indicators }) {
    return (
        <>
    <BLayout>
    <PageMeta title="ThinkTradeProfit.com || Thoughts Blog" description="Strategies for the Intelligent Trader" tags="investing, forex, stocks, techncal analysis, charts, trading signals, trading indicators, backtesting" /> 
         <IList indicators={indicators}/>         
    </BLayout>
      
    </>
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