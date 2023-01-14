import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import CustomButton from './CustomButton'

export default function ButtonsContainer ({ text, length }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textTitles}>{text}</Text>
      <View style={styles.buttonsContainer}>
        <CustomButton number='1' />
        <CustomButton number='2' />
        <CustomButton number='3' />
        <CustomButton number='4' />
        <CustomButton number='5' />
        <CustomButton number='+' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    //backgroundColor: 'green',
    //flex: 1,
    width: '90%',
    //height: 20,
    alignSelf: 'center',
    margin: 6
  },

  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    //backgroundColor: 'blue',
    justifyContent: 'space-evenly'
  },
  textTitles: {
    fontWeight: 'bold',
    margin: 10,
    color: 'black'
  }
})
