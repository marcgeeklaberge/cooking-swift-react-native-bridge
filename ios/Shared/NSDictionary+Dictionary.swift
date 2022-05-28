import Foundation

extension NSDictionary {
  var stringDictionary: [String : String] {
    var dictionary: [String : String] = [:]
    let keys = self.allKeys.compactMap { $0 as? String }
    for key in keys {
      let keyValue = self.value(forKey: key)
      dictionary[key] = keyValue as? String
    }
    return dictionary
  }
  var anyDictionary: [String : AnyObject] {
    var dictionary: [String : AnyObject] = [:]
    let keys = self.allKeys.compactMap { $0 as? String }
    for key in keys {
      let keyValue = self.value(forKey: key) as AnyObject
      dictionary[key] = keyValue
    }
    return dictionary
  }
}
