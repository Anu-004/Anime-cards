
// Passes the parameter to the function
// const Click = () => {
//     const HandleClick=(name)=>{
//         console.log(`{$name} clicked`)
//     }
// //   return <button onClick={HandleClick("Anu")}>Click</button>
//   return <button onClick={()=>HandleClick("shinu")}>Click</button>
// }

// Count usin IF cond.
const Click = () => {
    let count=0
    const HandleClick=(name)=>{
    if(count<3){
        count++
        console.log(`${name} clicked me ${count} times`);
    }
    else{
        console.log(`${name} Stop clickin'`)
    }}
    return <button onClick={()=>HandleClick("Shinu")}>Click me</button>
}

// Target & changes the btn content
// const Click=()=>{
//     const HandleClick=(e)=>{
//         e.target.textContent="hehee"
//     }
//     return <button onClick={(e)=>HandleClick(e)}>ClickHere</button>
// }

export default Click
