# Generics In TypeScript

### Generics : The Identity Function .

---

#### Identity function means the function that will return whatever passed in .

-> simply i understand generics as **dynamically generalize** function which take dynamic  types just like we used in function parameters.

"function accepts dynamic values called parameter and Generic accepts dynamic types like A placeholder for types ".

#### => Generic allows to build reusable component and functions that stay strictly typed regardless of the data structure passed in .

---

### some key features of generic :

* Type Safety : Generics provide compile-time type checking , also if we pass "string" type into a generic function ,TypeScript knows it will return "string"
* Reusability : We can write code once and use it multiple times.
* Flexibility : generics allow us to build components that work with various data structures like arrays, objects or custom classes without losing typing.
* Readability : Our code looks like a documentation , makes it easier to understand by other developers

### basic syntax of generic :

```ts
function identity<T>(arg: T): T {
  return arg;
}
 
```

** So, now if i give string type data in upper function by **generic** it will return string and if i give number type it will return number 
```ts
let output1 = identity(42)
let output2 = identity<string>("Generics in Typescript")
console.log(output1)
// =>  the output 42
console.log(output2)
// => the output "Generics in Typescript"

```

** In this function <T> used as a type parameter, by which we can use type dynamically.
=> when we call the function we can either define the type (output2) or TypeScript will infer it based on the argument.

**It works with any data structure**
```ts
const createArrayWithGeneric = <T>(value: T): T[] => {
  return [value];
};
const stringArr = createArrayWithGeneric("next level");
const numArr = createArrayWithGeneric(12560);
const objArr = createArrayWithGeneric({
  id: 12560,
  name: "nishat jahan",
  course: "Next Level"
});

console.log(stringArr); 
// output => ["next level"]
console.log(numArr); 
// output => [12560]
console.log(objArr); 
// output => [{ id: 12560,name: "nishat jahan",course: "Next Level" }]
```

#### So the bottom line is **Generics** are a useful and powerful feature of Typescript that help us to write code that is flexible and type-safe. Also by Generics we can  build reusable components and functions that work with various types while ensuring type consistency.