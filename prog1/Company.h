//
//  Company.h
//  prog1
//
//  Created by DiepKinh on 05/07/2022.
//

#import <Foundation/Foundation.h>
#import "Employee.h"

NS_ASSUME_NONNULL_BEGIN

@interface Company : NSObject{
    NSString *companyName;
    NSMutableArray<Employee *> *listEmployee ;
}

- (id)initWithName:(NSString *)name andList:(NSMutableArray<Employee *>* )list ;
- (void)print;
- (void)countSex;
@end

NS_ASSUME_NONNULL_END
