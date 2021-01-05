const axios = require("axios");
const restaurants = require("../src/restaurants.js");

// credentials required to be autorized to use the api (get the token)
let email = "mvp.projet.resandco@gmail.com";
let password = "";

let token = "";

// keep only the city name (& remove the city district)
function getOnlyCityName(city) {
  if (city.includes("Paris")) return "Paris";
  if (city.includes("Lyon")) return "Lyon";
  if (city.includes("Marseille")) return "Marseille";
}

function getRestaurantAllergenes(arrayOfAllergenes) {
  let allergenes = {
    milk: arrayOfAllergenes.some((e) => /lait/i.test(e)),
    eggs: arrayOfAllergenes.some((e) => /oeuf/i.test(e)),
    peanuts: arrayOfAllergenes.some((e) => /arachides/i.test(e)),
    soy: arrayOfAllergenes.some((e) => /soja/i.test(e)),
    nuts: arrayOfAllergenes.some((e) => /à coque/i.test(e)),
    sesameSeeds: arrayOfAllergenes.some((e) => /sésame/i.test(e)),
    shellfish: arrayOfAllergenes.some((e) => /crustacé/i.test(e)),
    fish: arrayOfAllergenes.some((e) => /poisson/i.test(e)),
    mollusk: arrayOfAllergenes.some((e) => /mollusque/i.test(e)),
    gluten: arrayOfAllergenes.some((e) => /contenant du gluten/i.test(e)),
    mustard: arrayOfAllergenes.some((e) => /moutarde/i.test(e)),
    sulphites: arrayOfAllergenes.some((e) => /sulfites/i.test(e)),
  };
  return allergenes;
}

function getRestaurantInfos(arrayOfInfos) {
  let infos = {
    hasWifi: arrayOfInfos.some((e) => /wifi/i.test(e)),
    hasVegetarianOption: arrayOfInfos.some((e) => /végétarien/i.test(e)),
    // isVerified
    hasVeganOption: arrayOfInfos.some((e) => /option végane/i.test(e)),
    isVegan: arrayOfInfos.some((e) => /100% vegan/i.test(e)),
    hasGlutenFreeOption: arrayOfInfos.some((e) =>
      /option sans gluten/i.test(e)
    ),
    isPetAllowed: arrayOfInfos.some((e) => /animaux/i.test(e)),
    hasAirConditioned: arrayOfInfos.some((e) => /climatisé/i.test(e)),
    hasTerrace: arrayOfInfos.some((e) => /terrasse/i.test(e)),
    hasOrganicProducts: arrayOfInfos.some((e) => /bio/i.test(e)),
    hasLocalFruitsAndVegetables: arrayOfInfos.some((e) => /locaux/i.test(e)),
    doesCompostWaste: arrayOfInfos.some((e) => /compost/i.test(e)),
    doesTakeaway: arrayOfInfos.some((e) => /à emporter/i.test(e)),
    isDisabledAccessible: arrayOfInfos.some((e) => /handicapé/i.test(e)),
    doesEmploySenior: arrayOfInfos.some((e) => /senior/i.test(e)),
    isKidsFriendly: arrayOfInfos.some((e) => /kids/i.test(e)),
  };
  return infos;
}

function setToken() {
  return axios
    .post(
      "http://localhost:1337/admin/login",
      { email, password },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      token = res.data.data.token;
    })
    .catch((err) => {
      console.log(err);
    });
}

async function postRestaurants() {
  await setToken();
  Object.values(restaurants).forEach((restaurantSlug) =>
    axios
      .post(
        "http://localhost:1337/restaurants/",
        {
          name: restaurantSlug.title,
          description: restaurantSlug.description,
          address: {
            coordsLat: restaurantSlug.coordinates.lat,
            coordsLong: restaurantSlug.coordinates.lng,
            postCode: restaurantSlug.szip,
            street: restaurantSlug.stitle,
            city: getOnlyCityName(restaurantSlug.scity),
          },
          openingTimes: [], // this field is required
          infos: restaurantSlug.infos
            ? getRestaurantInfos(restaurantSlug.infos)
            : {},
          allergenes: restaurantSlug.allergenes
            ? getRestaurantAllergenes(restaurantSlug.allergenes)
            : {},
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        console.log("data has been imported successfully");
      })
      .catch((err) => {
        console.log(err);
      })
  );
}

postRestaurants();

// get the list of all infos
function getAllRestaurantsInfos(restaurants) {
  let restaurantsInfos = [];
  Object.values(restaurants).forEach((restaurantSlug) =>
    restaurantsInfos.push(...restaurantSlug.infos)
  );
  let listInfos = [...new Set(restaurantsInfos)];
  console.log(listInfos);
}

getAllRestaurantsInfos(restaurants);

// get the list of all allergenes
function getAllRestaurantsAllergenes(restaurants) {
  let restaurantsAllergenes = [];
  Object.values(restaurants).forEach((restaurantSlug) => {
    if (restaurantSlug.allergenes !== undefined) {
      restaurantsAllergenes.push(...restaurantSlug.allergenes);
    }
  });
  let listAllergenes = [...new Set(restaurantsAllergenes)];
  console.log(listAllergenes);
}

getAllRestaurantsAllergenes(restaurants);
