const restaurants = {
    'ma-cantine-thai': {
        badge: '-20%',
        title: 'Ma Cantine Thaï',
        verifie: true,
        stitle: '56 rue Richer',
        scity: 'Paris 9ème',
        szip: '75009',
        coordinates: { lat: 48.874093, lng: 2.342877 },
        image: "https://ik.imagekit.io/resandco/yuman/a600152e-c4f3-4e0f-be97-21d0974f010a_YUJ77WLDio.jpeg",
        gallerie: [
            "https://ik.imagekit.io/resandco/yuman/80779977_1233724673497400_8911725434580762624_n_JmtETaSyy3.jpg",
            "https://ik.imagekit.io/resandco/yuman/80837925_1310051729182774_1907026536679079936_n_PnmqbXoz2.jpg",
            "https://ik.imagekit.io/resandco/yuman/10c7652d-25af-4c09-ae2a-9c4c346c4e63_mXH9puNNO.jpeg",
            "https://ik.imagekit.io/resandco/yuman/e15037d1-c514-44d3-a409-694c6de4a8cc_m2_jCB9t8.jpeg",
        ],
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
        ],
        description: `
### L’ambiance

Envie d’évasion ? Ma Cantine Thaï est l’endroit idéal ! Proche des Grands Boulevards parisiens, venez découvrir ce restaurant chaleureux, décoré avec goût, alliant modernité et tradition asiatique. Son mobilier brut et sa décoration épurée vous transportera en Asie du Sud-Est et ce, en restant en plein cœur de Paris, pour découvrir de délicieuses saveurs exotiques : Bo Bùn, nems, poulet curry… Ces plats d’ailleurs raviront vos envies de voyages et vous transporteront sur une plage thaïlandaise ou dans un petit village cambodgien. Ouvert depuis mai 2018, cette cantine thaï propose un buffet pour composer vos plats à vos envies. Mais attention, votre menu reste une surprise !

### L’équipe

Au sein de ce restaurant familial, faites la rencontre de Charlotte, Théodore et leur famille, souriants et agréables, ils partageront avec vous les saveurs de la cuisine thaïlandaise, laotienne et vietnamienne issues de leurs racines.

### Et l’anti-gaspi ?

Déjà convaincue de l’importance de la lutte contre le gaspillage alimentaire, Ma Cantine Thaï renforce son engagement en devenant partenaire RES&CO. Une belle façon d’allier convivialité et consommation responsable.
        `,
        infos: [
            "Animaux acceptés",
            "Climatisé",
            "Vegan",
            "Végétarien",
            "Wifi",
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