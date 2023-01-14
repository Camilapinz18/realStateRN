import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider } from 'react-redux'
import store from '../Redux/store'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from '../Screens/Home'
import Details from '../Screens/Details'
import LikedHouses from '../Screens/LikedHouses'
import Search from '../Screens/Search'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function MainStack () {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={'Near you'}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName
              let routeName = route.name
              if (routeName === 'Near you') {
                iconName = focused ? 'home' : 'home-outline'
              } else if (routeName === 'Liked') {
                iconName = focused ? 'heart' : 'heart-outline'
              } else if (routeName === 'Search') {
                iconName = focused ? 'search' : 'search-outline'
              }

              return <Ionicons name={iconName} size={size} color={color} />
            }
          })}
          tabBarOptions={{
            activeTintColor: '#00B074',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 60, height: 1000 }
          }}
        >
          <Tab.Screen name='Search' component={Search} />
          <Tab.Screen name='Near you' component={Home} />
          <Tab.Screen name='Liked' component={LikedHouses} />
        </Tab.Navigator>
      </NavigationContainer>
      {/* <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </Provider>
  )
}
