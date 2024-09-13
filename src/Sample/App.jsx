import Footer from "./Footer"
import Button from "./Button"
import Header from "./Header"
import x1 from "../assets/SampleImg/x1.jpg"
import x2 from "../assets/SampleImg/x2.jpg"
import x3 from "../assets/SampleImg/x3.jpg"
import "./App.css"
function App() {

  return (
    <div>
        <Header></Header>
        <Button></Button>
        <div className="image">
          <img src={x1} alt="" width="250px" height="250px"/> 
          <img src={x2} alt=""  width="250px" height="250px"/>
          <img src={x3} alt=""  width="250px" height="250px"/>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default App
