/**
 * youtube vid: https://www.youtube.com/watch?v=g0dbedNM-iY
 */

import { increment, compose } from "./option_maybe_null";

function divideTwoIfEven(n: number): number {
    if (n === 0) {
        throw 'cannot divide by zero'
    } else if (n % 2 !== 0) {
        throw 'number must be even'
    } else {
        return 2 / n
    }
}

console.log('divideTwoIfEven(10) ==', divideTwoIfEven(10));
// console.log('divideTwoIfEven(0) ==', divideTwoIfEven(0));
// console.log('divideTwoIfEven(3) ==', divideTwoIfEven(3));

type Either<E, A> = Left<E> | Right<A>;
interface Left<E> {
    _tag: 'Left';
    left: E;
}
interface Right<A> {
    _tag: 'Right';
    right: A;
}

// never is an empty set of values
const left = <E, A=never>(e: E): Either<E, A> => ({ _tag: 'Left', left: e });
const right = <A, E=never>(a: A): Either<E, A> => ({ _tag: 'Right', right: a });

const isLeft = <E, A>(x: Either<E, A>): x is Left<E> => x._tag === 'Left';
const isRight = <E, A>(x: Either<E, A>): x is Right<A> => x._tag === 'Right';


function divideTwoIfEven2(n: number): Either<string, number> {
    if (n === 0) {
        return left('cannot divide by zero');
    } else if (n % 2 !== 0) {
        return left('number must be even');
    } else {
        return right(2 / n);
    }
}

console.log('divideTwoIfEven2(10) ==', divideTwoIfEven2(10));
console.log('divideTwoIfEven2(0) ==', divideTwoIfEven2(0));
console.log('divideTwoIfEven2(3) ==', divideTwoIfEven2(3));

const composed = compose(
    // if left, pass through, if right, unwrap and increment and rewrap
    x => isLeft(x) ? x : right(increment(x.right)),  // there is a better way of doing this
    divideTwoIfEven2
)
console.log(composed(10));
console.log(composed(0));
console.log(composed(3));