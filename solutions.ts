// Solution of Problem 01

const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((number) => number % 2 === 0);
};

// Solution of Problem 02

const reverseString = (text: string): string => {
  const reversedText = text.split("").reverse().join("");
  return "reversedText";
};

// Solution of Problem 03

type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): string => {
  if (typeof value === "number") {
    return "Number";
  } else return "String";
};

// Solution of Problem 04

const getProperty = <T, K extends keyof T>(object: T, key: K): T[K] => {
  return object[key];
 
};


// Solution of Problem 05

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  return {
    ...book,
    isRead: true,
  };
};

// Solution of Problem 06

class Person {
  name: string;
  age: number;

  constructor(personName: string, personAge: number) {
    this.name = personName;
    this.age = personAge;
  }
}

class Student extends Person {
  grade: string;

  constructor(studentName: string, studentAge: number, studentGrade: string) {
    super(studentName, studentAge);
    this.grade = studentGrade;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Solution of Problem 07

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((num) => arr2.includes(num));
};
