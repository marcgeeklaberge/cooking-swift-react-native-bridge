import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight, NativeModules} from 'react-native';

const Starters = () => {
  const SwiftStarters = NativeModules.SwiftStarters
  const orderingStarters = () => {
    console.log('React Native Waitress: Starters order sent to Swift Kitchen...')
    const appetizers = {
      "First":"React Salad",
      "Second":"Native Bruchetta",
      "Last":"Swift Rolls",
    }
    SwiftStarters.sendAppetizersOrder(appetizers)
  }
  const getFirstAppetizer = () => {
    console.log('React Native Waitress: Is the first appetizer ready?')
    SwiftStarters.getFirstAppetizer((appetizer: string) => {
        console.log("Swift Cook: Yes, the", appetizer, "is being sent!")
      });
  }
  const getSecondAppetizer = () => {
    console.log('React Native Waitress: Client is ready to get his second appetizer.')
    SwiftStarters.getSecondAppetizer((error: any) => {
      console.log("Swift Cook:", error.domain)
    });
  }
  const getLastAppetizer = () => {
    console.log('React Native Waitress: Can we offer a discount on last entry?')
    SwiftStarters.getLastAppetizer(true, (appetizer: string, discount: string) => {
      console.log("Swift Cook: We are happy to offer the", appetizer, "for", discount, ":-)")
    }, (error: any) => {
      console.log("Swift Cook:", error.domain)
    });
  }
  return (
    <View style={styles.content}>
      <TouchableHighlight style={styles.button} onPress={orderingStarters}>
        <Text style={styles.text}>Order Starters</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={getFirstAppetizer}>
        <Text style={styles.text}>Get First Appetizer</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={getSecondAppetizer}>
        <Text style={styles.text}>Get Second Appetizer</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={getLastAppetizer}>
        <Text style={styles.text}>Get Last Appetizer</Text>
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

export default Starters;
