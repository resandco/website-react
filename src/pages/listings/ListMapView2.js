import React, { useState, useRef } from 'react';
import Helmet from "react-helmet";
import Select from "react-select";

import GeneralHeader from "../../components/common/GeneralHeader";
import Newsletter from "../../components/other/cta/Newsletter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import MapViewCluster from "../../components/contact/MapViewCluster";
import RecommendedPlace from '../../components/places/RecommendedPlace';

import restaurants from '../../restaurants'

const allRestaurants = Object.values(restaurants)
const locationOptions = [
    {
        label: 'Tout voir',
        value: null,
    },
    ...allRestaurants
        .map(({ scity }) => {
            return scity
        })
        .reduce((unique, scity) => {
            if (!unique.includes(scity)) {
                unique.push(scity)
            }

            return unique; 
        }, [])
        .sort((aRaw, bRaw) => {
            // We want Paris to always come first and arrondissements properly sorted
            const fixLocation = (loc) => loc.replace(/^Paris/i, "00Paris").replace(/ (\d[eè])/, " 0$1")
            const a = fixLocation(aRaw)
            const b = fixLocation(bRaw)
            
            return a === b ? 0 : (a < b ? -1 : 1)
        })
        .map((value) => ({
            value,
            label: value
        }))
]
const timeslotOptions = [
    {
        label: 'Tout voir',
        value: null,
    },
    ...allRestaurants
        .map(({ creneaux }) => {
            return Object.keys(creneaux)
        })
        .flat()
        .reduce((unique, scity) => {
            if (!unique.includes(scity)) {
                unique.push(scity)
            }

            return unique; 
        }, [])
        .sort((a, b) => {
            const timeslotsOrder = {
                'lundi midi': 1,
                'lundi soir': 2,
                'mardi midi': 11,
                'mardi soir': 12,
                'mercredi midi': 21,
                'mercredi soir': 22,
                'jeudi midi': 31,
                'jeudi soir': 32,
                'vendredi midi': 41,
                'vendredi soir': 42,
                'samedi midi': 51,
                'samedi soir': 52,
                'dimanche midi': 61,
                'dimanche soir': 62
            }

            return timeslotsOrder[a] - timeslotsOrder[b]
        })
        .map((value) => ({
            value,
            label: value
        }))
]

function filterRestaurants(all, location, timeslot) {
    return all.reduce((acc, curr) => {
        if (location && location !== curr.scity) {
            return acc;
        }

        if (timeslot && !(timeslot in curr.creneaux)) {
            return acc;
        }

        acc.push(curr);
        return acc;
    }, [])
}

export default function ListMapView2() {
    const cardListRef = useRef();

    const [filteredRestaurants, setFilteredRestaurants] = useState(allRestaurants)
    const [selectedTimeslot, setSelectedTimeslot] = useState(timeslotOptions[0])
    const [selectedLocation, setSelectedLocation] = useState(locationOptions[0])
    const [selectedRestaurant, setSelectedRestaurant] = useState()
    const [hoveredRestaurant, setHoveredRestaurant] = useState()

    const handleTimeslotChange = ( newTimeslot ) => {
        setFilteredRestaurants( filterRestaurants(allRestaurants, selectedLocation.value, newTimeslot.value) )
        setSelectedTimeslot(newTimeslot)
        setSelectedRestaurant(null)
    }

    const handleLocationChange = ( newLocation ) => {
        setFilteredRestaurants( filterRestaurants(allRestaurants, newLocation.value, selectedTimeslot.value) )
        setSelectedLocation(newLocation)
        setSelectedRestaurant(null)
    }
    
    const handleRestaurantChange = ( placeId ) => {
        const newRestaurants = [
            filteredRestaurants.filter(({ id }) => id === placeId)[0],
            ...filteredRestaurants.filter(({ id }) => id !== placeId),
        ]
        setFilteredRestaurants(newRestaurants)
        setSelectedRestaurant(placeId)

        setTimeout(() => {
            const placeCard = document.getElementById(`place-${placeId}`)
            placeCard.scrollIntoView && placeCard.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest"
            })
        }, 150)
    }

    const handleEnterPlace = ( placeId ) => {
        setHoveredRestaurant( placeId )
    }
    const handleLeavePlace = () => {
        setHoveredRestaurant(null)
    }

    return (
        <main className="List-map-view2">
            <Helmet>
                <title>Trouvez votre restaurant anti-gaspi - RES&CO</title>
            </Helmet>

            {/* Header */}
            <GeneralHeader />

            {/* Place List */}
            <section className="card-area margin-top-100px padding-bottom-100px">
                <div className="container">
                    <div className="row align-items-start">

                        <div className="col-lg-8 ">
                            <div className="home-map">
                                <div className="map-container map-height w-100">
                                    <MapViewCluster
                                        restaurants={filteredRestaurants}
                                        hoveredRestaurant={hoveredRestaurant}
                                        selectRestaurant={handleRestaurantChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="sidebar-widget">
                                    <h3 className="widget-title">Choisissez un créneau</h3>
                                    <div className="sidebar-option mb-3">
                                        <Select
                                            value={selectedTimeslot}
                                            placeholder="Tout voir"
                                            onChange={handleTimeslotChange}
                                            options={timeslotOptions}
                                        />
                                    </div>
                                </div>
                                <div className="sidebar-widget">
                                    <h3 className="widget-title">Choisissez une localisation</h3>
                                    <div className="sidebar-option">
                                        <Select
                                            className="Select"
                                            value={selectedLocation}
                                            placeholder="Tout voir"
                                            onChange={handleLocationChange}
                                            options={locationOptions}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row align-items-start">
                        <div className="col-lg-8 ">
                            <div className="row twocol align-items-start justify-content-start margin-top-30px" ref={cardListRef}>
                                {
                                    filteredRestaurants.length === 0
                                        ? (
                                            <div className="col-lg-8">
                                                <span>Aucun restaurant ne correspond à ces critères</span>
                                            </div>
                                        )
                                        : filteredRestaurants.map((item, index) => (
                                            <RecommendedPlace
                                                place={item}
                                                key={index}
                                                isSelected={item.id === selectedRestaurant}
                                                isHovered={item.id === hoveredRestaurant}
                                                handleEnterPlace={handleEnterPlace}
                                                handleLeavePlace={handleLeavePlace}
                                            />
                                        ))
                                }
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
    );
}