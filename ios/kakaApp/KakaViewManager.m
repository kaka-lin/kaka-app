//
//  KakaViewManager.m
//  kakaApp
//
//  Created by 林家豪 on 2017/12/21.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "KakaViewManager.h"
#import <MapKit/MapKit.h>

@implementation KakaViewManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[MKMapView alloc] init];
}

@end
