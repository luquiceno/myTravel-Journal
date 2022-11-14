
import worldIcon from '../images/world-icon.png'

function Navbar() {
    return (
        <nav>
            <img src={worldIcon} className="world--icon" alt="icon for the world" />
            <h1 className="header-title">My Travel Journal</h1>
        </nav>
    )
}

export default Navbar


                                