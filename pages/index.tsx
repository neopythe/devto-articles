import type { NextPage } from 'next'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import ArticleCollection from '../components/article-collection'

export interface Article {
  id: number
  tag_list: string[]
  title: string
  social_image: string
  url: string
}

const toJSON = (_: Response) => _.json()
const getArticles = async ({ queryKey }: { queryKey: any }) =>
  await fetch(`https://dev.to/api/articles?page=${queryKey[1]}`).then(toJSON)

const Home: NextPage = () => {
  const [page, setPage] = useState(1)

  const {
    data: articles,
    error,
    isError,
    isLoading,
    isPreviousData,
  } = useQuery<Article[], Error>(['articles', page], getArticles, {
    keepPreviousData: true,
  })

  if (isLoading) return <span>Loading...</span>
  if (isError) return <span>{error.message}</span>

  return (
    <>
      <div className="max-w-4xl mx-auto my-4">
        <ArticleCollection collection={articles} />
        <div className="flex justify-end">
          <div className="flex gap-4">
            <button
              onClick={() => setPage((page) => page - 1)}
              disabled={isPreviousData || page === 1}
            >
              Prev
            </button>
            <button
              onClick={() => {
                setPage((page) => page + 1)
              }}
              disabled={isPreviousData}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
