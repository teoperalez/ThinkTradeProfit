import indiStyles from "../../styles/Indicator.module.css"
import { useRouter } from "next/router";
import Image from "next/image";
import PageMeta from "../../components/pagemeta";
import BlockFi from "../../components/BlockFi";
import SDisc from "../../components/Sdisc";


const Indicator = ({ indi }) => {
  const router = useRouter();
    
    
  return (
    
    <div className={indiStyles.sectiontop}>
      <PageMeta title="Trading ThinkScripts || Top" description="Strategies for the Intelligent Trader" tags="investing, forex, stocks, techncal analysis, charts, trading signals, trading indicators, backtesting" /> 
 
      <div className={indiStyles.title}><h1>{indi.title}</h1></div> 
      <h2 className={indiStyles.get}>Get this indicator: </h2>
      <div className={indiStyles.fillerl}></div>
      <div className={indiStyles.prices}>
        <div className={indiStyles.patprice}><a href="https://www.patreon.com/user?u=67002473"><h1>${indi.patronprice}/mo </h1><p>with Patreon</p></a></div>
        <div className={indiStyles.or}><h1>OR</h1></div>
        <div className={indiStyles.fivprice}><a href="https://www.fiverr.com/teoperalez/code-any-thinkscript-indicator-alert-or-strategy?source=order_page_summary_gig_link_image&funnel=0938d61a77d1d602495d1a69a5da3c2d"><h1>${indi.fiverrprice}</h1><p> from Fiverr</p></a></div>
      </div>
      <div className={indiStyles.fillerr}></div>
      
      
        <div className={indiStyles.image}>
             <Image src={`/${indi.image}`} width={400} height={300}layout="responsive" objectFit="cover"/>
       </div>
       <p className={indiStyles.tags}>{indi.tags}</p>
      <h3 className={indiStyles.description}>{indi.description}</h3>
      
      <p className={indiStyles.body}>{indi.body}</p>
      <h3 className={indiStyles.backtest}>Backtest Results {indi.backtestdates}:</h3>
      <p className={indiStyles.tests}>{indi.backtests}</p>
      <button className={indiStyles.button}onClick={() => router.back()}>Back</button>
      <div className={indiStyles.ad} >
        <BlockFi />
      </div>
      <div className={indiStyles.disclaimer}>
        <SDisc />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const indi = await fetch(`https://www.thinktradeprofit.com/api/indicator/${id}`);
  const data = await indi.json();
  
  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: { indi: data }
  };
}

export default Indicator;