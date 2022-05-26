import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>HOW TO COOK</Text>
    <Text style={styles.subtitle}>REACT NATIVE BRIDGE</Text>
    <Text style={styles.subtitle2}>with SWIFT?</Text>
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
});

export default App;
