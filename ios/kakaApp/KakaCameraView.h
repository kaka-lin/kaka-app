//
//  KakaCameraView.h
//  kakaApp
//
//  Created by 林家豪 on 2017/12/22.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <AVFoundation/AVFoundation.h>

@interface KakaCameraView : UIView <AVCaptureVideoDataOutputSampleBufferDelegate> {
  AVCaptureVideoPreviewLayer *previewLayer;
  
  AVCaptureSession *session;
  AVCaptureVideoDataOutput *videoDataOutput;
  dispatch_queue_t videoDataOutputQueue;
}

@end
