import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <div>
        <h1>Contact</h1>
        <ul>
            <li>Github</li>
            <li>Gmail</li>
            <li><Link to="/">Home</Link> </li>
        </ul>

    </div>
  )
}

export default Contact
