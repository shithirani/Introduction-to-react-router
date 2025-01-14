import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>My website link</h2>
            <nav>
                <Link to="/">home</Link>
                <Link to="/user">user</Link>
                <Link to="/post">Post</Link>
                <Link to="/about">about</Link>
                <Link to="/contact">contact</Link>
                

            </nav>
        </div>
    );
};

export default Header;