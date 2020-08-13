import React from 'react';
import {IoIosCheckmarkCircle, IoMdStar, IoMdStarHalf} from "react-icons/io";
import {GiChickenOven} from "react-icons/gi";
import {RiHotelBedLine, RiPlaneLine} from "react-icons/ri";

const restaurants = {
    'ma-cantine-thai': {
        badge: '-20%',
        title: 'Ma Cantine Thaï',
        titleIcon: <IoIosCheckmarkCircle />,
        titleUrl: '/listing-details',
        stitle: '56 rue Richer',
        scity: 'Paris 9ème',
        szip: '75009',
        coordinates: { lat: 48.874093, lng: 2.342877 },
        image: require('./photos-restau/ma-cantine-thai.jpg'),
        cardType: 'Asiatique',
        cardTypeIcon: <GiChickenOven />,
        creneaux: {
            'lundi soir': ['19h30', '20h'],
            'mardi midi': ['14h30', '15h'],
        }
    },
    'opium-la-cabane': {
        title: 'Opium, La Cabane',
        titleIcon: '',
        titleUrl: '/listing-details',
        stitle: '44 Rue du Dauphine',
        scity: 'Paris 6ème',
        szip: '75006',
        coordinates: { lat: 48.854150, lng: 2.338720 },
        image: require('./photos-restau/opium-la-cabane.jpg'),
        cardType: 'Français',
        cardTypeIcon: <RiPlaneLine />,
        creneaux: {
            'mercredi soir': ['19h30', '20h'],
            'jeudi midi': ['14h30', '15h'],
        }
    },
    'a-l-angle': {
        badge: 'jusqu\'à -57%',
        title: 'À l\'Angle',
        titleIcon: <IoIosCheckmarkCircle />,
        titleUrl: '/listing-details',
        stitle: '2 Rue Poissonnière',
        scity: 'Paris 3ème',
        szip: '75003',
        coordinates: { lat: 48.868592, lng: 2.347777 },
        image: require('./photos-restau/a-l-angle.jpg'),
        cardType: 'Bar à tapas',
        cardTypeIcon: <RiHotelBedLine />,
        creneaux: {
            'vendredi soir': ['19h30', '20h'],
            'samedi midi': ['14h30', '15h'],
            'dimanche midi': ['13h'],
            'dimanche soir': ['19h'],
        }
    },
}

Object.keys(restaurants).forEach((restaurantId) => (
    restaurants[restaurantId].id = restaurantId
))

export default restaurants