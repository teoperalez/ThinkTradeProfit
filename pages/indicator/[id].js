import Meta from "../../Components/Meta";
import indiStyles from "../../styles/Indicator.module.css"
import { useRouter } from "next/router";
import Image from "next/image";

const Indicator = ({ indi }) => {
  const router = useRouter();
    
    
  return (
    
    <div className={indiStyles.sectiontop}>
      <Meta title={"Trading ThinkScripts || " + `${indi.title}`} description="Strategies for the Intelligent Trader" tags="investing, forex, stocks, techncal analysis, charts, trading signals, trading indicators, backtesting"/>
      <button onClick={() => router.back()}>Back</button>
      <h1 className={indiStyles.title}>{indi.title} | ${JSON.stringify(indi.price, null, 1)} </h1>
      <div className={indiStyles.card}>
      <div className={indiStyles.image}>
             <Image src={`/${indi.image}`} layout="fill" objectFit="cover"/>
      </div>
      </div>
      <h3>{indi.description}</h3>
      <p>{indi.tags}</p>
      <p>{indi.body}</p>
      <h3>Backtest Results {indi.backtestdates}:</h3>
      <p>{indi.backtests}</p>
      
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