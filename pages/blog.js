import BLayout from '../components/BLayout'
import PageMeta from '../components/pagemeta'
import { getAllPosts } from '../lib/api'
import BContainer from '../components/BContainer'
import BIntro from '../components/BIntro'
import BHero from '../components/BHero'
import BMore from '../components/BMore'

export default function Blog({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
    <BLayout>
    <PageMeta title="ThinkTradeProfit.com || Thoughts Blog" description="Strategies for the Intelligent Trader" tags="investing, forex, stocks, techncal analysis, charts, trading signals, trading indicators, backtesting" /> 
        <BContainer>
          <BIntro />
          {heroPost && (
            <BHero
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <BMore posts={morePosts} />}
        </BContainer>
    </BLayout>
      
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
