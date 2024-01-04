import BlogList from '../components/BlogList'

import { getSortedPostsData } from '@/lib/posts'
import { PostMetaData } from '../types/types';

export default function Posts({}) {
  const allPostsData: PostMetaData[] = getSortedPostsData()

  return (
    <>
      <section className='flex flex-col items-center min-h-screen py-10'>
        <h2 className='text-3xl font-header font-medium'>Blog</h2>
        <BlogList posts={allPostsData} />
      </section>
    </>
  )
}
