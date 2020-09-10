const restaurants = {
    'ma-cantine-thai': {
        badge: '-20%',
        title: 'Ma Cantine Thaï',
        verifie: true,
        stitle: '56 rue Richer',
        scity: 'Paris 9ème',
        szip: '75009',
        coordinates: { lat: 48.874093, lng: 2.342877 },
        image: require('./photos-restau/ma-cantine-thai.jpg'),
        tags: ['Asiatique'],
        creneaux: {
            'lundi soir': ['19h30', '20h'],
            'mardi midi': ['14h30', '15h'],
        },
        menus: [
            {
                menu: "Entrée + plat + dessert",
                prix: 14
            },
            {
                menu: "Entrée + plat",
                prix: 12
            },
            {
                menu: "Entrée + plat + dessert - Végétarien",
                prix: 13.5
            },
            {
                menu: "Entrée + plat - Végétarien",
                prix: 11.5
            }
        ]
    },
    'opium-la-cabane': {
        title: 'Opium, La Cabane',
        stitle: '44 Rue du Dauphine',
        scity: 'Paris 6ème',
        szip: '75006',
        coordinates: { lat: 48.854150, lng: 2.338720 },
        image: require('./photos-restau/opium-la-cabane.jpg'),
        tags: ['Français', 'Dejeuner'],
        creneaux: {
            'mercredi soir': ['19h30', '20h'],
            'jeudi midi': ['14h30', '15h'],
        }
    },
    'a-l-angle': {
        badge: 'jusqu\'à -57%',
        title: 'À l\'Angle',
        verifie: true,
        stitle: '2 Rue Poissonnière',
        scity: 'Paris 3ème',
        szip: '75003',
        coordinates: { lat: 48.868592, lng: 2.347777 },
        image: require('./photos-restau/a-l-angle.jpg'),
        tags: ['Bar à tapas'],
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