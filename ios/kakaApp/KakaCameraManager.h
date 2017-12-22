//
//  KakaCameraManager.h
//  kakaApp
//
//  Created by 林家豪 on 2017/12/22.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <React/RCTViewManager.h>
#import <AVFoundation/AVFoundation.h>

#import "KakaCameraView.h"

@interface KakaCameraManager : RCTViewManager<AVCaptureVideoDataOutputSampleBufferDelegate>

@property (nonatomic, strong) KakaCameraView *camera;

@property (nonatomic, strong) dispatch_queue_t videoDataOutputQueue;
@property (nonatomic, strong) AVCaptureSession *session;
@property (nonatomic, strong) AVCaptureVideoDataOutput *videoDataOutput;

@property (nonatomic, strong) AVCaptureVideoPreviewLayer *previewLayer;

@end
