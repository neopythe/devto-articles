import type { Article } from '../pages'

import ArticleDetails from './article-details'

export default function ArticleCollection({
  collection,
}: {
  collection: Article[]
}) {
  return (
    <div className="bg-white shadow rounded">
      <ul className="divide-y divide-gray-200">
        {collection.map((article) => (
          <ArticleDetails key={article.id} article={article} />
        ))}
      </ul>
    </div>
  )
}
