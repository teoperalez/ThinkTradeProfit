import articleStyles from '../styles/Articles.module.css'
import Link from 'next/link'

const ArticleItem = ({article}) => {
    return (
        <div className={articleStyles.card}>
        <div className={articleStyles.cardcontent}>
            <h2 className={articleStyles.cardtitle}>{article.title}</h2>
            <p className={articleStyles.cardbody}>{article.body}</p>
            <Link href="/article/[id]" as={`/article/${article.id}`}>
                <a className={articleStyles.button}>Read More...</a>
            </Link>
        </div>
    </div>
        
        
    )
}

export default ArticleItem