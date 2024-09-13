import { useState } from "react"

const Use = () => {
    const [state,setState]=useState(true)
   
        // <button> Reveal False Beast</button>
        // let btn=document.createElement("button")
        // btn.textContent="Reveal False Beast"
        // let newDiv=document.getElementById("div-st")
        // newDiv.appendChild(btn)
        // document.getElementById("btn").addEventListener("click",()=>{ newDiv.innerHTML=`<img src=beach.jpg>`})
       
     
    // const change=()=>{
    //     let btn2 = document.createElement("button")
    //     btn2.textContent = "Reveal False Beast";
    //     btn2.id = "btnn"; // Add an ID to the button
    //     let newDiv = document.getElementById("div-st");
    //     newDiv.appendChild(btn2);
    // }
    const func=()=>{
    if(state==true){
       
        let existBtn = document.getElementById("btn");
        if (!existBtn) {
        let btn = document.createElement("button")
        btn.textContent = "Reveal Beast";
        btn.id = "btn"; // Add an ID to the button
        let newDiv = document.getElementById("div-st");
        newDiv.appendChild(btn);
        // newDiv.appendChild(img)
    }
          setState(!state)
       
    }
    
    else{
        
        let existBtn2 = document.getElementById("btn2");
        if (!existBtn2) {
        let btn2 = document.createElement("button")
            btn2.textContent = "Reveal False Beast";
            btn2.id = "btn2"; // Add an ID to the button
            let newDiv = document.getElementById("div-st");
            newDiv.appendChild(btn2);
        } 
    }

}
  return (
    <div id="div-st">
      <p>The state is {state?"True":"False"}</p>
      <button id="firstBtn" onClick={func}> Change State</button>
    
    </div>
  )
}

export default Use
