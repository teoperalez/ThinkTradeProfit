import videoStyles from '../styles/Video.module.css'
import Link from 'next/link'

const VideoItem = ({video}) => {
    return (
        <div className={videoStyles.card}>
        <div className={videoStyles.cardcontent}>
            <img className={videoStyles.img} src={video.image} />
            <h2 className={videoStyles.cardtitle}>{video.title}</h2>
            <p className={videoStyles.cardbody}>{video.body}</p>
            <Link href="/video/[id]" as={`/video/${video.id}`}>
                <a className={videoStyles.button}>Read More...</a>
            </Link>
        </div>
    </div>
        
        
    )
}

export default VideoItem