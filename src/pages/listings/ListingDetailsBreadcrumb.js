import React from 'react';
import { GiPositionMarker } from 'react-icons/gi'
import { BsCheckCircle } from 'react-icons/bs'

function ListingDetailsBreadcrumb ({restaurant}) {
    return (
        <>
            <section className="breadcrumb-area listing-detail-breadcrumb"
                style={{ backgroundImage: `url("${restaurant.image}?tr=w-1920")`}}
                data-zob="truc"
            >
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 position-relative">
                                <div className="breadcrumb-content">
                                    <h1 className="breadcrumb__title">
                                        {restaurant.title}
                                        &nbsp;
                                        {
                                            restaurant.verifie ? (
                                                <span className="author-verified-badge">
                                                    <span className="author__verified-badge" data-toggle="tooltip" data-placement="top" title="Le restaurant a été testé et validé en personne par un membre de notre équipe">
                                                        <span className="d-inline-block"><BsCheckCircle /></span>
                                                    </span>  
                                                </span>
                                            ) : ""
                                        }
                                    </h1>
                                    <p className="breadcrumb__desc">
                                        <span className="la d-inline-block"><GiPositionMarker /></span> {restaurant.stitle}, {restaurant.scity}
                                    </p>
                                    <ul className="listing-info mt-3 mb-3">
                                        { restaurant.tags.map((tag, i) => (
                                            <li key={i}>
                                                <span className="theme-btn listing-tag">
                                                    {tag}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bread-svg">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                        <path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z" />
                    </svg>
                </div>
            </section>
        </>
    );
}

export default ListingDetailsBreadcrumb;