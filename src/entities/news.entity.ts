export interface New {
    author: string
    content: string
    description: string
    publishedAt: Date
    source: {
        id: number
        name: string
    }
    title: string
    url: string
    urlToImage: string
}