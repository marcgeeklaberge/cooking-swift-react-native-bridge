import React from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MainCourse from './Main Course/MainCourse';
import Reservation from './Reservation/Reservation';
import Starters from './Starters/Starters';

const App = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>HOW TO COOK</Text>
    <Text style={styles.subtitle}>REACT NATIVE BRIDGE</Text>
    <Text style={styles.subtitle2}>with SWIFT?</Text>
    {Platform.OS === 'ios' ?
    <View style={styles.supported}>
      <Reservation />
      <Starters />
      <MainCourse />
    </View>
    : <Text style={styles.notSupported}>This tutorial is iOS focused...</Text> }
    
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    textAlign: 'left',
    fontSize: 35,
    fontWeight: 'bold',
  },
  subtitle: {
    paddingHorizontal: 8,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle2: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    textAlign: 'right',
    fontSize: 45,
    fontWeight: 'bold',
  },
  notSupported: {
    paddingVertical: 50,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  supported: {
    paddingVertical: 20,
  }
});

export default App;
