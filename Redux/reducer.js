/* eslint-disable require-jsdoc */
const data = require('../dataParsed3.json');

export const actionAddLike = {
  type: 'ADD_LIKED_HOUSE',
};

export const actionQuitLike = {
  type: 'QUIT_LIKED_HOUSE',
};

export const actionDetermineLocation = {
  type: 'DETERMINE_LOCATION',
};

// Generate randon Ratings:
export const getRandomInt = (min, max) => {
  return Number((Math.random() * (max - min + 1) + min).toFixed(1));
};

export const generateInitialState = (data) => {
  const initialState = [];
  data.map((info) =>
    initialState.push({
      id: info.property_id,
      name: info.address.line,
      city: info.address.city,
      address: info.address.city,
      bedrooms: info.beds,
      bathrooms: info.baths,
      size: info.building_size?.size,
      price: info.price,
      image: info.image,
      rating: getRandomInt(3.6, 4),
      liked: false,
    }),
  );
  return initialState;
};

let modState = generateInitialState(data);
modState = [...modState];

export const addLikeReducer = (state = modState, action) => {
  switch (action.type) {
    case 'ADD_LIKED_HOUSE':
      modState = modState.map((house) => {
        // console.log('name', action.payload)
        if (house.name === action.payload.name) {
          return {
            ...house,
            liked: true,
          };
        }
        return house;
      });

      return modState;

    case 'QUIT_LIKED_HOUSE':
      modState = modState.map((house) => {
        if (house.name === action.payload.name) {
          return {
            ...house,
            liked: false,
          };
        }
        return house;
      });

      return modState;

    default:
      return modState;
  }
};

let randCity = '';
const cities = [];
let citiesToShow = [];
export const generateCitiesArray = (modState) => {
  modState.map((value) => cities.push(value.city));
  citiesToShow = [...new Set(cities)];
  citiesToShow.sort();
  return citiesToShow;
};

export const generateRandomCity = (citiesToShow) => {
  randCity = citiesToShow[Math.round(Math.random() * citiesToShow.length)];
  return randCity;
};

generateCitiesArray(modState);
generateRandomCity(citiesToShow);

export const determineLocationReducer = (state = randCity, action) => {
  switch (action.type) {
    case 'DETERMINE_LOCATION':
      const newRandCity =
        citiesToShow[Math.round(Math.random() * citiesToShow.length)];
      randCity = newRandCity;

      return newRandCity;

    default:
      return randCity;
  }
};
