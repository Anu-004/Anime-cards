import "./Style.css"
import { useEffect, useState } from "react"
import Loader from "./Loader"
const Article = () => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

  useEffect(() => { 
    
        fetch("https://api.spacefightnewsapi.net/v4/articles")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setArticles(data.results)
            })
            .catch((error) => {
                console.log(error)
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    },[])
    return (
      
        <div className="container">
        {error && 
        <p> Something went wrong <Loader /></p>}
        {loading && <p> <Loader /></p>}
        { !error && !loading && articles.map((article, index) => (
          <div className="article-item" key={index}>
            <img src={article.image_url} alt="" />
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <p>{new Date(article.published_at).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
  )
}

export default Article
