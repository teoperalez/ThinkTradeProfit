import Meta from "../../../Components/Meta"
import Link from "next/link"

const article = ({article}) => {
    
    const title = "Trading ThinkScripts || " + article.title  
    
    return (
        <>
            <Meta title={title} description ={article.body} tags="investing, forex, stocks, techncal analysis, charts, trading signals, trading indicators, backtesting" />
            <h1 className="card.title">{article.title}</h1>
            <p className="card.content">{article.body}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </>
    )
}

export default article

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json() 

   return {
       props: {
           article
       }   
    }
} 

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

    const articles = await res.json() 

    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))
    return {
        paths,
        fallback: false
   }
}