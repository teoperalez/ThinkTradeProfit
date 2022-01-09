
import Container from '../Components/Container'
import MoreStories from '../Components/MoreStories'
import HeroPost from '../Components/Hero-post'
import Intro from '../Components/Intro'
import BlogLayout from '../Components/Bloglayout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'


export default function Blog({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <BlogLayout>
        <Head>
          <title>ThoughtsBlog</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </BlogLayout>
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
