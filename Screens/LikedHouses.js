import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import HouseCard from '../Components/HouseCard'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function LikedHouses () {
  const data = useSelector(state => state.data)
  const values = Object.values(data)
  const houseRender = []

  values.map(value =>
    value.liked
      ? houseRender.push(data.find(house => house.name === value.name))
      : ''
  )
 console.log("HOUSERENDER",houseRender)
  const isAny = houseRender.length
  
  return (
    <SafeAreaView style={styles.mainContainer}>
   
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {isAny === 0 ? (
            <View style={styles.alert}>
              <Text style={styles.textAlert}>
                You don't have any favorite houses yet!
              </Text>
              <Ionicons
                name='sad-outline'
                style={styles.icon}
                size={30}
                color='#CACACA'
              />
            </View>
          ) : (
            ''
          )}
          {houseRender.map(info => {
            return (
              <HouseCard
                key={info.name}
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
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
    // justifyContent: 'center'
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  textAlert: {
    color: 'grey',
    fontSize: 16,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: 200,
    textAlign: 'center'
  },
  alert: {
    backgroundColor: 'white',
    borderRadius: 10
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 15
  }
})
