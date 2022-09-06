import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button,Alert, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.square} backgroundColor='red'>
      <Text>Square</Text>
      </View>
      <View style={styles.square} backgroundColor='blue'>
      <Text>Square</Text>
      </View>
      <View style={styles.square} backgroundColor='green'>
      <Text>Square</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    height:'100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
  },
  square: {
    margin: 5,
    height: 90,
    width: 90,
    backgroundColor: '#731459',
    alignItems: 'center',
    justifyContent: 'center',
  },
});