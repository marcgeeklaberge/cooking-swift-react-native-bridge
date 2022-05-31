import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight, NativeModules} from 'react-native';
import { Poutine, PoutineFactory, PoutinesSpecialties } from './poutine.type';

const MainCourse = () => {
  const SwiftMainCourse = NativeModules.SwiftMainCourse
  const describe = (poutine: Poutine) => {
    return "\n=================== Served Poutine ==================\n".concat(
    "Potatoes:      ", poutine.potatoes, "\n",
    "Sauce:         ", poutine.sauce, "\n",
    "Cheeses:       ", poutine.cheeses, "\n",
    "Spicy Level:   ", poutine.spicyLevel.toString(), "\n",
    (poutine.extraCheeses !== null) ? "Extra Cheeses: ".concat(poutine.extraCheeses!.toString(), "\n") : "\n",
    (poutine.vegetables !== null) ? "Vegetables:    ".concat(poutine.vegetables!.toString(), "\n") : "\n",
    (poutine.meats !== null) ? "Meats:         ".concat(poutine.meats!.toString(), "\n") : "\n",
    "=====================================================\n\n")
  }
  const order = (poutine: Poutine) => {
    return new Promise(async (resolve, reject) => {
      try {
        const stringPoutine = await SwiftMainCourse.sendMainCourseOrder(JSON.stringify(poutine))
        let servedPoutine: Poutine = JSON.parse(stringPoutine);
        resolve("Swift Cook: Here's your poutine! ".concat(describe(servedPoutine)))
      } catch(error) {
        reject(error)
      }
    })
  }
  const orderMainCourse = async () => {
    let chosenPoutine = PoutinesSpecialties.MARC_LABERGE
    console.log('React Native Waitress: The customer chose', chosenPoutine, 'poutine as main course!')
    let poutine: Poutine = PoutineFactory.createPoutine(chosenPoutine);
    try {
      const orderPoutine = await order(poutine);
      console.log(orderPoutine)
    } catch(error: any) {
      console.log("Swift Cook:", error.message)
      setTimeout(async () => {
        if (error.code === "meats_steak_issue") {
          console.log('React Native Waitress: The customer wants the same poutine without steak!')
          const meats = (poutine.meats ?? []).filter(meat => meat !== "steak") ?? [];
          const newPoutine: Poutine = {
            ...poutine
          }
          newPoutine.meats = [...meats]
          try {
            const orderAnotherPoutine = await order(newPoutine);
            console.log(orderAnotherPoutine)
          } catch {
            console.log("React Native Waitress: We are so sorry, you can order any available main course for free...")
          }
        }
      }, 5000);
    }
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
