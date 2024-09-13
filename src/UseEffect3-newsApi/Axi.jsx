import "./Style.css"
import "./Loader"
import { useEffect, useState } from "react"
import axios from "axios"
import Loader from "./Loader"

const Axi = () => {
    const [article, setArticle] = useState([])
    const [error,setError]=useState(false)
    const [load, setLoad] = useState(true)
    

    useEffect(() => {
        axios.get("https://api.spaceflightnewsapi.net/v4/articles")
            .then((response) => console.log(response.data.results),
                setArticle(response.data.results))
            .catch((error) => console.log(error),
    setError(error))
        .finally(() => setLoad(false))
        // .then((data) => console.log(data.results))

    })
       
  return (
      <div className="container">
          {load && <Loader />}
          {error && <p>Something wrong.Try again</p>}
          {!load && !error &&article.map((article, index) => (
              <div className="class-item" key={index}>
 <img src={article.image_url} alt="" />
 <h3>{ article.title}</h3>
              </div>
          ))}
         
    </div>
  )
}

export default Axi
