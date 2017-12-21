//
//  KakaViewManager.m
//  kakaApp
//
//  Created by 林家豪 on 2017/12/21.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "KakaView.h"
#import "KakaViewManager.h"
#import "RCTConvert+Mapkit.m"

@implementation KakaViewManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(zoomEnable, BOOL)
RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL)
RCT_EXPORT_VIEW_PROPERTY(onRegionChange, RCTBubblingEventBlock)

RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)
{
  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}

- (UIView *)view
{
  KakaView *map = [KakaView new];
  map.delegate = self;
  return map;
}

#pragma mark MKMapViewDelegate

- (void)mapView:(KakaView *)mapView regionDidChangeAnimated:(BOOL)animated
{
  if (!mapView.onRegionChange) {
    return;
  }
  
  MKCoordinateRegion region = mapView.region;
  mapView.onRegionChange(@{
                           @"region": @{
                               @"latitude": @(region.center.latitude),
                               @"longitude": @(region.center.longitude),
                               @"latitudeDelta": @(region.span.latitudeDelta),
                               @"longitudeDelta": @(region.span.longitudeDelta),
                               }
                           });
}
@end
