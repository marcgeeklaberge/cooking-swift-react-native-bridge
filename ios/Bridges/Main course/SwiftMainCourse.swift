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
  func sendMainCourseOrder(_ jsonObject: String) {
    print("Swift Cook: Just received a json order!")
    if let data = jsonObject.data(using: .utf8) {
      let poutine: Poutine = try! JSONDecoder().decode(Poutine.self, from: data)
      print(poutine.description)
    }
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
      return false
  }
}
