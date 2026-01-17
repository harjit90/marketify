import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <>
            <div className="header sticky-top">
                <nav className="navbar navbar-expand-lg main-menu py-2">
                    <div className='container'>

                        <NavLink className='navbar-brand' to='/'>
                            <div className='logo'><img src={logo} alt='logo image' />
                            </div>
                        </NavLink>

                        <div className='hamburgerMenu'>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                        </div>

                        <div className='collapse navbar-collapse menu-link flex justify-content-end' id='navbarNav'>
                            <ul className='navbar-nav'>
                                <li className='nav-item active'>
                                    <NavLink className='nav-link' to='/'>Home</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/about'>About</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/service'>Services</NavLink>
                                </li>

                                {/* <li className='nav-item dropdown'>
                                        <NavLink className='nav-link dropdown-toggle' to='/' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                        Services
                                        </NavLink>
                                        <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                        <NavLink className='dropdown-item' to='/'>Service 1</NavLink>
                                        <NavLink className='dropdown-item' to='/'>Service 2</NavLink>
                                        <NavLink className='dropdown-item' to='/'>Service 3</NavLink>
                                        <div className='dropdown-divider'></div>
                                        <NavLink className='dropdown-item' to='/'>Something else here</NavLink>
                                        </div>
                                    </li> */}
                                <li className='nav-item'>
                                    <NavLink className='nav-link' /*activeClassName='active_menu'*/ to='/contact'>Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;