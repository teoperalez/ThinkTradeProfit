import videoStyles from '../styles/Video.module.css'
import Link from 'next/link'
import BAvatar from './BAvatar'
import BDate from './BDate'
import BCover from './BCover'
import Image from 'next/image'


export default function ThoughtCard({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    
    <div id ={slug}  className={videoStyles.card}  >
                  <div className={videoStyles.img} > 
              <Image src={coverImage} layout="fill" objectFit="cover"/>
              </div>
              <h1 className={videoStyles.cardtitle}>{title}</h1>
              <div className={videoStyles.cardcontent}>
                
              <BDate dateString={date} />
              <p className={videoStyles.cardbody}>{excerpt}</p>
              <Link
                href="/posts/[slug]"
                as={`/posts/${slug}`}
                passHref
              >
                  <a className={videoStyles.button}>Read More...</a>
              </Link>
          </div>
          </div>  
  )
}
