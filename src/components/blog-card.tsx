'use client'

import Link from 'next/link'

interface Post {
  title: string
  description: string
  image: string
  date: string
  author: string
  link: string
}

interface BlogCardProps {
  post: Post
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={post.link}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{post.description}</p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span>{post.date}</span> &middot; <span>{post.author}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
