/* eslint-disable max-len */
import {
  addLikeReducer,
  getRandomInt,
  generateInitialState,
  generateCitiesArray,
  generateRandomCity,
} from '../Redux/reducer';
const data = require('../dataParsed3.json');
/** *************************************************************** */
describe('Initial State: generateInitialState()', () => {
  test('Returns an array with the same length as the json document source', () => {
    const stateGenerated = generateInitialState(data);

    expect(stateGenerated).toHaveLength(data.length);
  });

  test('Returns an array with objects whose have the proposed format ', () => {
    const stateGenerated = generateInitialState(data);
    const houseObjectFormat = {
      address: 'Brooklyn',
      bathrooms: 2,
      bedrooms: 4,
      city: 'Brooklyn',
      id: 'M3490537629',
      image:
        'https://ap.rdcpix.com/af3c359c06b9e93c0be4123a28f2a399l-m2482469082x.jpg',
      liked: false,
      name: '1869 Shore Pkwy',
      price: 1099000,
      rating: stateGenerated[1].rating,
      size: 2240,
    };
    expect(stateGenerated[1]).toMatchObject(houseObjectFormat);
  });
});
/** *************************************************************** */
describe('Initial State: "getRandomInt" ', () => {
  test('Returns a value with "number" type', () => {
    const number = getRandomInt(3.6, 4);

    expect(typeof number).toBe('number');
  });
  test('Returns a number between 3.6 and 5', () => {
    const number = getRandomInt(3.6, 4);

    expect(number).toBeGreaterThanOrEqual(3.6);
    expect(number).toBeLessThan(5.1);
  });
});
/** *************************************************************** */
describe('addLikeReducer: "ADD_LIKED_HOUSE" ', () => {
  test('Returns an array with the same length as the initial array', () => {
    const action = {
      type: 'ADD_LIKED_HOUSE',
      payload: {
        payload: {name: '1869 Shore Pkwy'},
      },
    };
    const state = generateInitialState(data);
    const newState = addLikeReducer(state, action);
    expect(newState).toHaveLength(state.length);
  });
  test('It olny modifies the liked parameter to true of the required object', () => {
    const name = '1869 Shore Pkwy';
    const state = generateInitialState(data);
    const action = {
      type: 'ADD_LIKED_HOUSE',
      payload: {name},
    };
    const newState = addLikeReducer(state, action);
    expect(newState[1]).toMatchObject({
      address: 'Brooklyn',
      bathrooms: 2,
      bedrooms: 4,
      city: 'Brooklyn',
      id: 'M3490537629',
      image:
        'https://ap.rdcpix.com/af3c359c06b9e93c0be4123a28f2a399l-m2482469082x.jpg',
      liked: true,
      name: '1869 Shore Pkwy',
      price: 1099000,
      rating: newState[1].rating,
      size: 2240,
    });
  });
});
/** *************************************************************** */
describe('addLikeReducer: "QUIT_LIKED_HOUSE" ', () => {
  test('Returns an array with the same length as the initial array', () => {
    const action = {
      type: 'ADD_LIKED_HOUSE',
      payload: {
        payload: {name: '1869 Shore Pkwy'},
      },
    };

    const state = generateInitialState(data);
    const newState = addLikeReducer(state, action);
    expect(newState).toHaveLength(state.length);
  });
  test('It olny modifies the liked parameter to false of the required object', () => {
    const name = '1869 Shore Pkwy';
    const state = generateInitialState(data);
    const actionToGenerateALike = {
      type: 'ADD_LIKED_HOUSE',
      payload: {name},
    };

    let newState = addLikeReducer(state, actionToGenerateALike);

    const actionToGenerateAnUnlike = {
      type: 'QUIT_LIKED_HOUSE',
      payload: {name},
    };

    newState = addLikeReducer(state, actionToGenerateAnUnlike);

    expect(newState[1]).toMatchObject({
      address: 'Brooklyn',
      bathrooms: 2,
      bedrooms: 4,
      city: 'Brooklyn',
      id: 'M3490537629',
      image:
        'https://ap.rdcpix.com/af3c359c06b9e93c0be4123a28f2a399l-m2482469082x.jpg',
      liked: false,
      name: '1869 Shore Pkwy',
      price: 1099000,
      rating: newState[1].rating,
      size: 2240,
    });
    // console.log('NEWSTATE', newState);
  });
});
/** *************************************************************** */
describe('determineLocationReducer: "generateCitiesArray" ', () => {
  test('Returns an array with no values repeated', () => {
    const state = generateInitialState(data);
    const citiesArray = generateCitiesArray(state);

    const isArrayUnique = (arr) =>
      Array.isArray(citiesArray) && new Set(citiesArray).size === arr.length; // add function to check that array is unique.
    expect(isArrayUnique(citiesArray)).toBeTruthy();
    // expect(citiesArray).toHaveLength(36)
  });

  test('Returns an array with 36 values (the total of the cities in the databse)', () => {
    const state = generateInitialState(data);
    const citiesArray = generateCitiesArray(state);

    expect(citiesArray).toHaveLength(36);
  });
});
/** *************************************************************** */
describe('determineLocationReducer: "generateCitiesArray" ', () => {
  test('Returns an array with no values repeated', () => {
    const state = generateInitialState(data);
    const citiesArray = generateCitiesArray(state);

    const isArrayUnique = (arr) =>
      Array.isArray(citiesArray) && new Set(citiesArray).size === arr.length;
    expect(isArrayUnique(citiesArray)).toBeTruthy();
  });

  test('Returns an array with 36 values (the total of the cities in the database)', () => {
    const state = generateInitialState(data);
    const citiesArray = generateCitiesArray(state);

    expect(citiesArray).toHaveLength(36);
  });

  test('The array generated by generateCitiesArray() contains a city value', () => {
    const state = generateInitialState(data);
    const citiesArray = generateCitiesArray(state);
    const city = 'Staten Island';
    const city2 = 'Ridgewood';
    expect(citiesArray).toContainEqual(city);
    expect(citiesArray).toContainEqual(city2);
  });

  test('The array generated by is sorted alphabetically', () => {
    const state = generateInitialState(data);
    const citiesArray = generateCitiesArray(state);
    expect(citiesArray).toStrictEqual([...citiesArray].sort());
  });
});
/** *************************************************************** */
describe('determineLocationReducer: "generateRandomCity" ', () => {
  test('Returns a value that is contained in the array generated by generateCitiesArray()', () => {
    const state = generateInitialState(data);
    const citiesArray = generateCitiesArray(state);
    const randomCity = generateRandomCity(citiesArray);
    expect(citiesArray).toContainEqual(randomCity);
  });
});
/** *************************************************************** */

