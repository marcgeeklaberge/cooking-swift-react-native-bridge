//
//  SwiftMainCourse.swift
//  CookingSwiftReactNativeBridge
//
//  Created by Marc Laberge on 2022-05-30.
//

import Foundation

@objc(SwiftMainCourse)
class SwiftMainCourse: NSObject {
  @objc
  func sendMainCourseOrder(_ jsonObject: String,
                           resolver resolve: @escaping RCTPromiseResolveBlock,
                           rejecter reject: @escaping RCTPromiseRejectBlock) {
    print("Swift Cook: Just received a json order!")
    if let data = jsonObject.data(using: .utf8) {
      let poutine: Poutine = try! JSONDecoder().decode(Poutine.self, from: data)
      print(poutine.description)
      if let meats = poutine.meats, meats.contains("steak") {
        DispatchQueue.main.asyncAfter(deadline: .now() + 3.0) {
          print("We don't have steak in the kitchen")
          reject("meats_steak_issue", "We don't have steak in the kitchen...", nil)
        }
      } else {
        let newJsonPoutine = try! JSONEncoder().encode(poutine)
        let string = NSString(data: newJsonPoutine, encoding: String.Encoding.utf8.rawValue)
        DispatchQueue.main.asyncAfter(deadline: .now() + 6.0) {
          resolve(string)
        }
      }
    }
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
      return false
  }
}
