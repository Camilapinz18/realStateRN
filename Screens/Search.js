import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Modal,
  Pressable,
  TouchableOpacity
} from 'react-native'
import { useState } from 'react'
import { useSelector } from 'react-redux'
//import TextInputMask from 'react-native-text-input-mask';
import store from '../Redux/store'
import HouseCard from '../Components/HouseCard'

export default function Search () {
  const [searchModalVisible, setsearchModalVisible] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [counterRating, setCounterRating] = useState(0)
  const [counterBedrooms, setCounterBedrooms] = useState(0)
  const [counterBathrooms, setCounterBathrooms] = useState(0)
  const [priceMin, setPriceMin] = useState(0)
  const [priceMax, setPriceMax] = useState(0)
  const [sizeMin, setSizeMin] = useState(0)
  const [sizeMax, setSizeMax] = useState(0)
  const [selectedCity, setSelectedCity] = useState('')

  const data = useSelector(state => state.data)
  const results = useSelector(state => state.search)
  //results.map(r=>console.log("RRR",r))
  console.log('RESULTSA', results)
  const values = Object.values(data)
  //console.log('values', values)
  //console.log(priceMin, priceMax)
  //Extaer solo ciudades:
  const cities = []

  values.map(value => cities.push(value.city))
  let citiesToShow = [...new Set(cities)]

  citiesToShow.sort()
  //console.log('YYY', citiesToShow)

  //console.log('cities', cities)

  function sendValues () {
    console.log('pricemaxout', priceMax)
    if (selectedCity === '') {
      alert('You must select a location')
    } else if (priceMax === 0||priceMax === undefined||priceMax === '') {
      alert('The maximum price cant be zero')
    } else if (sizeMax === 0||sizeMax === undefined||sizeMax === '') {
      alert('The maximum size cant be zero')
    } else {
      setsearchModalVisible(true)
      store.dispatch({
        type: 'SEARCH_HOUSE',
        payload: {
          address: selectedCity,
          priceMin: priceMin,
          priceMax: priceMax,
          sizeMin: sizeMin,
          sizeMax: sizeMax,
          bedrooms: counterBedrooms,
          bathrooms: counterBathrooms,
          rating: counterRating
        }
      })
    }

    // store.dispatch({
    //   type: 'SEARCH_HOUSE',
    //   payload: {
    //     address: selectedCity,
    //     priceMin: priceMin,
    //     priceMax: priceMax,
    //     sizeMin: sizeMin,
    //     sizeMax: sizeMax,
    //     bedrooms: counterBedrooms,
    //     bathrooms: counterBathrooms,
    //     rating: counterRating
    //   }
    // })

    //console.log('SEARCHOBJECT', searchObject)
  }

  const searchData = () => {
    // data.filter()
    searchModalVisible(true)
  }
  //console.log('CITIES', cities)
  //setModalVisible(true)

  const useCounterRating = bools => {
    if (bools === true) {
      counterRating === 5
        ? setCounterRating(5)
        : setCounterRating(current => current + 1)
      console.log('counter', counterRating)
    } else if (bools === false) {
      counterRating === 0
        ? setCounterRating(0)
        : setCounterRating(current => current - 1)
      console.log('counter', counterRating)
    }
  }

  const useCounterBedrooms = bools => {
    if (bools === true) {
      counterBedrooms === 10
        ? setCounterBedrooms(10)
        : setCounterBedrooms(current => current + 1)
      console.log('counter', counterBedrooms)
    } else if (bools === false) {
      counterBedrooms === 0
        ? setCounterBedrooms(0)
        : setCounterBedrooms(current => current - 1)
      console.log('counter', counterBedrooms)
    }
  }

  const useCounterBathrooms = bools => {
    if (bools === true) {
      counterBathrooms === 10
        ? setCounterBathrooms(10)
        : setCounterBathrooms(current => current + 1)
      console.log('counter', counterBathrooms)
    } else if (bools === false) {
      counterBathrooms === 0
        ? setCounterBathrooms(0)
        : setCounterBathrooms(current => current - 1)
      console.log('counter', counterBathrooms)
    }
  }

  return (
    <SafeAreaView>
      <Modal
        animationType='slide'
        transparent={false}
        visible={searchModalVisible}
        onRequestClose={() => {
          setsearchModalVisible(!searchModalVisible)
        }}
      >
        <View style={styles.resultsContainer}>
          <ScrollView>
            {results.map(result => {
              return (
                <HouseCard
                  key={result.name}
                  image={result.image}
                  name={result.name}
                  address={result.address}
                  bedrooms={result.bedrooms}
                  bathrooms={result.bathrooms}
                  size={result.size}
                  cost={result.price}
                  rating={result.rating}
                />
              )
            })}
          </ScrollView>
        </View>
        <Text>MODALL</Text>
      </Modal>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.menuContainer}>
            <Text style={styles.titleText}>Location</Text>
            <Modal
              animationType='slide'
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible)
              }}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                  <ScrollView>
                    {citiesToShow.map(city => (
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPressIn={() => setSelectedCity(city)}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.textStyle}>{city}</Text>
                      </Pressable>
                    ))}
                  </ScrollView>
                </View>
              </View>
            </Modal>
            <TouchableOpacity
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}
            >
              {selectedCity === '' ? (
                <Text style={styles.selectLocation}>Select location</Text>
              ) : (
                <Text style={styles.selectLocation}>{selectedCity}</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.placeContainer}>
            {/* <TextInput
            style={styles.input}
            placeholder='Where do you want your house?'
          /> */}
          </View>
          <Text style={styles.titleText}>Price</Text>
          <View style={styles.areaContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>From</Text>
              <TextInput
                style={styles.textInput}
                placeholder='$ 0'
                keyboardType='number-pad'
                onChangeText={value => setPriceMin(value)}
              ></TextInput>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>To</Text>
              <TextInput
                placeholder='$ 0'
                style={styles.textInput}
                keyboardType='number-pad'
                onChangeText={value => setPriceMax(value)}
              ></TextInput>
            </View>
          </View>
          <Text style={styles.titleText}>Area</Text>
          <View style={styles.areaContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>From</Text>
              <TextInput
                style={styles.textInput}
                placeholder='0'
                keyboardType='number-pad'
              ></TextInput>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>To</Text>
              <TextInput
                placeholder='0'
                keyboardType='number-pad'
                style={styles.textInput}
                onChangeText={value => setSizeMax(value)}
              ></TextInput>
            </View>
          </View>

          <View style={styles.roomsContainer}>
            <View style={styles.bedroomsContainer}>
              <View>
                <Text>Bedrooms</Text>
              </View>
              <View style={styles.addButtons}>
                <TouchableOpacity
                  style={styles.addButtonsPress}
                  onPress={() => useCounterBedrooms(false)}
                >
                  <Text style={styles.addButtonsControls}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButtonsPress}>
                  <Text>{counterBedrooms}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.addButtonsPress}
                  onPress={() => useCounterBedrooms(true)}
                >
                  <Text style={styles.addButtonsControls}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bedroomsContainer}>
              <Text>Bathrooms</Text>
              <View style={styles.addButtons}>
                <TouchableOpacity
                  style={styles.addButtonsPress}
                  onPress={() => useCounterBathrooms(false)}
                >
                  <Text style={styles.addButtonsControls}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButtonsPress}>
                  <Text>{counterBathrooms}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.addButtonsPress}
                  onPress={() => useCounterBathrooms(true)}
                >
                  <Text style={styles.addButtonsControls}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bedroomsContainer}>
              <View>
                <Text>Rating</Text>
              </View>

              <View style={styles.addButtons}>
                <TouchableOpacity
                  style={styles.addButtonsPress}
                  onPress={() => useCounterRating(false)}
                >
                  <Text style={styles.addButtonsControls}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButtonsPress}>
                  <Text>{counterRating}+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.addButtonsPress}
                  onPress={() => useCounterRating(true)}
                >
                  <Text style={styles.addButtonsControls}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            // style={[styles.button, styles.buttonClose]}
            // onPress={() => setsearchModalVisible(!searchModalVisible)}
            onPress={() => sendValues()}
            style={styles.buttonSearch}
          >
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  searchResultsContainer: {
    backgroundColor: 'red',
    flex: 1
  },
  resultsContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#E5E5E5'
  },
  mainContainer: {
    display: 'flex',
    backgroundColor: 'white',
    //justifyContent:'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    marginTop: 0,
    borderWidth: 1,
    borderColor: '#CACACA'
  },
  menuContainer: {
    // backgroundColor: 'red',
    display: 'flex',

    borderRadius: 10,
    marginTop: 35,
    width: '80%'
    //width: '87%',
  },
  selectLocation: {
    //backgroundColor: 'blue',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CACACA',
    padding: 8
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '70%',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    display: 'flex',
    borderWidth: 1,
    borderColor: '#CACACA',
    marginTop: 130
  },
  textStyle: {
    color: 'black',
    margin: 10
  },
  modalView: {
    //backgroundColor: 'yellow',
    padding: 5
  },
  placeContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    //height: 100,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
    //backgroundColor: 'red'
  },
  input: {
    // backgroundColor: 'white',
    width: '87%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CACACA',
    padding: 8
  },
  buttonOpen: {
    marginTop: 20
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  inputPriceContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
    //backgroundColor: 'red',
  },
  priceTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%'
  },
  inputPrice: {
    width: 130,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CACACA',
    padding: 8
  },
  areaContainer: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    width: '80%',
    justifyContent: 'center'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    //backgroundColor: 'blue',
    //width: '80%',
    margin: 6
  },
  textInput: {
    //backgroundColor:'green',

    padding: 5,
    width: 130,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CACACA',
    padding: 8
  },
  inputText: {
    fontSize: 13,
    marginBottom: 10
  },
  titleText: {
    // backgroundColor:'blue',
    width: '80%',
    fontWeight: 'bold',
    fontSize: 16
    //marginBottom:10
  },
  roomsContainer: {
    display: 'flex',
    flexDirection: 'column',
    //backgroundColor: 'green',
    width: '80%'
    //justifyContent:'center',
    // alignContent:'space-evenly',
  },
  bedroomsContainer: {
    display: 'flex',
    flexDirection: 'row',
    //backgroundColor: 'red',
    justifyContent: 'space-between',
    marginTop: 10
  },
  addButtons: {
    display: 'flex',
    flexDirection: 'row',
    //backgroundColor: 'gray',
    //alignSelf:'flex-end',
    borderWidth: 1,
    borderColor: '#CACACA',
    borderRadius: 5,
    width: 110,
    justifyContent: 'space-around',
    padding: 0
  },
  addButtonsPress: {
    //backgroundColor: 'green',
    //flexGrow:1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 30,
    width: 30
    //
  },
  addButtonsControls: {
    fontWeight: 'bold'
  },
  buttonSearch: {
    backgroundColor: '#00B074',
    padding: 10,
    marginTop: 25,
    borderRadius: 10,
    width: 100,
    marginBottom: 25
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
