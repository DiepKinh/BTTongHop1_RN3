//
//  Person.h
//  prog1
//
//  Created by DiepKinh on 04/07/2022.
//

#import <Foundation/Foundation.h>

@interface Person : NSObject {
   NSString *personName;
   NSInteger personAge;
}

@property(nonatomic, assign) NSInteger personSex;  // Property – public



- (id)initWithName:(NSString *)name andAge:(NSInteger)age andSex:(NSInteger)sex;
- (void)print;
- (BOOL)isEmpty;
- (BOOL)isWorkingAge;

@end


