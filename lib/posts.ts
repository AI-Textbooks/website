// matter is a library that let's you parse the metadata in each markdown file.
// the lib folder does not have an assigned name like the pages folder, so you can name it anything. It's usually convention to use lib or utils

import fs from 'fs'
import path from 'path'

// Import 'gray-matter', library for parsing the metadata in each markdown file
import matter from 'gray-matter'

// Import 'remark', library for rendering markdown
import { remark } from 'remark'
const rehypeAddClasses = require('rehype-add-classes')

//@ts-ignore
import rehypeFigure from '@microflash/rehype-figure'
import rehypeDocument from 'rehype-document'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'

// --------------------------------
// GET THE PATH OF THE POSTS FOLDER
const postsDirectory = path.join(process.cwd(), 'posts') // process.cwd() returns the absolute path of the current working directory

// -------------------------------------------------
// GET THE DATA OF ALL POSTS IN SORTED ORDER BY DATE
/*
  Returns an array that looks like this:
  [
    {
      id: 'ssg-ssr',
      title: 'When to Use Static Generation v.s. Server-side Rendering',
      date: '2020-01-01'
    },
    {
      id: 'pre-rendering',
      title: 'Two Forms of Pre-rendering',
      date: '2020-01-02'
    }
  ]
*/

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory) // [ 'pre-rendering.md', 'ssg-ssr.md' ]

  // Get the data from each file
  const allPostsData = fileNames.map((filename) => {
    // Remove ".md" from file name to get id
    const id = filename.replace(/\.md$/, '') // id = 'pre-rendering', 'ssg-ssr'

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, filename)
    // /Users/ef/Desktop/nextjs-blog/posts/pre-rendering.md
    const fileContents = fs.readFileSync(fullPath, 'utf8') // .md string content

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as {
        date: string
        title: string
        description: string
        author: [string]
        summary?: string
      }),
    }
  })

  // Sort posts by date and return
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

// ------------------------------------------------
// GET THE IDs OF ALL POSTS FOR THE DYNAMIC ROUTING
/*
  Returns an array that looks like this:
  [
    {
      params: {
        id: 'ssg-ssr'
      }
    },
    {
      params: {
        id: 'pre-rendering'
      }
    }
  ]
  */

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

// The returned array must have the params key otherwise `getStaticPaths` will fail

// --------------------------------
// GET THE DATA OF A SINGLE POST FROM THE ID
export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processor = remark()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeFigure)
    .use(rehypeAddClasses, {
      // Define your default classes here
      h1: 'text-3xl',
      p: 'text',
      h2: 'text-2xl font-header font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-200/70 ',
      img: 'mx-auto',
      figcaption: 'text-center text-sm mt-2',
      h3: 'text-xl font-header font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-200/70 ',
      h4: 'text-lg font-header font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-200/70 ',
      ul: 'list-disc list-outside',
      ol: 'list-decimal list-outside',
      strong: 'font-bold',
      em: 'italic',
      // Add more tags as needed
    })
    .use(rehypeDocument, {
      // Get the latest one from: <https://katex.org/docs/browser>.
      css: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css',
    })
    .use(remarkMath)
    .use(rehypeKatex)
  const contentHtml = (await processor.process(matterResult.content)).toString()
  const summaryHtml = (
    await processor.process(matterResult.data.summary.replace('\n', '\n\n'))
  ).toString()

  // Combine the data with the id
  return {
    id,
    contentHtml,
    summaryHtml,
    ...(matterResult.data as {
      date: string
      title: string
      description: string
      author: [string]
      audio?: string
    }),
  }
}
