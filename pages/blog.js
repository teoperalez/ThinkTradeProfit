
import Container from '../Components/Container'
import MoreStories from '../Components/MoreStories'
import HeroPost from '../Components/Hero-post'
import Intro from '../Components/Intro'
import BlogLayout from '../Components/Bloglayout'
import { getAllPosts } from '../lib/api'



export default function Blog({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      
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
