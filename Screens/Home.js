import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  RefreshControl
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import HouseCard from '../Components/HouseCard'
import Ionicons from '@expo/vector-icons/Ionicons'
import store from '../Redux/store'

//const data = require('../data.json')
//const data = require('../dataParsed3.json')

export default function App () {
  const navigation = useNavigation()
  const data = useSelector(state => state.data)
  const randCity = useSelector(state => state.location)
  console.log('randomCity', randCity)
  //console.log("DATA",data)
  const values = Object.values(data)

  const cities = []
  //let randCity = ''
  let nearHousesToShow = []
  //values.map(value => cities.push(value.city))

  values.map(value => cities.push(value.city))
  //console.log('CITIES', cities)
  console.log('length', randCity.lenght)
  nearHousesToShow = values.filter(house => house.address === randCity)

  //console.log('nearHousesToShow', nearHousesToShow)

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity
           onPress={()=>store.dispatch({
         type: 'DETERMINE_LOCATION'
            
          })}
          
        >
          <View style={styles.currentLocation}>
            <View style={styles.iconContainer}>
              <Ionicons
                style={styles.icon}
                name='location' //Nombre que sale en la pagina
                size={30}
                color='black'
              />
            </View>
            <View style={styles.locationTextContainer}>
              <Text style={styles.textLocation}>Current location</Text>
              <Text style={styles.textCurrentCity}>{randCity}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.locationText}>Near to your location...</Text>
        </View>
        <View style={styles.container}>
          {nearHousesToShow.map(info => {
            return (
             
                <HouseCard
                  key={info.id}
                  image={info.image}
                  name={info.name}
                  address={info.address}
                  bedrooms={info.bedrooms}
                  bathrooms={info.bathrooms}
                  size={info.size}
                  cost={info.price}
                  rating={info.rating}
                />
            
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#E5E5E5'
    //backgroundColor: 'green'
  },
  iconContainer: {
    backgroundColor: '#00B074',
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 100
  },
  icon: {
    alignSelf: 'center'
  },
  locationTextContainer: {
    display: 'flex',
    //backgroundColor: 'blue',
    marginLeft: 20
  },
  textLocation: {
    color: 'black',
    fontSize: 16
  },
  textCurrentCity: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold'
  },
  currentLocation: {
    backgroundColor: 'white',
    alignSelf: 'center',
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 10
  },
  locationText: {
    color: 'grey',
    fontSize: 18,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: -15
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
    // justifyContent: 'center'
  },
  searchContainer: {
    display: 'flex',
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  scrollView: {
    //backgroundColor:'yellow',
  }
})
