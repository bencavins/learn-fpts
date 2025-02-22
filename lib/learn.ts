// type Increment = (x: number) => number;
// const increment: Increment = (x) => x + 1;
// // console.log(increment(2))

// type Tostring = (x: number) => string;
// const tostring: Tostring = (x) => x.toString();
// // console.log(tostring(2))

// type IncrementThenTostring = (x: number) => string;
// const incrementThenTostring: IncrementThenTostring = (x) => tostring(increment(x));
// // console.log(incrementThenTostring(2)) 

// type Compose = <A, B, C>(
//     f: (x: B) => C,
//     g: (x: A) => B
// ) => (x: A) => C;
// const compose: Compose = (f, g) => (x) => f(g(x));
// const incrementThenTostring2: IncrementThenTostring = compose(tostring, increment);
// console.log(incrementThenTostring2(2))
 