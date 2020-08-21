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
            'mardi midi': ['14h45', '15h30'],
            'vendredi midi': ['14h45', '15h30'],
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
            'lundi': ['12h - 13h', '13h - 14h', '14h - 15h', '15h - 16h', '16h - 17h', '17h - 18h', '18h - 19h', '19h - 20h', '20h - 21h', '21h - 22h', '22h - 23h', '23h - 0h'],
            'mardi': ['12h - 13h', '13h - 14h', '14h - 15h', '15h - 16h', '16h - 17h', '17h - 18h', '18h - 19h', '19h - 20h', '20h - 21h', '21h - 22h', '22h - 23h', '23h - 0h'],
            'mercredi': ['12h - 13h', '13h - 14h', '14h - 15h', '15h - 16h', '16h - 17h', '17h - 18h', '18h - 19h', '19h - 20h', '20h - 21h', '21h - 22h', '22h - 23h', '23h - 0h'],
            'jeudi': ['12h - 13h', '13h - 14h', '14h - 15h', '15h - 16h', '16h - 17h', '17h - 18h', '18h - 19h', '19h - 20h', '20h - 21h', '21h - 22h', '22h - 23h', '23h - 0h'],
            'vendredi': ['12h - 13h', '13h - 14h', '14h - 15h', '15h - 16h', '16h - 17h', '17h - 18h', '18h - 19h', '19h - 20h', '20h - 21h', '21h - 22h', '22h - 23h', '23h - 0h'],
            'samedi': ['12h - 13h', '13h - 14h', '14h - 15h', '15h - 16h', '16h - 17h', '17h - 18h', '18h - 19h', '19h - 20h', '20h - 21h', '21h - 22h', '22h - 23h', '23h - 0h'],
            'dimanche': ['12h - 13h', '13h - 14h', '14h - 15h', '15h - 16h', '16h - 17h', '17h - 18h', '18h - 19h', '19h - 20h', '20h - 21h', '21h - 22h', '22h - 23h', '23h - 0h'],
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
            'mardi soir': ['19h30 - 20h30', '20h30 - 21h30, 21h30 - 22h30, 22h30 - 23h30'],
            'vendredi soir': ['19h30 - 20h30', '20h30 - 21h30, 21h30 - 22h30, 22h30 - 23h30'],
        }
    },
    'comptoir-43': {
        title: 'Comptoir 43 Bio Ô Top',
        titleIcon: '',
        titleUrl: '/listing-details',
        stitle: '43 Rue de l'Arbre Sec',
        scity: 'Paris 1er',
        szip: '75001',
        coordinates: { lat: 48.861129, lng: 2.342405 },
        image: require('./photos-restau/comptoir-43.jpg'),
        cardType: 'Français',
        cardTypeIcon: <RiPlaneLine />,
        creneaux: {
            'mardi midi': ['12h - 13h', '13h - 14h'],
            'jeudi midi': ['12h - 13h', '13h - 14h'],
        }
    },
    'cafezen': {
        title: 'CaféZen',
        titleIcon: '',
        titleUrl: '/listing-details',
        stitle: '3 Rue Poissonnière',
        scity: 'Paris 2ème',
        szip: '75002',
        coordinates: { lat: 48.868752, lng: 2.347661 },
        image: require('./photos-restau/cafezen.jpg'),
        cardType: 'Français',
        cardTypeIcon: <RiPlaneLine />,
        creneaux: {
            'lundi': ['9h - 10h', '10h - 11h', '11h - 12h', '12h - 13h', '13h - 14h', '14h - 15h', '15h - 16h', '16h - 17h', '17h - 18h', '18h - 19h'],
            'mardi': ['9h - 10h', '10h - 11h', '11h - 12h', '12h - 13h', '13h - 14h', '14h - 15h', '15h - 16h', '16h - 17h', '17h - 18h', '18h - 19h'],
            'mercredi': ['9h - 10h', '10h - 11h', '11h - 12h', '12h - 13h', '13h - 14h', '14h - 15h', '15h - 16h', '16h - 17h', '17h - 18h', '18h - 19h'],
            'jeudi': ['9h - 10h', '10h - 11h', '11h - 12h', '12h - 13h', '13h - 14h', '14h - 15h', '15h - 16h', '16h - 17h', '17h - 18h', '18h - 19h'],
            'vendredi': ['9h - 10h', '10h - 11h', '11h - 12h', '12h - 13h', '13h - 14h', '14h - 15h', '15h - 16h', '16h - 17h', '17h - 18h', '18h - 19h'],
            'samedi': ['10h - 11h', '11h - 12h', '12h - 13h', '13h - 14h', '14h - 15h', '15h - 16h', '16h - 17h', '17h - 18h', '18h - 19h'],
        }
    },
    'seunsep': {
        title: 'Seunsep',
        titleIcon: '',
        titleUrl: '/listing-details',
        stitle: '46 Passage Choiseul',
        scity: 'Paris 2ème',
        szip: '75002',
        coordinates: { lat: 48.868019104003906, lng: 2.335505723953247 },
        image: require('./photos-restau/seunsep.jpg'),
        cardType: 'Thaïlandais',
        cardTypeIcon: <RiPlaneLine />,
        creneaux: {
            'mercredi midi': ['14h - 15h'],
            'jeudi midi': ['14h - 15h'],
        }
    },
    'yuman': {
        title: 'Yuman',
        titleIcon: '',
        titleUrl: '/listing-details',
        stitle: '70 Rue du Chevaleret',
        scity: 'Paris 13ème',
        szip: '75013',
        coordinates: { lat: 48.8306509, lng: 2.3750197 },
        image: require('./photos-restau/yuman.jpg'),
        cardType: 'Français',
        cardTypeIcon: <RiPlaneLine />,
        creneaux: {
            'jeudi midi': ['13h30 - 14h30'],
            'jeudi soir': ['19h - 20h', '20h - 21h', '21h-22h30'],
        }
    },
    'bmk-paris-bamako': {
        title: 'BMK Paris-Bamako',
        titleIcon: '',
        titleUrl: '/listing-details',
        stitle: '14 Rue de la Fidélité',
        scity: 'Paris 10ème',
        szip: '75010',
        coordinates: { lat: 48.874613, lng: 2.3565 },
        image: require('./photos-restau/bmk-paris-bamako.jpg'),
        cardType: 'Africain',
        cardTypeIcon: <RiPlaneLine />,
        creneaux: {
            'mardi midi': ['14h - 16h'],
            'mardi soir': ['22h - 23h'],
            'mercredi soir': ['22h - 23h'],
            'jeudi midi': ['14h - 16h'],
            'jeudi soir': ['22h - 23h'],
        }
    },
    'cafe-cote-rive': {
        title: 'Café Côté Rive',
        titleIcon: '',
        titleUrl: '/listing-details',
        stitle: '284 Boulevard Jean Jaurès',
        scity: 'Boulogne-Billancourt',
        szip: '92100',
        coordinates: { lat: 48.8249769, lng: 2.2455377 },
        image: require('./photos-restau/cafe-cote-rive.jpg'),
        cardType: 'Français',
        cardTypeIcon: <RiPlaneLine />,
        creneaux: {
            'lundi soir': ['19h - 20h', '20h - 21h', "21h - 22h'],
            'mardi soir': ['19h - 20h', '20h - 21h', "21h - 22h'],
            'mercredi soir': ['19h - 20h', '20h - 21h', "21h - 22h'],
            'jeudi soir': ['19h - 20h', '20h - 21h', "21h - 22h'],
            'samedi midi' : ['12h - 13h', '13h - 14h'],
            'samedi soir' : ['19h - 20h', '20h - 21h', "21h - 22h'],
        }
    },
    'ngmodt': {
        title: 'Nos Grands-Mères ont du Talent',
        titleIcon: '',
        titleUrl: '/listing-details',
        stitle: '43 Rue des Petits Carreaux',
        scity: 'Paris 2ème',
        szip: '75002',
        coordinates: { lat: 48.868239, lng: 2.347445 },
        image: require('./photos-restau/ngmodt.jpg'),
        cardType: 'Français',
        cardTypeIcon: <RiPlaneLine />,
        creneaux: {
            'mercredi midi': ['14h30 - 15h30'],
            'vendredi midi': ['14h30 - 15h30'],
        }
    },
}

Object.keys(restaurants).forEach((restaurantId) => (
    restaurants[restaurantId].id = restaurantId
))

export default restaurants
