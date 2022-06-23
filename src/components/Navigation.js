import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="Navigation">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
        </nav>
    );
}

export default Navigation;
