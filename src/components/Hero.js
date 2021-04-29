import React from 'react'
import { Link } from 'react-router-dom'
import SectionsHeading from './common/SectionsHeading'
import { FiChevronDown } from 'react-icons/fi'

export default function Hero() {
    return (
        <>
            <section className="hero-wrapper hero-wrapper4">
                <div className="hero-overlay"></div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hero-heading">
                                <SectionsHeading
                                    title="De nouveaux Menus Surprises à sauver chaque jour"
                                    desc="Découvrir de nouvelles saveurs près de chez toi, à prix réduit et en préservant la planète, ça te tente ?"
                                />
                            </div>

                            <div className="main-search-input">
                                <div className="main-search-input-btn">
                                    <Link
                                        to="/reservation-restaurant"
                                        className="button theme-btn"
                                        type="submit"
                                    >
                                        Je commande un repas surprise
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-svg-content text-center">
                    <i>
                        <FiChevronDown />
                    </i>
                </div>
            </section>
        </>
    )
}
