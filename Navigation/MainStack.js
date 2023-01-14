import  {NavigationContainer} from '@react-navigation/native'
import  {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider } from 'react-redux'
import store from '../Redux/store'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from '../Screens/Home'
import LikedHouses from '../Screens/LikedHouses'

const Tab = createBottomTabNavigator()

export default function MainStack () {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={'Near you'}
          screenOptions={({ route }) => ({
            activeTintColor: '#00B074',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 60, height: 1000 },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName
              let routeName = route.name
              if (routeName === 'Near you') {
                iconName = focused ? 'home' : 'home-outline'
              } else if (routeName === 'Liked') {
                iconName = focused ? 'heart' : 'heart-outline'
              }
              return <Ionicons name={iconName} size={size} color={color} />
            }
          })}
        >
          <Tab.Screen name='Near you' component={Home} />
          <Tab.Screen name='Liked' component={LikedHouses} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
