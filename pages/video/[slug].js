import Meta from "../../Components/mainmeta";
import vidStyles from "../../styles/VideoPage.module.css"
import { useRouter } from "next/router";
import Image from "next/image";
import BlockFi from "../../components/blockfi";
import ShortDisclaimer from "../../Components/shortdisclaimer";
import Link from "next/link";

const Video = ({ indi }) => {
  const router = useRouter();
  const embed = "https://www.youtube.com/embed/" + indi.slug;  
    
  return (
    
    <div className={vidStyles.sectiontop}>
      <Meta title={"Trading ThinkScripts || " + `${indi.title}`} description="Strategies for the Intelligent Trader" tags="investing, forex, stocks, techncal analysis, charts, trading signals, trading indicators, backtesting"/>
      <div className={vidStyles.title}><h1>{indi.title}</h1></div> 
      <div className={vidStyles.video}>
        <iframe width="1000" height="700" src={embed} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <h2 className={vidStyles.get}>Get this indicator <Link href = "/"><a>here</a></Link> </h2>
      <div className={vidStyles.image}>
        <Image src={`/${indi.image}`} width={400} height={300}layout="responsive" objectFit="cover"/>
      </div>
      <p className={vidStyles.tags}>Tags: {indi.tags}</p>
      <h3 className={vidStyles.description}>{indi.description}</h3>
      
      <p className={vidStyles.body}>{indi.body}</p>
      <button className={vidStyles.button}onClick={() => router.back()}>Back</button>
      <div className={vidStyles.ad} >
        <BlockFi />
      </div>
      <div className={vidStyles.disclaimer}>
        <ShortDisclaimer />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const indi = await fetch(`https://www.thinktradeprofit.com/api/video/${slug}`);
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

export default Video;