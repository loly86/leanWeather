import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hello!</Text>
      <Text>hello!</Text>
      <StatusBar style="auto" />
      <View style={styles.yellowView}/>
      
      <View style={styles.blueView}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  yellowView :{
    flex: 2,
    backgroundColor: "yellow"

  },
  blueView :{
    flex: 2,
    backgroundColor: "blue"

  },
  text: {
    color:"blue"

  },
});
