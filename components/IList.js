import indiStyles from '../styles/IndiList.module.css'
import Link from 'next/link'
import Image from 'next/image'


const IList = ({indicators}) => {
    
    return (
        <div className={indiStyles.sectiontop}>
            <h1 className={indiStyles.title}>Indicators</h1>
            <div className={indiStyles.contents}>
            {indicators.map((indicator, index) => (
              <div key ={index} id ={indicator.id}  className={indiStyles.card}  >
                  <div className={indiStyles.img} > 
              <Image src={indicator.image} layout="fill" objectFit="cover"/>
              </div>
              <h2 className={indiStyles.cardtitle}>{indicator.title}</h2>
              <div className={indiStyles.cardcontent}>
                
              
              <p className={indiStyles.cardbody}>{indicator.description}</p>
              <Link
                href="/indicator/[id]"
                as={`/indicator/${indicator.id}`}
                passHref
              >
                  <a className={indiStyles.button}>Read More...</a>
              </Link>
          </div>
          </div>  
            ))}
            </div>
        </div>
    );
};

export default IList


