import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight, NativeModules, NativeEventEmitter} from 'react-native';

const Dessert = () => {
  const SwiftDessert = NativeModules.SwiftDessert
  const EventEmitter = new NativeEventEmitter(SwiftDessert)

  var swiftCookIsStillThere: boolean = true;
  var swiftCookLastMessage: string = ""
  var dessertCount: number = 0;

  const orderDessert = async () => {
    EventEmitter.addListener('swift_cook_has_finished', (message) => {
        swiftCookIsStillThere = false
        swiftCookLastMessage = message
        EventEmitter.removeAllListeners('swift_cook_has_finished')
    });
    const hisFirstDessert = dessertCount < 1
    if (hisFirstDessert) {
        console.log('React Native Waitress: The Client wants something special for dessert!');
    } else {
        console.log('React Native Waitress: The Client wants another dessert...');
    }
    try {
        const dessert = await SwiftDessert.sendDessertOrder(hisFirstDessert);
        console.log("Swift Cook:", dessert)
    } catch (error: any) {
        console.log("Swift Cook:", error.message)
    } finally {
        dessertCount += 1
    }
  }

  const giveFeedback = async () => {
    if (swiftCookIsStillThere) {
        const isPositiveFeedback: boolean = true
        const clientMessage = "React Client It was a very satisfying meal."
        try {
            const swiftCookResponse = await SwiftDessert.giveFeedback(isPositiveFeedback, clientMessage);
            console.log("Swift Cook:", swiftCookResponse)
        } catch (error: any) {
            console.log("Swift Cook:", error.message)
        }
    } else {
        console.log("React Native Waitress: Swift Cook already left, but he said:", swiftCookLastMessage)
    }
  }

  return (
    <View style={styles.content}>
      <TouchableHighlight style={styles.button} onPress={orderDessert}>
        <Text style={styles.text}>Order Dessert</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={giveFeedback}>
        <Text style={styles.text}>Compliment Swift Cook</Text>
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

export default Dessert;
