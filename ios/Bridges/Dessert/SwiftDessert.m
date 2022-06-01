//
//  SwiftDessert.m
//  CookingSwiftReactNativeBridge
//
//  Created by Marc Laberge on 2022-05-31.
//

#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface
RCT_EXTERN_MODULE(SwiftDessert, RCTEventEmitter)

RCT_EXTERN_METHOD(sendDessertOrder: (BOOL *)hisFirstDessert resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(giveFeedback: (BOOL *)isPositive client:(NSString *)message resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

@end
