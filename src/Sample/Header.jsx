import "./Header.css"
function Header() {
    return (
        <div className="top">
         <h2 style={{marginLeft: "1em"}}>Wolverine</h2>
            <ul>
                <li>Home</li>
                <li>Profile</li>
                <li style={{marginRight: "1em"}}>About </li>
            </ul>
        </div>
    )
}

export default Header;