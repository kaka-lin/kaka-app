//
//  CalendarManager.m
//  kakaApp
//
//  Created by 林家豪 on 2017/12/16.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import <React/RCTLog.h>
#import <React/RCTConvert.h>

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent: (NSString *)name details:(NSDictionary *)details)
{
    NSString *location = [RCTConvert NSString:details[@"location"]];
    NSDate *time = [RCTConvert NSDate:details[@"time"]];
  
    RCTLogInfo(@"name: %@, location: %@, time: %@", name, location, time);
}

RCT_EXPORT_METHOD(findEvents: (RCTResponseSenderBlock)callback)
{
    NSString *events = @"kaka objective-c callback test";
    callback(@[[NSNull null], events]);
}

@end
