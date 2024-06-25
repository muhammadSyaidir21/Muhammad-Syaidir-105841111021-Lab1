import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import ButtonComponent from './component/button/button';
const App = () => {
  return (
    <View style={{
        flex:1,
        backgroundColor:'#000',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <Image
      source={require('./assets/krepes.jpg')}
      style={{
        width: '100%',
        height: '100',
        position: 'absolute',
        top: 10,
        opacity: 0.5,
        zIndex: -1,
      }}
      resizeMode="cover"
      />
      <ScrollView contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
      <Image
       source={require('./assets/logo.png')}
        style={{
        width: 130,
        height: 130,
        marginTop: 5,
        opacity: 1,
        zIndex: 1,
        borderRadius: 25
        }}
        resizeMode="cover"
        />
        <Text style={{
            fontSize: 20,
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: 'white',
            position: 'absolute',
            top: 100,
            marginTop: 130,
        }}>SYKREPES</Text>
        <Text style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            marginTop: 20,
            top: 20 
        }}>Krepes gurih dan manis</Text>
        <Text style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            marginTop: 20,
        }}>Pilihan krepes terbaik anda</Text>

        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 40
        }}>
            <ButtonComponent title= "Sign In"  color="green"/>
            <ButtonComponent title= "Sign Up"  color="tomato"/>
        </View>
      </ScrollView>
    </View>
    
);
} 

export default App;