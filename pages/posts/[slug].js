import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import BContainer from '../../components/BContainer'
import PostBody from '../../components/PBody'
import BlogHeader from '../../components/BHeader'
import PHead from '../../components/PHead'
import BLayout from '../../components/BLayout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PTitle from '../../components/PTitle'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <BLayout preview={preview}>
      <BContainer>
        <BlogHeader />
        {router.isFallback ? (
          <PTitle>Loading…</PTitle>
        ) : (
          <>
            <article className="mb-32">
              <PHead
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </BContainer>
    </BLayout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
