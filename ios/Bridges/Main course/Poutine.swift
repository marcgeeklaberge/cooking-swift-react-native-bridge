//
//  Poutine.swift
//  CookingSwiftReactNativeBridge
//
//  Created by Marc Laberge on 2022-05-30.
//

import Foundation

struct Poutine: Decodable {
  let potatoes: String
  let sauce: String
  let cheeses: String
  let spicyLevel: Int
  let extraCheeses: String?
  let vegetables: [String]?
  let meats: [String]?
}

extension Poutine: CustomStringConvertible {
  var description: String {
    return "\n================== Poutine to Cook ==================\n\n"
         + "Potatoes:      \(potatoes)\n"
         + "Sauce:         \(sauce)\n"
         + "Cheeses:       \(cheeses)\n"
         + "Spicy Level:   \(spicyLevel)\n"
         + ((extraCheeses != nil) ? "Extra Cheeses: \(String(describing: extraCheeses!))\n" : "\n")
         + ((vegetables != nil) ? "Vegetables:    \(String(describing: vegetables!))\n" : "\n")
         + ((meats != nil) ? "Meats:         \(String(describing: meats!))\n" : "\n")
         + "\n=====================================================\n\n"
  }
}
