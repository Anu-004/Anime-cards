import { Link } from "react-router-dom"

const Hobby = () => {
  return (
    <div>
        <h1>Hobbies</h1>
        <ul>
        <li>swim</li>
        <li>Dance</li>
        <li>Music</li>
        <li>Travel</li>
      </ul>
      <Link to="/">Go to Home</Link>
    </div>
  )
}

export default Hobby
