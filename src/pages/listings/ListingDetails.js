import React from 'react'
import { useParams } from 'react-router-dom'
import Helmet from 'react-helmet'
import ReactMarkdown from 'react-markdown'

import GeneralHeader from '../../components/common/GeneralHeader'
import ListingDetailsBreadcrumb from './ListingDetailsBreadcrumb'
import ListingDetailsSidebar from '../../components/sidebars/ListingDetailsSidebar'
import ListingDetailsGallery from '../../components/sliders/ListingDetailsGallery'
import { GiPositionMarker } from 'react-icons/gi'
import { FaCheckCircle } from 'react-icons/fa'
import GeneralMap from '../../components/contact/GeneralMap'
import Newsletter from '../../components/other/cta/Newsletter'
import Footer from '../../components/common/footer/Footer'
import ScrollTopBtn from '../../components/common/ScrollTopBtn'

import restaurants from '../../restaurants'

// practical information icons
import airCond from './../../assets/images/icon/air-conditioner.png'
import disabled from './../../assets/images/icon/disabled.png'
import ecoFriendly from './../../assets/images/icon/eco-friendly.png'
import glutenFree from './../../assets/images/icon/gluten-free.png'
import milk from './../../assets/images/icon/milk-bottle.png'
import pawprint from './../../assets/images/icon/pawprint.png'
import terrace from './../../assets/images/icon/terrace.png'
import vegan from './../../assets/images/icon/vegan.png'
import vegetables from './../../assets/images/icon/vegetables.png'
import wifi from './../../assets/images/icon/wifi.png'

function ListingDetails() {
    let { placeId } = useParams()
    const restaurant = restaurants[placeId]

    const displayInfoIcon = (info) => {
        if (info.includes('Accès handicapé')) return disabled
        if (info.includes('Animaux acceptés')) return pawprint
        if (info.includes('Climatisé')) return airCond
        if (info.includes('Kids friendly')) return milk
        if (info.includes('Option sans gluten')) return glutenFree
        if (info.includes('Option végane') || info.includes('100% vegan'))
            return vegan
        if (info.includes('Option végétarienne')) return vegetables
        if (info.includes('Produits bio')) return ecoFriendly
        if (info.includes('Terrasse')) return terrace
        if (info.includes('Wifi')) return wifi
        else return false
    }

    return (
        <main className="listing-details">
            <Helmet>
                <title>
                    Restaurant {restaurant.title} à {restaurant.scity} - RES&CO
                </title>
            </Helmet>

            {/* Header */}
            <GeneralHeader />

            {/* Breadcrumb */}
            <ListingDetailsBreadcrumb restaurant={restaurant} />

            <section className="single-listing-area padding-top-35px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="single-listing-wrap">
                                <ListingDetailsGallery
                                    galery={restaurant.gallerie || []}
                                    restaurantName={restaurant.title}
                                />
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <ListingDetailsSidebar restaurant={restaurant} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="single-listing-wrap">
                                <div className="listing-description padding-top-40px padding-bottom-35px">
                                    <h2 className="widget-title">
                                        Description
                                    </h2>
                                    <div className="title-shape"></div>
                                    <div className="section-heading mt-4">
                                        <div className="sec__desc font-size-16">
                                            <ReactMarkdown
                                                source={restaurant.description}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="feature-listing padding-top-40px padding-bottom-35px">
                                    <h2 className="widget-title">
                                        Infos pratiques
                                    </h2>
                                    <div className="title-shape"></div>
                                    <ul className="list-items mt-4">
                                        {(restaurant.infos.sort() || []).map(
                                            (info, i) => {
                                                return (
                                                    <li key={i}>
                                                        {displayInfoIcon(
                                                            info
                                                        ) ? (
                                                            <img
                                                                src={displayInfoIcon(
                                                                    info
                                                                )}
                                                                alt={info}
                                                                height="22"
                                                                className="pr-2"
                                                            />
                                                        ) : (
                                                            <i className="color-text font-size-22 pr-2">
                                                                <FaCheckCircle />
                                                            </i>
                                                        )}
                                                        {info}
                                                    </li>
                                                )
                                            }
                                        )}
                                    </ul>
                                </div>

                                <div className="feature-listing padding-top-40px padding-bottom-35px">
                                    <h2 className="widget-title">
                                        Ingrédients allergènes
                                    </h2>
                                    <div className="title-shape"></div>
                                    <ul className="list-items mt-4">
                                        {restaurant.allergenes !== undefined &&
                                        restaurant.allergenes.length > 0
                                            ? (
                                                  restaurant.allergenes.sort() ||
                                                  []
                                              ).map((info, i) => {
                                                  return <li key={i}>{info}</li>
                                              })
                                            : 'Non renseignés'}
                                    </ul>
                                </div>

                                <div className="listing-map gmaps padding-top-40px padding-bottom-70px">
                                    <h2 className="widget-title">Plan</h2>
                                    <div className="title-shape margin-bottom-35px"></div>
                                    <div className="section-heading padding-bottom-20px mt-4">
                                        <p className="sec__desc font-size-16">
                                            <span className="la d-inline-block">
                                                <GiPositionMarker />
                                            </span>{' '}
                                            {restaurant.stitle},{' '}
                                            {restaurant.scity}
                                        </p>
                                    </div>
                                    <GeneralMap
                                        coordinates={restaurant.coordinates}
                                    />
                                </div>
                            </div>
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
    )
}

export default ListingDetails
