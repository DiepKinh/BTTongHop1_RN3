//
//  Company.m
//  prog1
//
//  Created by DiepKinh on 05/07/2022.
//

#import "Company.h"

@implementation Company

- (id)initWithName:(NSString *)name andList:(NSMutableArray<Employee *>* )list{
   companyName = name;
   listEmployee = list;
   return self;
}

- (void)print {
   NSLog(@"Name: %@", companyName);
   NSLog(@"List: %@", listEmployee);
    for(int i = 0; i< [listEmployee count];i++){
        [listEmployee[i] isEmpty] == true ? NSLog(@"Name empty") : NSLog(@"Not empty");
    }
}

- (void)countSex{
    int count = 0;
    for(int i = 0; i< [listEmployee count];i++){
        if([listEmployee[i] personSex] == 1)
            count++;
    }
    
    NSLog(@"Male: %d", count);
    NSLog(@"Female: %d", [listEmployee count] - count);
}
@end
