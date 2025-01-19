'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// NewsItem component to display individual news articles
const NewsItem = ({ article }:any) => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle className="text-xl font-bold">{article.title}</CardTitle>
      <CardDescription>{new Date(article.published_on * 1000).toLocaleString()}</CardDescription>
    </CardHeader>
    <CardContent>
      {/* <p className="text-gray-700 mb-4">{article.body}</p> */}
      <p className="text-gray-700 mb-4">
  {article.body.length > 100 ? `${article.body.slice(0, 100)}...` : article.body}
</p>

      <a 
        href={article.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-primary hover:underline"
      >
        Read more
      </a>
    </CardContent>
  </Card>
)

export default function CryptoNews() {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
        if (!response.ok) {
          throw new Error('Failed to fetch news')
        }
        const data = await response.json()
        setNews(data.Data)
      } catch (err:any) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchNews()
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-10">
        <h2 className="text-2xl font-bold mb-4">Error</h2>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Latest Crypto News</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map((article:any) => (
          <NewsItem key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}

