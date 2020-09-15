import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import GeneralHeader from "../../components/common/GeneralHeader";
import ListingDetailsBreadcrumb from "./ListingDetailsBreadcrumb";
import ListingDetailsSidebar from "../../components/sidebars/ListingDetailsSidebar";
import ListingDetailsGallery from "../../components/sliders/ListingDetailsGallery";
import { GiPositionMarker } from 'react-icons/gi'
import { FaCheckCircle } from 'react-icons/fa'
import GeneralMap from "../../components/contact/GeneralMap";
import Newsletter from "../../components/other/cta/Newsletter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";

import restaurants from '../../restaurants'

function ListingDetails () {
    let {placeId} = useParams()
    const restaurant = restaurants[placeId]

    return (
        <main className="listing-details">
            {/* Header */}
            <GeneralHeader />

            {/* Breadcrumb */}
            <ListingDetailsBreadcrumb restaurant={restaurant} />

            <section className="single-listing-area padding-top-35px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="single-listing-wrap">
                                <ListingDetailsGallery galery={restaurant.gallerie || []} restaurantName={restaurant.title} />

                                <div className="listing-description padding-top-40px padding-bottom-35px">
                                    <h2 className="widget-title">
                                        Description
                                    </h2>
                                    <div className="title-shape"></div>
                                    <div className="section-heading mt-4">
                                        <div className="sec__desc font-size-16">
                                            <ReactMarkdown source={restaurant.description} />
                                        </div>
                                    </div>
                                </div>

                                <div className="feature-listing padding-top-40px padding-bottom-35px">
                                    <h2 className="widget-title">
                                        Infos pratiques
                                    </h2>
                                    <div className="title-shape"></div>
                                    <ul className="list-items mt-4">
                                        {(restaurant.infos || []).map((info, i) => {
                                            return (
                                                <li key={i}>
                                                    <i className="color-text font-size-18"><FaCheckCircle /></i> {info}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>

                                <div className="listing-map gmaps padding-top-40px padding-bottom-70px">
                                    <h2 className="widget-title">
                                        Plan
                                    </h2>
                                    <div className="title-shape margin-bottom-35px"></div>
                                    <div className="section-heading padding-bottom-20px mt-4">
                                        <p className="sec__desc font-size-16">
                                            <span className="la d-inline-block"><GiPositionMarker /></span> {restaurant.stitle}, {restaurant.scity}
                                        </p>
                                    </div>
                                    <GeneralMap coordinates={restaurant.coordinates} />
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <ListingDetailsSidebar restaurant={restaurant} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <Newsletter />

            {/* Footer */}
            <Footer />

            <ScrollTopBtn />
        </main>
    );
}

export default ListingDetails;