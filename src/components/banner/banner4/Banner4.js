import React from 'react';
import Banner4SearchInput from "./Banner4SearchInput";
import SectionsHeading from "../../common/SectionsHeading";
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
                                <SectionsHeading title="Mangez au restaurant autrement" desc="Réservez votre menu surprise anti-gaspi" />
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
    );
}

export default Banner4;