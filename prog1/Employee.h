//
//  Employee.h
//  prog1
//
//  Created by DiepKinh on 04/07/2022.
//

#import <Foundation/Foundation.h>
#import "Person.h"

NS_ASSUME_NONNULL_BEGIN

@interface Employee : Person{
    NSString *employeeEducation;
}

- (id)initWithName:(NSString *)name andAge:(NSInteger)age andSex:(NSInteger)sex
  andEducation:(NSString *)education;
- (void)print;

@end

NS_ASSUME_NONNULL_END
