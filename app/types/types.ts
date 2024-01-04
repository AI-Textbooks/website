export type PostMetaData = {
    title: string
    date: string
    description: string
    author: [string]
    audio?: string
    summary?: string
    id: string
}
export type PostData = PostMetaData & {
    contentHtml: string;
};
