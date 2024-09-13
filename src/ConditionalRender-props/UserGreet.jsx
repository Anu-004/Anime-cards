import PropType from "prop-types"

// ------------Ternary Operator------------
// const UserGreet = (props) => {
//   return  props.isLog ? <h1>Welcome {props.Name}</h1>:<h1>Please Login {props.Name}</h1> 
// }

// ------------If condition------------
// const UserGreet = (props) => {
//     if(props.isLog){
//         return <h1>Welcome {props.Name}</h1>
//     }
//     else{
//         return <h1>Please Login {props.Name}</h1>
//     }
// }

// -------------Function-------------
const UserGreet = (props) => {
    const LOGin= <h2>Welcome {props.Name}</h2>
    const Name= <h2>Please Login {props.Name}</h2>

    return props.isLog ? LOGin : Name
}
UserGreet.PropType={
  isLog:PropType.bool,
  Name:PropType.string
}
UserGreet.defaultProps={
    isLog:false,
    Name:"Guest"
}
export default UserGreet
