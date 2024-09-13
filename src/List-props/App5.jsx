import List from "./List1.jsx"

const App5 = () => {
  const animals=[{id:1,name:"lion",cal:"210"},
    {id:2,name:"zebra",cal:"100"},
    {id:3,name:"fox",cal:"90"},
    {id:4,name:"tiger",cal:"110"},
  ]
  const birds=[{id:1,name:"falmingo",cal:180},
    {id:2,name:"crane",cal:77},
    {id:3,name:"owl",cal:90},
    {id:4,name:"pigeon",cal:120}
  ]
  return (
  //   {animals.length>0? <List category="animals"/>:"None"}
  //   {birds.length>0?<List items={birds} category="birds"/>}
  //  <List />
  <div>
  {animals.length > 0 ? <List Items={animals} Category="animals" /> : "No animals available"}
  {birds.length > 0 ?  <List Items={birds} Category="birds" />: "No birds available"}

  {/* <List Items={animals}/> */}
  {/* <List Items={birds}/> */}
</div>
  )
}

export default App5
