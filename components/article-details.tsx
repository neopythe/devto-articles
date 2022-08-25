import type { Article } from '../pages'

import Image from 'next/image'

export default function ArticleDetails({ article }: { article: Article }) {
  return (
    <li>
      <a href={article.url} className="block hover:bg-slate-50">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <Image
                src={article.social_image}
                layout="fixed"
                priority={true}
                objectFit="cover"
                width={120}
                height={80}
                alt=""
              />
              <div className="inline-block text-lg text-blue-400">
                {article.title}
              </div>
            </div>
            <ul className="ml-2">
              {article.tag_list.map((tag) => (
                <li
                  key={tag}
                  className="inline-flex ml-1 px-2 text-xs rounded-full bg-gray-200 text-gray-700"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </a>
    </li>
  )
}
