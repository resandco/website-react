import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false)

    const handleToggleNavOpen = function () {
        setNavOpen(!navOpen)
    }

    return (
        <>
            <div className="main-menu-content">
                <nav>
                    <ul>
                        <li>
                            <Link to="/reservation-restaurant">
                                Trouver un menu surprise
                            </Link>
                        </li>
                        <li>
                            <a href="https://resandco.typeform.com/to/xP5GlH">
                                Devenir partenaire
                            </a>
                        </li>
                        <li>
                            <a href="https://pro.res-and-co.fr/restauration-entreprise-engagee">
                                Offre entreprise
                            </a>
                        </li>
                        <li>
                            <a href="https://www.res-and-co.fr/blog/">Blog</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="side-menu-open" onClick={handleToggleNavOpen}>
                <span className="menu__bar"></span>
                <span className="menu__bar"></span>
                <span className="menu__bar"></span>
            </div>
            <div
                className={
                    navOpen ? 'side-nav-container active' : 'side-nav-container'
                }
            >
                <div className="humburger-menu">
                    <div
                        className="humburger-menu-lines side-menu-close"
                        onClick={handleToggleNavOpen}
                    ></div>
                </div>
                <div className="side-menu-wrap">
                    <ul className="side-menu-ul">
                        <li>
                            <Link to="/reservation-restaurant">
                                Trouver un menu surprise
                            </Link>
                        </li>
                        <li>
                            <a href="https://resandco.typeform.com/to/xP5GlH">
                                Devenir partenaire
                            </a>
                        </li>
                        <li>
                            <a href="https://pro.res-and-co.fr/restauration-entreprise-engagee">
                                Offre entreprise
                            </a>
                        </li>
                        <li>
                            <a href="https://www.res-and-co.fr/blog/">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
