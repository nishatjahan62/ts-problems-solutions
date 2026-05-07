# The Four Pillars of OOP(Object-Oriented Programming )in TypeScript

#### => Object Oriented programming (OOP) is a programming paradigm that relies on the concept of classes and objects. It combines data  and methods together in one place.

**Class is a blueprint which is used to create instances which are the actual real objects which is the real instance.**
```ts
class Person {
  name: string;
  age: number;

  constructor(personName: string, personAge: number) {
    this.name = personName;
    this.age = personAge;
  }
```

#### While JavaScript uses prototype-based inheritance, TypeScript adds full support for traditional class-based OOP features and the four pillars  make it even more powerful and help to  manage logic and reduce complexity in large-scale TypeScript projects .

### The Four pillars of OOP:
=>**Inheritance** = Reuse parent logic.

=>**Polymorphism** = Same method, different behavior.

=>**Abstraction** = Hide implementation, expose interface.

=>**Encapsulation** = Hide secure data.

## 1.Inheritance:
**Inheritance** means when a child Class can reuse the parent class's properties and methods and also can extend them by using **super** key word.
```ts
// parent class 
class Person {
  name: string;
  age: number;

  constructor(personName: string, personAge: number) {
    this.name = personName;
    this.age = personAge;
  }
}
//  child class where name and age inherits from parent class "Person"
class Student extends Person {
  grade: string;

  constructor(studentName: string, studentAge: number, studentGrade: string) {
    super(studentName, studentAge); // inherited from parent class
    this.grade = studentGrade;
  }
}
```
=> In this we can see that by **Inheritance** Student is the child class which  inherits "name" and "age" from parent class Person , also extends it by adding "grade" 


## 2.Polymorphism:
**Polymorphism** means we use the same method name but it behaves differently depending on how the object calling it. 
```ts
class PersonFee {
  getFee(amount: number): number {
    return amount;
  }
}
class StudentFee extends PersonFee {
 getFee(amount: number): number {
    return amount+40 ;
  }
}
class AlumniFee extends PersonFee {
 getFee(amount: number): number {
    return amount+80 ;
  }
}
const personInstance = new PersonFee();
const studentInstance = new StudentFee();
const alumniInstance = new AlumniFee();

console.log(personInstance.getFee(100))  
// output 100
console.log(studentInstance.getFee(100)) // output 140
console.log(alumniInstance.getFee(100))  // output 180
```
=> In this we can see that by **Polymorphism** we are calling **getFee** each time and seeing different result based on logic. By this our code is clean , we can reuse code .

## 3.Abstraction:
**Abstraction** means when we hide the implementation and only expose a simple contract flow . we direct use **abstract** key word for this. 
```ts
abstract class Fee{
     abstract getFee(amount: number): number 
}
class StudentFee extends Fee {
 getFee(amount: number): number {
    return amount+40 ;
  }
}
class AlumniFee extends Fee {
 getFee(amount: number): number {
    return amount+80 ;
  }
}
const student = new StudentFee();
const alumni  = new AlumniFee();

console.log(student.getFee(100));
// output 140 
console.log(alumni.getFee(100)); 
// output 180
```
=>  But if we try to add new instance like
**const fee = new Fee();**
we will get the error : 
**Cannot create an instance of an abstract class.ts(2511)
constructor Fee(): Fee**
=> So, we can see that by **Abstraction** **getFee** set a rule and other sub Class must have getFee(), and they can calculate in their own logic.

## 4.Encapsulation:
**Encapsulation** means just like capsule, it hides the internal data so that we can access them from outside and only expose what is necessary. we use it when we want to secure a system.
```ts
class Person {
    private _age: number =0 

    setAge(age:number){
        this._age =age
    }

    getAge(){
        return this._age
    }
}
const person = new Person();
person.setAge(21)
console.log(person.getAge())
// output 21
```
=> but if we want to access _age like:
**console.log(person._age)**
=> typescript will show error that:
**" Property '_age' is private and only accessible within class 'Person1'. "**
=> So if we want to want to secure a system or data like **apiKey** using **private**  thats means we encapsulate it by **Encapsulation**.

-----------------------

### by this we can say the four pillars of  OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation gives useful services and by using them together we can manage large-scale projects easily. 
#### => with the help of these pillars we can maintain large codebase, reuse code (Inheritance),keep our code clean(Polymorphism), forces contracts(Abstraction) and protect our data(Encapsulation).