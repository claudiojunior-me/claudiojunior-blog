import { PageSEO } from '@/components/SEO'
import type { Simple } from 'contentlayer/generated'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  content: Omit<Simple, '_id' | '_raw' | 'body'>
}

export default function SimpleLayout({ children, content }: Props) {
  const { name } = content

  return (
    <>
      <PageSEO title={`${name}`} description={`${name}`} />
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {name}
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-1 xl:gap-x-8 xl:space-y-0">
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
        </div>
      </div>
    </>
  )
}
