//
//  KakaCameraManager.m
//  kakaApp
//
//  Created by 林家豪 on 2017/12/22.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "KakaCameraManager.h"
#import "KakaCameraView.h"

@implementation KakaCameraManager

RCT_EXPORT_MODULE();

- (UIView *)view
{
  if (!self.camera) {
    self.camera = [[KakaCameraView alloc] init];
  }
  
  return self.camera;
}

@end
