import Task from "./Task"
const App7 = () => {
  let box=[{id:1, url:"https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=400", name:"Mountain", txt:"A beautiful view of mountain" },
    {id:2,url:"https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=400", name:"Mountain", txt:"A beautiful view of mountain"},
  
  ]
  return (
    // <Task url="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=400" name="Mountain" txt="A beautiful view of mountain"/>
    // <Task url="" name="Fore" txt="An awesome look"/>

<Task boxes={box}/> 
  )
}

export default App7
