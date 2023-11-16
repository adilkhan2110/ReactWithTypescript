// // Boolean >>>>>>>>>>>>>>>>>>>>>>>>
// let isCompleted: boolean = true;

// // Number >>>>>>>>>>>>>>>>>>>>>>>>>>
// let age: number = 25;

// // String >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let fullName: string = "John";

// // Array of numbers >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let numbers: number[] = [1, 2, 3, 4, 5];

// // Tuple (array with fixed number of elements of different types)
// let person2 : [string, number, string] = ["John", 25, 'sdasd'];

// // Null and Undefined
// let nullValue: null = null;
// let undefinedValue: undefined = undefined;

// // Union Types >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let ageOrName: number | string = 25; // can be a number or a string


// // Any (can be of any type, not recommended) >>>>>>>>>>>>>
// let anything: any = "Hello, World!";


// /// inset of any type u can use unknown >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let nameOfperson: unknown;
// nameOfperson = 20

// ///////////////////////////>>>>>>>>>>
// //////////////////////////
// /////////////////////////
// ////////////////////////
// //for creatting object we can useing type keyword and using ? for optional value>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// type Person = {
//   name:string;
//   age?:number;
// }

// let person : Person ={
//   name:'demo',
// }

// //if u want array of person object u can assing it <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// let data: Person[]



// /// >> interface for creating object  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// interface person3 {
//   name:string,
//   age:number,
// }

// // if i want to type in one 
// type X  = {
//   a:number;
//   b:string;
// }

// // bu this method now have x property now y have x property >>>>>>>>>>>>>>>>>>>>>>>>>>>
// type Y = X & {
//   c?:number;
//   D?:string;
// }

// let y : Y ={
//   a:20,
//   b:'dsa'
// }

// //>>>>>>>>>>>>>>>>>>>> exted now with interface
// interface guy2 {
//   a:number;
//   b:string;
// }

// interface guy extends guy2 {
//   c:number;
//   d:string;
// }

 


// // Object (non-primitive types) 2nd methord>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let personObject: { name?: string, age: number } = {
//   name: "John",
//   age: 25
// };


// /// difine function in 1st way >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let myFunction : Function;

 
// // Void (commonly used for functions that don't return a value) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// // 1 if function not retrun any thing you can use void but | void | retrun undifine 
// // 2 void ki jaga u can use | never | because never retrun anything

// const logMessage = (name:string):void =>{
//   console.log(name);
// }



// // Enum
// enum Color {
//   Red,
//   Green,
//   Blue
// }
// let selectedColor: Color = Color.Red;



// // Function Type
// type AddFunction = (a: number, b: number) => number;
// let add: AddFunction = (a, b) => a + b;

// // Class
// // class Person {
// //   name: string;
// //   age: number;
// //   constructor(name: string, age: number) {
// //     this.name = name;
// //     this.age = age;
// //   }
// // }
// // let personInstance: Person = new Person("John", 25);
