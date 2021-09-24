import { NavLink } from "react-router-dom";
import './navigation.css';

const Navigation: React.FC = () => (<>
    <h1>Cheerapp</h1>
    <div className="hr-bold-black"/>
    <div className="pure-g">
        <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4 nav-button"><NavLink to="/about">About</NavLink></div>
        <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4 nav-button"><NavLink to="/projects">Portfolio</NavLink></div>
        <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4 nav-button"><NavLink to="/contact" > Contact</NavLink ></div>
    </div>
    </>
)

export default Navigation;