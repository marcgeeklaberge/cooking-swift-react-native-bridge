//
//  SwiftStarters.swift
//  CookingSwiftReactNativeBridge
//
//  Created by Marc Laberge on 2022-05-26.
//

import Foundation
import UIKit

@objc(SwiftStarters)
class SwiftStarters: NSObject {
  private var appetizers: Dictionary<String, String> = [:]
  @objc
  func sendDictionary(_ dictionary: NSDictionary) {
    self.appetizers = dictionary.stringDictionary
    print("Swift cook: Just received a dictionary order!")
  }
  @objc
  func getFirstAppetizer(_ callback: @escaping RCTResponseSenderBlock) {
    DispatchQueue.main.asyncAfter(deadline: .now() + 5.0) {
      let firstAppetizer: String = self.appetizers["First"] ?? "first appetizer"
      callback([firstAppetizer])
    }
  }
  @objc
  func getSecondAppetizer(_ callback: @escaping RCTResponseErrorBlock) {
    DispatchQueue.main.asyncAfter(deadline: .now() + 2.0) {
      let secondAppetizer: String = self.appetizers["Second"] ?? "second appetizer"
      let error = NSError(domain: "Sorry, the \(secondAppetizer) is sadly no more available...", code: 777, userInfo: nil)
      callback(error)
    }
  }
  @objc
  func getLastAppetizer(_ waitressWantToOfferItForFree: Bool,
                   ok accepted: @escaping RCTResponseSenderBlock,
                   no declined: @escaping RCTResponseErrorBlock
  ) {
    let cookAcceptedToGiveLastAppetizerForFree = arc4random_uniform(2) == 0
    let lastAppetizer: String = self.appetizers["Second"] ?? "second appetizer"
    if waitressWantToOfferItForFree && cookAcceptedToGiveLastAppetizerForFree {
      accepted([lastAppetizer, "FREE"])
    } else if waitressWantToOfferItForFree || cookAcceptedToGiveLastAppetizerForFree {
      accepted([lastAppetizer, "50% OFF"])
    } else {
      let error = NSError(domain: "Sorry, we can't offer you a discount on the \(lastAppetizer), but we hope you enjoy it...", code: 888, userInfo: nil)
      declined(error)
    }
    
  }
}
