import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
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
                            <Link to="/reservation-restaurant">Réserver un restaurant</Link>
                        </li>
                        <li>
                            <a href="https://resandco.typeform.com/to/xP5GlH">Devenir partenaire</a>
                        </li>
                        <li>
                            <a href="https://www.res-and-co.fr/blog/">Blog <FiChevronDown /></a>
                            <ul className="dropdown-menu-item">
                                <li><a href="https://www.res-and-co.fr/category/gaspillage-alimentaire/">Le gaspillage alimentaire</a></li>
                                <li><a href="https://www.res-and-co.fr/category/recettes-anti-gaspi/">Recettes anti-gaspi</a></li>
                                <li><a href="https://www.res-and-co.fr/category/parole-de-restaurateurs/">Parole de restaurateurs</a></li>
                            </ul>
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
                            <Link to="/reservation-restaurant">Réserver un restaurant</Link>
                        </li>
                        <li>
                            <a href="https://resandco.typeform.com/to/xP5GlH">Devenir partenaire</a>
                        </li>
                        <li>
                            <a href="https://www.res-and-co.fr/blog/">Blog <FiChevronDown /></a>
                            <ul className="dropdown-menu-item">
                                <li><a href="https://www.res-and-co.fr/category/gaspillage-alimentaire/">Le gaspillage alimentaire</a></li>
                                <li><a href="https://www.res-and-co.fr/category/recettes-anti-gaspi/">Recettes anti-gaspi</a></li>
                                <li><a href="https://www.res-and-co.fr/category/parole-de-restaurateurs/">Parole de restaurateurs</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
