import Link from 'next/link'
import BlogList from '../components/BlogList'

import { getSortedPostsData } from '@/lib/posts'

type AllPostsData = {
  date: string
  title: string
  id: string,
  author: [string]
}[]

const authors = [
  { id: 'john', name: 'John Choque', bio: 'Computer Scientist'},
  { id: 'mathias', name: 'Mathias Torp', bio: 'Innovation Engineer'},
]

export default function Posts({}) {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
    <>
      <section className='flex flex-col items-center min-h-screen py-10'>
        <h2 className='text-3xl font-header font-medium'>Blog</h2>
        <BlogList posts={allPostsData} />
      </section>
    </>
  )
}
