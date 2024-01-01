import Link from "next/link";

const BlogList = ({ posts }) => {
  return (
    <div className='grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20 p-2'>
      {posts.map(({ id, date, title, description }) => {
        return (
          <Link href={`/posts/${id}`} key={id}>
            <div className='rounded-xl max-w-sm rounded-xl w-full p-10 dark:border-emerald-300 dark:border hover:border-cyan-200/70'>
              <h2 className='font-header text-xl font-medium'>{title}</h2>
              <p className='text-gray-700 dark:text-gray-300'>
                {description}
              </p>
              <div className='mt-8 flex gap-4 items-center'>
                <div className='text-sm tracking-wide text-gray-600 dark:text-gray-400'>
                  {date}
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default BlogList