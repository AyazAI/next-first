import Head from 'next/head'
import ArticleList from "../components/ArticleList";

export default function Home({
  articles
}) {

  return (

    <div>
      <div>
      </div>
      <Head>
        <title>First React Project</title>
        <meta name="keyword" content="web dev" />
      </Head>
      <ArticleList articles={articles} />
      
    </div>
  )
}


// Async handling
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}


