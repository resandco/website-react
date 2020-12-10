import React, { useState } from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false)

    const handleToggleNavOpen = function() {
        setNavOpen(!navOpen)
    }

    return (
        <>
            <div className="main-menu-content">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                        <li>
                            <a href="/restaurant-a-offrir/">Cadeau de Noël</a>
                        </li>
                        <li>
                            <Link to="/reservation-restaurant">Commander un repas surprise</Link>
                        </li>
                        <li>
                            <a href="https://resandco.typeform.com/to/xP5GlH">Devenir partenaire</a>
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
            <div className={navOpen ? 'side-nav-container active' : 'side-nav-container'}>
                <div className="humburger-menu">
                    <div className="humburger-menu-lines side-menu-close" onClick={handleToggleNavOpen}></div>
                </div>
                <div className="side-menu-wrap">
                    <ul className="side-menu-ul">
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/restaurant-a-offrir/">Cadeau Noël</Link>
                        </li>
                        <li>
                            <Link to="/reservation-restaurant">Commander un repas surprise</Link>
                        </li>
                        <li>
                            <a href="https://resandco.typeform.com/to/xP5GlH">Devenir partenaire</a>
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
