import React from 'react'
import Banner4SearchInput from './Banner4SearchInput'
import SectionsHeading from '../../common/SectionsHeading'
import { FiChevronDown } from 'react-icons/fi'

function Banner4() {
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
                            <Banner4SearchInput />
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

export default Banner4
