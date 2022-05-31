//
//  SwiftMainCourse.m
//  CookingSwiftReactNativeBridge
//
//  Created by Marc Laberge on 2022-05-30.
//

#import "React/RCTBridgeModule.h"

@interface
RCT_EXTERN_MODULE(SwiftMainCourse, NSObject)

RCT_EXTERN_METHOD(sendMainCourseOrder: (NSString *)jsonObject
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

@end

