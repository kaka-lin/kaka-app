//
//  MyObjcClass.m
//  kakaApp
//
//  Created by 林家豪 on 2017/12/16.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "MyObjcClass.h"

@implementation MyObjcClass

RCT_EXPORT_MODULE()
- (NSDictionary *)constantsToExport
{
    return @{@"greeting": @"Welcome to the kaka\n Native Modules!"};
}

RCT_EXPORT_METHOD(squareMe: (NSString *)number:(RCTResponseSenderBlock)callback)
{
    int num = [number intValue];
    callback(@[[NSNull null], [NSNumber numberWithInt:(num * num)]]);
}


@end
