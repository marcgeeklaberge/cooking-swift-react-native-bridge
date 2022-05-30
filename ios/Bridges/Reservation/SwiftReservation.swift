//
//  SwiftReservation.swift
//  CookingSwiftReactNativeBridge
//
//  Created by Marc Laberge on 2022-05-27.
//

import Foundation
import UIKit

@objc(SwiftReservation)
class SwiftReservation: NSObject {
  private var numberOfPeople: Int = 0
  private var date: Date = Date()
  
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["restaurantName": "React Swift Native Restaurant",
            "phoneNumber"   : "1-234-567-89XX"
    ]
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
      return true
  }
  
  @objc
  func makeReservation(_ numberOfPeople: Double, date: String) {
    self.numberOfPeople = Int(numberOfPeople)
    
    let dateFormatter = ISO8601DateFormatter()
    self.date = dateFormatter.date(from: date) ?? Date()
    
    print("Swift Hostess: Reservation for \(self.numberOfPeople) person\(self.numberOfPeople > 1 ? "s" : "") on \(self.date.description) confirmed.")
  }
  
}
