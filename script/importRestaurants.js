const axios = require("axios");
const restaurants = require("./src/restaurants.js");

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
