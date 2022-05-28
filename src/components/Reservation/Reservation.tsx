import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight, NativeModules} from 'react-native';

const Reservation = () => {
  const SwiftReservation = NativeModules.SwiftReservation
  const { restaurantName, phoneNumber } = SwiftReservation.getConstants();
  const makeReservation = () => {
    console.log('React Native: Making a reservation...')
    const numberOfPeople = 1;
    const currentDate = new Date()
    const reservationInOneHour = new Date(new Date(currentDate).setHours(currentDate.getHours() + 1));
    SwiftReservation.makeReservation(numberOfPeople, reservationInOneHour.toDateString());
  }
  return (
    <View style={styles.content}>
      <Text>{restaurantName}  #{phoneNumber}</Text>
      <TouchableHighlight style={styles.button} onPress={makeReservation}>
        <Text style={styles.text}>Make A Reservation</Text>
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

export default Reservation;
