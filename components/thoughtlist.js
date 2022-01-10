import videoStyles from '../styles/Video.module.css'
import ThoughtCard from './ThoughtCard'



const ThoughtList = ({allPosts}) => {
    
    
    return (
        
        <div className={videoStyles.sectiontop}>
            <h1 className={videoStyles.title}>Thoughts</h1>
            <div className={videoStyles.contents}>
            {allPosts.map((post, index) => (
              <ThoughtCard
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
            ))}
            </div>
        </div>
    )
}


export default ThoughtList