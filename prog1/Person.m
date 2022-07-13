//
//  Person.m
//  prog1
//
//  Created by DiepKinh on 04/07/2022.
//

#import "Person.h"

@implementation Person
@synthesize personSex;

- (id)initWithName:(NSString *)name andAge:(NSInteger)age andSex:(NSInteger)sex{
   personName = name;
   personAge = age;
   personSex = sex;
   return self;
}


- (void)print {
   NSLog(@"Name: %@", personName);
   NSLog(@"Age: %ld", personAge);
   NSLog(@"Sex: %@", personSex == 1 ? @"Male" : @"Female");
}

- (BOOL) isEmpty{
    if([personName length] == 0) return true;
    
    return false;
}

- (BOOL) isWorkingAge{
    if(personSex == 1)
    {
        if(personAge >= 18 && personAge <= 65) return true;
    }else{
        if(personAge >= 18 && personAge <= 60) return true;
    }
    return false;
}



@end
