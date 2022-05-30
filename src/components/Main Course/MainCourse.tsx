import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight, NativeModules} from 'react-native';
import { Cheeses, Potatoes, Poutine, PoutineFactory, PoutinesSpecialties } from './poutine.type';

const MainCourse = () => {
  const SwiftMainCourse = NativeModules.SwiftMainCourse
  const orderMainCourse = () => {
    let chosenPoutine = PoutinesSpecialties.MARC_LABERGE
    console.log('React Native Waitress: The customer chose', chosenPoutine, 'poutine as main course!')
    let poutine: Poutine = PoutineFactory.createPoutine(chosenPoutine);
    SwiftMainCourse.sendMainCourseOrder(JSON.stringify(poutine))
  }
  return (
    <View style={styles.content}>
      <TouchableHighlight style={styles.button} onPress={orderMainCourse}>
        <Text style={styles.text}>Order Main Course</Text>
      </TouchableHighlight>
    </View>
    
    );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
  },
  button: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default MainCourse;
