import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { allSimples } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'

const DEFAULT_LAYOUT = 'SimpleLayout'

export const getStaticPaths = async () => {
  return {
    paths: allSimples.map((p) => ({ params: { slug: p.slug.split('/') } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const slug = (params.slug as string[]).join('/')
  const content = allSimples.find((p) => p.slug === slug)

  return {
    props: {
      content,
    },
  }
}

export default function About({ content }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <MDXLayoutRenderer layout={content.layout || DEFAULT_LAYOUT} content={content} />
}
