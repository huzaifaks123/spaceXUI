// import styles from style modules
import styles from '../styles/navbar.module.css'

// import link and outlet to change dom without reloading tab
import { Link, Outlet } from "react-router-dom";

import { useState } from "react";

export default function Navbar() {
    const [show, setShow] = useState(false)

    // function to toggle menu after clicking on options
    function toggleMenu() {
        setShow(!show)
    }

    return (
        <div className={styles.body}>
            <nav className={`navbar navbar-expand-lg ${styles.navContainer}`} >
                <div className="container-fluid">
                    <Link to={"/"} onClick={toggleMenu} className={`d-flex align-items-center fs-3 ${styles.brandName}`}><div className={`navbar-brand me-auto ${styles.brandLogo}`} />SpaceX UI</Link>
                    <button className={`navbar-toggler border collapsed ${styles.customToggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${styles.navMenu} ${show ? "" : "hide"}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-auto">
                                <Link to={"/profile"} className="nav-link" onClick={toggleMenu}>
                                    <img className={styles.profilePic} src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="profile-pic"></img>
                                    <span className="ms-2 my-auto">User Name</span>
                                </Link>
                            </li>
                            <li className="nav-item d-flex mx-auto">
                                <Link to={"/login"} className="nav-link my-auto" onClick={toggleMenu}>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}