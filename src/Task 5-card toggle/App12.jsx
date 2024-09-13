import T5 from "./T5"
import x1 from "../assets/SampleImg/x1.jpg" 
// import "t5.css"
const App12 = () => {
 const hobby=["Read","Travel","Songs"]
 const food=["Briyani","Shawarma","Parotta"]
  return (
    
    <div>
      
      <T5 name="Wolverine" color=" " url={x1} txt="Hello, I'm an avid reader & developer" arr1="Hobbies" Itm1={hobby} arr2="Favo food" Itm2={food}/>
      {/* <T5 Itm={hobby}/> */}
    </div>
  )
}

export default App12
