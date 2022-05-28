//
//  SwiftReservation.m
//  CookingSwiftReactNativeBridge
//
//  Created by Marc Laberge on 2022-05-27.
//

#import "React/RCTBridgeModule.h"
#import "React/RCTLog.h"

@interface
RCT_EXTERN_MODULE(SwiftReservation, NSObject)

RCT_EXTERN_METHOD(makeReservation: (double)numberOfPeople date:(NSString *)date)

@end
