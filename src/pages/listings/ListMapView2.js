import React, { Component } from 'react';
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
        .sort()
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

class ListMapView2 extends Component {
    constructor(props) {
        super(props);
        this.cardListRef = React.createRef();
    }

    state = {
        allRestaurants: allRestaurants,
        filteredRestaurants: allRestaurants,
        timeslotOptions,
        locationOptions,
        selectedTimeslot: Object.values(timeslotOptions)[0],
        selectedCity: Object.values(locationOptions)[0],
        hoveredRestaurant: null,
        selectedRestaurant: null,
    }

    handleTimeslotChange = ( selectedTimeslot ) => {
        const {
            allRestaurants,
            selectedCity,
        } = this.state;
        const filteredRestaurants =
            this.filterRestaurants(allRestaurants, selectedCity.value, selectedTimeslot.value)
        this.setState(
            {
                selectedTimeslot,
                filteredRestaurants,
                selectedRestaurant: null,
            }
        );
    };
    handleCityChange = ( selectedCity ) => {
        const {
            allRestaurants,
            selectedTimeslot
        } = this.state;
        const filteredRestaurants =
            this.filterRestaurants(allRestaurants, selectedCity.value, selectedTimeslot.value)
        this.setState(
            {
                selectedCity,
                filteredRestaurants,
                selectedRestaurant: null
            }
        );
    }
    
    handleSelectRestaurant = ( placeId ) => {
        const { filteredRestaurants } = this.state;
        this.setState({
            selectedRestaurant: placeId,
            filteredRestaurants: [
                filteredRestaurants.filter(({ id }) => id === placeId)[0],
                ...filteredRestaurants.filter(({ id }) => id !== placeId),
            ]
        })
        window.scroll({ behavior: 'smooth', top: this.cardListRef.current.offsetTop })
    }

    handleEnterPlace = ( placeId ) => {
        this.setState({ hoveredRestaurant: placeId })
    }
    handleLeavePlace = () => {
        this.setState({ hoveredRestaurant: null })
    }

    filterRestaurants = (all, location, timeslot) => {
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

    render() {
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
                                            restaurants={this.state.filteredRestaurants}
                                            hoveredRestaurant={this.state.hoveredRestaurant}
                                            selectRestaurant={this.handleSelectRestaurant}
                                        />
                                    </div>
                                </div>
                                <div className="row twocol align-items-start justify-content-start margin-top-30px" ref={this.cardListRef}>
                                    {
                                        this.state.filteredRestaurants.length === 0
                                            ? (
                                                <div className="col-lg-8">
                                                    <span>Aucun réstaurant ne correspond à ces critères</span>
                                                </div>
                                            )
                                            : this.state.filteredRestaurants.map((item, index) => (
                                                <RecommendedPlace
                                                    place={item}
                                                    key={index}
                                                    isSelected={item.id === this.state.selectedRestaurant}
                                                    isHovered={item.id === this.state.hoveredRestaurant}
                                                    handleEnterPlace={this.handleEnterPlace}
                                                    handleLeavePlace={this.handleLeavePlace}
                                                />
                                            ))
                                    }
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="sidebar">
                                    <div className="sidebar-widget">
                                        <h3 className="widget-title">Choisissez un créneau</h3>
                                        <div className="sidebar-option mb-3">
                                            <Select
                                                value={this.state.selectedOption}
                                                placeholder="Tout voir"
                                                onChange={this.handleTimeslotChange}
                                                options={this.state.timeslotOptions}
                                            />
                                        </div>
                                    </div>
                                    <div className="sidebar-widget">
                                        <h3 className="widget-title">Choisissez une localisation</h3>
                                        <div className="sidebar-option">
                                            <Select
                                                value={this.state.selectedCatOp}
                                                placeholder="Tout voir"
                                                onChange={this.handleCityChange}
                                                options={this.state.locationOptions}
                                            />
                                        </div>
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
        );
    }
}

export default ListMapView2;