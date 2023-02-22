import React from 'react'
import logo from './logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'


const Navbar = () => {
    const { openSideBar, openSubmenu, closeSubmenu } = useGlobalContext();

    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 75;
        openSubmenu(page, { center, bottom })
    };

    const handleSubmenu = (e) => {
        if (!e.target.classList.contains("link-btn")) {

            closeSubmenu()
        }
    }

    return (
        <nav className="nav" >
            <div className="nav-center" onMouseOver={handleSubmenu}>
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="" />
                    <button className="btn toggle-btn" onClick={openSideBar}>
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            products
                        </button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={displaySubmenu}>
                            developers
                        </button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={displaySubmenu}>
                            company
                        </button>
                    </li>
                </ul>
                <button className="btn signin-btn">Sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;