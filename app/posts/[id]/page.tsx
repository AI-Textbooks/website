import { MP3Player } from '@/app/components/mp3player'
import { getPostData } from '@/lib/posts'
import { PostData } from '@/app/types/types';

type Params = {
  id: string
}

type Props = {
  params: Params
}

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.id)

  return {
    title: postData.title,
    openGraph: {
      title: postData.title,
      images: `/api/og/?title=${postData.title}`
    },
  }
}

const authors = [
  { id: 'john', name: 'John Choque', bio: 'Computer Scientist' },
  { id: 'mathias', name: 'Mathias Torp', bio: 'Innovation Engineer' },
]

// -< Post >-
export default async function Post({ params }: Props) {
  const postData: PostData = await getPostData(params.id)
  return (
    <>
      <article className='mx-auto w-full max-w-2xl p-4 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
        <header className='mb-4 lg:mb-6 not-format'>
          <h1 className='mb-4 text-5xl font-medium font-header leading-tight lg:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-200/70 '>
            {postData.title}
          </h1>
          <address className='items-center mb-6 not-italic'>
            <p className='text-base text-gray-500 dark:text-gray-400 mb-2'>
              <time dateTime='2022-02-08' title='February 8th, 2022'>
                {postData.date}
              </time>
            </p>
            <div className='items-center mb-3 text-sm text-gray-900 dark:text-white'>
              {postData.author.map((authorId) => {
                const author = authors.find((a) => a.id === authorId)
                return author ? (
                  <div key={author.id}>
                    <p className='text-base text-gray-500 dark:text-gray-400'>
                      {author.name}, {author.bio}
                    </p>
                  </div>
                ) : null
              })}
            </div>
          </address>
        </header>
        {postData.summaryHtml && (
          <div
            className='mb-6 [&_summary]:text-base [&_summary]:text-gray-500 [&_summary]:dark:text-gray-400 [&_summary]:cursor-pointer [&_summary]:select-none [&_summary]:hover:text-gray-900 [&_summary]:dark:hover:text-white [&_summary]:transition-colors [&_summary]:duration-200 [&_summary]:ease-in-out border border-gray-200 dark:border-gray-700 rounded-md p-2'
            dangerouslySetInnerHTML={{
              __html:
                '<details><summary>Summary</summary>\n\n' +
                postData.summaryHtml
                  .split('\n')
                  .map(
                    (paragraph) => `<p
                    style="margin-top: 1.5rem;"
                  >${paragraph}</p>`
                  )
                  .join('\n') +
                '\n</details>',
            }}
          ></div>
        )}
        {postData.audio && (
          <div className='mb-6'>
            <MP3Player
              src={
                'https://ai-textbooks.s3.eu-central-1.amazonaws.com/' +
                postData.audio
              }
            />
          </div>
        )}
        <div
          className='prose prose-lg space-y-4'
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        ></div>
      </article>
    </>
  )
}
