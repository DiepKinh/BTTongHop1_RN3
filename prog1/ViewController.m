//
//  ViewController.m
//  prog1
//
//  Created by DiepKinh on 04/07/2022.
//

#import "ViewController.h"
#import "Person.h"
#import "Employee.h"
#import "Company.h"

@interface ViewController ()

@end

#define MINIMUM_VALUE        10
#define MAXIMUM_VALUE        100

@interface Box:NSObject {
   double length;    // Length of a box – private
   double breadth;   // Breadth of a box – private
}

@property(nonatomic, assign) double height;  // Property – public
    - (double) volume;
@end

@implementation Box

@synthesize height;

-(id)init {
   self = [super init];
   length = 1.0;
   breadth = 1.0;
   return self;
}

-(double) volume {
   return length * breadth * self.height;
}

@end


@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    NSArray *nsarray1 =@[@"a",@"b"];
    NSArray *nsarray2 =[NSArray arrayWithObjects:@"a",@"b",nil];
    
    NSMutableArray *nsmutablearray2 =[NSMutableArray arrayWithObjects:@"aa",@"bb",nil];
    
    NSString *nsstring1 = @"nsstring";
    NSString *nsstring2 = @"NSSTRING";
    NSString *nsstring3 = @"";
    NSString *nsstring4 = @"";
    
    NSMutableString *nsmutablestring1 = @"NSMutableString";
    NSMutableString *nsmutablestring2 = @"";
    NSMutableString *nsmutablestring3 = @"";
    
    NSLog(@"Hello ObjectiveC");
    
    NSLog (@"min value: %d", MINIMUM_VALUE);
    NSLog (@"max value: %d", MAXIMUM_VALUE);
    
    NSLog (@"nsarray1 value: %@", nsarray1);
    NSLog (@"nsarray2 value: %@", nsarray2);
    
    NSLog (@"nsmutablearray2 value: %@", nsmutablearray2);
    
    [nsmutablearray2 addObject:@"cc"];
    NSLog (@"nsmutablearray1 value after add: %@", nsmutablearray2);
    
    [nsmutablearray2 removeObject:@"bb"];
//    [nsmutablearray2 removeObject:nsmutablearray2[1]];
//    [nsmutablearray2 removeLastObject];
    NSLog (@"nsmutablearray1 value after remove: %@", nsmutablearray2);
    
//    nsstring1 = [nsstring1 uppercaseString];
//    NSLog (@"nsstring1 uppercase: %@", nsstring1);
    
    nsstring2 = [nsstring2 lowercaseString];
    NSLog (@"nsstring2 lowercase: %@", nsstring2);
    
    long len = 0;
    len = [nsstring1 length];
    NSLog (@"length nsstring1: %ld", len);
    
//    nsstring3 = [[NSString alloc] initWithFormat:@"%@ %@", nsstring1, nsstring2 ];
    nsstring3 = nsstring1;
    NSLog (@"initWithFormat: %ld", &nsstring1);
    NSLog (@"initWithFormat: %ld", &nsstring3);
    nsstring4 = [[NSString alloc] initWithFormat:@"%@ %@", nsstring1, nsstring3 ];
    NSLog (@"initWithFormat: %@", nsstring4);
    
    nsmutablestring2 = nsmutablestring1;
    NSLog (@"initWithFormat: %ld", &nsmutablestring1);
    NSLog (@"initWithFormat: %ld", &nsmutablestring2);
    nsmutablestring3 = [[NSMutableString alloc] initWithFormat:@"%@ %@", nsmutablestring1, nsmutablestring2 ];
    NSLog (@"initWithFormat: %@", nsmutablestring3);
    
    NSMutableString *test = [NSMutableString stringWithString: @"test"];
    NSMutableString *test2 = [[NSMutableString alloc] initWithString: test];;
    NSLog (@"test: %@, test2: %@", test,test2);
    
    [test2 setString: @"changetest"];
    NSLog (@"test: %@, test2: %@", test,test2);
    
    NSLog (@"==========LOOP========");
    NSLog (@"==========HAM========");
    
    ViewController *math = [[ViewController alloc] init];
//    int sum = [math sum:3 b:4 ];
    NSLog (@"sum: %d",[math sum:3 b:4 ]);
    NSLog (@"isValid: %d",[math isValid:-3  ]);
    [math appendObjects: @"appendObjects"];
    
    Box *box1 = [[Box alloc]init];
    Box *box2 = [[Box alloc]init];    // Create box2 object of type Box

    double volume = 0.0;             // Store the volume of a box here
 
    // box 1 specification
    box1.height = 5.0;

    // box 2 specification
    box2.height = 10.0;
  
    // volume of box 1
    volume = [box1 volume];
    NSLog(@"Volume of Box1 : %f", volume);
   
    // volume of box 2
    volume = [box2 volume];
    NSLog(@"Volume of Box2 : %f", volume);
    
    NSLog(@"Base class Person Object");
    Person *person = [[Person alloc]initWithName:@"Raj" andAge:65 andSex:0];
    [person print];
    NSLog(@"Inherited Class Employee Object");
    Employee *employee = [[Employee alloc]initWithName:@"Raj" andAge:20 andSex:1 andEducation:@"MBA"];
    Employee *employee2 = [[Employee alloc]initWithName:@"Jen" andAge:30 andSex:0 andEducation:@"IMT"];
    Employee *employee3 = [[Employee alloc]initWithName:@"Jen" andAge:30 andSex:0 andEducation:@"IMT"];
    Employee *employee4 = [[Employee alloc]initWithName:@"Jen" andAge:30 andSex:0 andEducation:@"IMT"];
    Employee *employee5 = [[Employee alloc]initWithName:@"Jen" andAge:30 andSex:0 andEducation:@"IMT"];
    Employee *employee6 = [[Employee alloc]initWithName:@"Jen" andAge:30 andSex:0 andEducation:@"IMT"];
    [employee print];
    [person isEmpty] == true ? NSLog(@"Name empty") : NSLog(@"Not empty");
    [person isWorkingAge] == true ? NSLog(@"Working age") : NSLog(@"Not of working age");
    NSLog(@"==%@",employee );
    Company *company = [[Company alloc]initWithName:@"IMT" andList:[NSMutableArray<Employee *> arrayWithObjects:employee,employee2,employee3,employee4,employee4,employee6,nil]];
    [company print];
    [company countSex];

}
- (BOOL) isValid: (int) a {
    if(a>0) return true;
    return false;
}

- (int) sum: (int) a b:(int) b{
    return a + b;
}

- (void) appendObjects:( NSString * )string1 {
    NSLog (@"abc: %@",[string1 uppercaseString]);
}


@end
