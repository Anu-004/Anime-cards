import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      {/* <a href="">categories</a> */}
        <Link to="/Cate">categories</Link> <br />
        <Link to="/Hobby">Hobbies</Link><br />
        <Link to="/About">About</Link><br />
        <Link to="/Contact">Contact</Link><br />
    </div>
  )
}

export default HomePage
