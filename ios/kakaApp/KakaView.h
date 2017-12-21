//
//  KakaView.h
//  kakaApp
//
//  Created by 林家豪 on 2017/12/21.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <MapKit/MapKit.h>

#import <React/RCTComponent.h>

@interface KakaView : MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;

@end
