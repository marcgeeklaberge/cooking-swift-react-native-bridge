//
//  SwiftStarters.m
//  CookingSwiftReactNativeBridge
//
//  Created by Marc Laberge on 2022-05-26.
//

#import "React/RCTBridgeModule.h"

@interface
RCT_EXTERN_MODULE(SwiftStarters, NSObject)

RCT_EXTERN_METHOD(sendDictionary: (NSDictionary *)dictionary)

RCT_EXTERN_METHOD(getFirstAppetizer: (RCTResponseSenderBlock *)callback)

RCT_EXTERN_METHOD(getSecondAppetizer: (RCTResponseErrorBlock *)callback)

RCT_EXTERN_METHOD(getLastAppetizer: (BOOL *)waitressWantToOfferItForFree ok:(RCTResponseSenderBlock *)accepted no:(RCTResponseErrorBlock *)declined)

@end
