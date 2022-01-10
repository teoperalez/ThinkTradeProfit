import indiStyles from '../styles/Video.module.css'
import Image from 'next/image'
import Link from 'next/link'


const VideoList = ({videos}) => {

    return (
        
        <div className={indiStyles.sectiontop}>
            <h1 className={indiStyles.title}>Videos</h1>
            <div className={indiStyles.contents}>
            {videos.map((indicator, index) => (
              <div key ={index} id ={indicator.id}  className={indiStyles.card}  >
                  <div className={indiStyles.img} > 
              <Image src={indicator.image} layout="fill" objectFit="cover"/>
              </div>
              <h2 className={indiStyles.cardtitle}>{indicator.title}</h2>
              <div className={indiStyles.cardcontent}>
                
              
              <p className={indiStyles.cardbody}>{indicator.description}</p>
              <Link
                href="/video/[slug]"
                as={`/video/${indicator.slug}`}
                passHref
              >
                  <a className={indiStyles.button}>Read More...</a>
              </Link>
          </div>
          </div>  
            ))}
            </div>
        </div>
    )
}

export default VideoList
