import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity
} from 'react-native'

export default function CustomButton ({text}) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00B074',
    width: 100,
    height:40,
    borderRadius:10,
    display:'flex',
    justifyContent:'center',
    marginTop:5
  },
  text:{
    color:'white',
   
    textAlign:'center',
    fontSize:16
  }
})
