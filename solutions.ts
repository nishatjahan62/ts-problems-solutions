

const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((number) => number % 2 === 0);
};



const reverseString = (text: string): string => {
  const reversedText = text.split("").reverse().join("");
  return reversedText;
};



type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): string => {
  if (typeof value === "number") {
    return "Number";
  } else return "String";
};



const getProperty = <T, K extends keyof T>(object: T, key: K): T[K] => {
  return object[key];
 
};




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




const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((num) => arr2.includes(num));
};
