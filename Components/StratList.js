import videoStyles from '../styles/Video.module.css'
import Link from 'next/link'
import Image from 'next/image'


const StratList = ({indicators}) => {

    return (
        <div className={videoStyles.sectiontop}>
            <h1 className={videoStyles.title}>Indicators</h1>
            <div className={videoStyles.contents}>
            {indicators.map((indicator, index) => (
              <div id = "1" className={videoStyles.card}  >
                  <div className={videoStyles.img} > 
              <Image src={`/${indicator.image}`} layout="fill" objectFit="cover"/>
              </div>
              <h2 className={videoStyles.cardtitle}>{indicator.title}</h2>
              <div className={videoStyles.cardcontent}>
                
              
              <p className={videoStyles.cardbody}>{indicator.description}</p>
              <Link
                href="/indicator/[id]"
                as={`/indicator/${indicator.id}`}
                passHref
              >
                  <a className={videoStyles.button}>Read More...</a>
              </Link>
          </div>
          </div>  
            ))}
            </div>
        </div>
    )
}

export default StratList
