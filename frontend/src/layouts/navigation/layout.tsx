// import react from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import style from './style.module.css'
import { CategoryBar, ProfileBox } from './components';
import { useState } from 'react';


const Navbar = () => {
    const navigate = useNavigate();
    const [display, setDisplay] = useState<string>("d-none");
    const dropDownToggler = () => {
        if (display === "d-none") {
            setDisplay("d-block");
        } else {
            setDisplay("d-none");
        }
    }

    return (
        <nav className={`${style.navbar}`}>
            <div className={`${style.navbarSections}`}>
                <div className={`${style.topNavbar}`}>
                    <h2 style={{ cursor: "pointer" }} onClick={() => { navigate("/"); }}>HEYBE27</h2>
                    {/* <button>Login</button> */}
                    <div className={`${style.profileBoxContainer}`}>    
                        <ProfileBox/>
                    </div>

                </div>
                <div className={`${style.bottomNavbar}`}>
                    <ul className={`${style.navItems}`}>
                        <li><NavLink to="/campaign" className={`${style.navLink}`}>Campaign</NavLink></li>
                        <li><NavLink to="/mostFaved" className={`${style.navLink}`}>Most-Faved</NavLink></li>
                        <li><NavLink to="/products" className={`${style.navLink}`}>Products</NavLink></li>
                        <li><NavLink to="/blogs" className={`${style.navLink}`}>Blogs</NavLink></li>
                        <li><NavLink onClick={dropDownToggler} to="/" className={`${style.navLink}`}>Categories</NavLink> <CategoryBar display={display} /></li>
                    </ul>
                    <div className={`${style.searchBox}`}>
                        <input type="text" />
                        <button> <span className={`${style.materialSymbolsOutlined}`}>search</span></button>
                    </div>
                </div>
            </div>

        </nav>
    )
};

export default Navbar;