
import propType from "prop-types"
const Student = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Age: {props.age}</h1>
      <h1>Student: {props.isStu?"S":"No"}</h1>
    </div>
  )
}
// Create obj with propType to validate (DataType)
Student.propType={
  name:propType.string,
  age:propType.number,
  isStu:propType.bool
}
// Sets a default value for not assigned
Student.defaultProps={
    name:"unknown",
    age:"15",
    isStu:"NA"
}
export default Student
