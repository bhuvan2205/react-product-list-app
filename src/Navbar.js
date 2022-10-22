import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Product Store</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Product</Link>
            </div>
        </nav>
    );
}

export default Navbar;