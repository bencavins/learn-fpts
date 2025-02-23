import { Option, None, none, Some, some, isNone } from "./option_maybe_null";
import { Either, Left, Right, left, right, isLeft, isRight } from "./either";
import { List, Cons, cons, Nil, nil, isNil } from "./list";
import { match } from 'ts-pattern'

/**
 * https://www.youtube.com/watch?v=chBi2SSkZ-g
 * 
 * ADT == Algebraic Data Type
 * ADT is a composite using product types and sum types
 */


// *** Option ***
// the W stands for 'wide' since we are widening the output type
// type MatchW = <A, B, C>(
//     onNone: () => C,
//     onSome: (x: A) => B
// ) => (x: Option<A>) => B | C;
// const matchW: MatchW = (onNone, onSome) => 
//     (x) => isNone(x) ? onNone() : onSome(x.value);

// const maybeNumber: Option<number> = some(10);
// // const maybeNumber: Option<number> = none;
// const result = matchW(
//     () => -1,
//     (x) => `num is ${x}`
// )(maybeNumber);
// console.log('result ==', result);


// *** Either ***
// type Match = <E, A, B>(
//     onLeft: (x: E) => B,
//     onRight: (x: A) => B
// ) => (x: Either<E, A>) => B;
// const match: Match = (onLeft, onRight) =>
//     (x) => isLeft(x) ? onLeft(x.left) : onRight(x.right);

// // const errorOrNumber: Either<string, number> = right(10);
// const errorOrNumber: Either<string, number> = left('error message');
// const result = match(
//     (x: string) => `error: ${x}`,
//     (x: number) => `num: ${x}`
// )(errorOrNumber);
// console.log('result ==', result);


// *** List ***
// type Match = <A, B>(
//     onNil: () => B,
//     onCons: (head: A, tail: List<A>) => B
// ) => (x: List<A>) => B;
// const match: Match = (onNil, onCons) =>
//     (x) => isNil(x) ? onNil() : onCons(x.head, x.tail);

const myList: List<number> = cons(1, cons(2, cons(3, nil)));
// const myList: List<number> = nil;
// const result = match(
//     () => 'list is empty',
//     (head: number, tail: List<number>) => `head is ${head}`
// )(myList);
// console.log('result ==', result);

// using ts-pattern
const result = match(myList)
    .with({ _tag: 'Nil' }, () => 'list is empty')
    .with({ _tag: 'Cons' }, ({ head, tail }) => `head is ${head}`)
    .exhaustive();
console.log('result ==', result);