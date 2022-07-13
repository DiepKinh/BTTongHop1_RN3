//
//  Employee.m
//  prog1
//
//  Created by DiepKinh on 04/07/2022.
//

#import "Employee.h"

@implementation Employee
@synthesize personSex;

- (id)initWithName:(NSString *)name andAge:(NSInteger)age andSex:(NSInteger)sex
   andEducation: (NSString *)education {
      personName = name;
      personAge = age;
      personSex = sex;
      employeeEducation = education;
      return self;
    }

- (void)print {
   NSLog(@"Name: %@", personName);
   NSLog(@"Age: %ld", personAge);
   NSLog(@"Sex: %@", personSex == 1 ? @"Male" : @"Female");
   NSLog(@"Education: %@", employeeEducation);
}

@end
