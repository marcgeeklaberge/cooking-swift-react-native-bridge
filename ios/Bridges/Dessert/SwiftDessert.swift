//
//  SwiftDessert.swift
//  CookingSwiftReactNativeBridge
//
//  Created by Marc Laberge on 2022-05-31.
//

import Foundation
import React

@objc(SwiftDessert)
class SwiftDessert: RCTEventEmitter {
  private var resolver: RCTPromiseResolveBlock?
  private var rejecter: RCTPromiseRejectBlock?
  
  public static var emitter: RCTEventEmitter?
  
  override init() {
    super.init()
    SwiftDessert.emitter = self
  }
  
  @objc
  override func supportedEvents() -> [String]! {
    return ["swift_cook_has_finished"]
  }
  
  @objc
  func sendDessertOrder(_ hisFirstDessert: Bool,
                        resolver resolve: @escaping RCTPromiseResolveBlock,
                        rejecter reject: @escaping RCTPromiseRejectBlock) {
    self.resolver = resolve
    self.rejecter = reject
    if hisFirstDessert {
      DispatchQueue.main.asyncAfter(deadline: .now() + 7.0) {
        resolve("Here's our special WW MELTING CHOCOLATE SPHERE DESSERT!")
      }
    } else {
      DispatchQueue.main.asyncAfter(deadline: .now() + 3.0) {
        SwiftDessert.emitter?.sendEvent(withName: "swift_cook_has_finished", body: "Thank you, hope to see you again soon!")
      }
      DispatchQueue.main.asyncAfter(deadline: .now() + 4.0) {
        reject("dessert_overflow", "We only allow one dessert per person.", nil)
      }
    }
  }
  
  @objc
  func giveFeedback(_ isPositive: Bool,
                    client message: String,
                    resolver resolve: @escaping RCTPromiseResolveBlock,
                    rejecter reject: @escaping RCTPromiseRejectBlock) {
    self.resolver = resolve
    self.rejecter = reject
    if isPositive {
      resolve("Thank you so much for the kind words!")
    } else {
      reject("bad_feedback", "We are sorry, we will do better next time...", nil)
    }
  }
  
  @objc
  override static func requiresMainQueueSetup() -> Bool {
      return false
  }
}
