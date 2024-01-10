export type PostMetaData = {
  title: string
  date: string
  description: string
  author: [string]
  audio?: string
  id: string
}
export type PostData = PostMetaData & {
  contentHtml: string
  summaryHtml?: string
}
