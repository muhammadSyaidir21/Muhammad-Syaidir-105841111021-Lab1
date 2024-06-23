import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
        color: 'red',
        fontStyle:'italic',
      }}>Alfamadi</Text>
      <Text style={{
        fontSize:30,
        fontStyle:'italic',
        textDecorationLine:'underline',
        textShadowColor:'grey',
        color: 'blue'
      }}>Kirring</Text>
      <Text style={{
        fontSize:50,
        fontStyle:'bold',
        color:'Black'
      }}>Talasalapang</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
