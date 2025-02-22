/**
 * Option == Maybe
 * Some == Just
 * None == Nothing
 * 
 * https://www.youtube.com/watch?v=Kv26EC6qU18
 */

type DivideTwo = (x: number) => number;
const divide_two: DivideTwo = (x) => 2 / x;
console.log('divide_two(10) ==', divide_two(10));
console.log('divide_two(0) ==', divide_two(0));

type Increment = (x: number) => number;
export const increment: Increment = (x) => x + 1;
console.log('increment(2) ==', increment(2));

type Compose = <A, B, C>(
    f: (x: B) => C,
    g: (x: A) => B
) => (x: A) => C;
export const compose: Compose = (f, g) => (x) => f(g(x));

const composed = compose(increment, divide_two);
console.log('composed(10) ==', composed(10));
console.log('composed(0) ==', composed(0));


type Option<A> = Some<A> | None;
interface Some<A> {
    _tag: 'Some';
    value: A;
}
interface None {
    _tag: 'None';
}

// helper func to lift and wrap values under Some
// takes a value of any type and returns a version of it inside Option
const some = <A>(x: A): Option<A> => ({ _tag: 'Some', value: x });
const none: Option<never> = { _tag: 'None' };
// what is the x is None hint?
// it is a type guard that checks if the value is of type None
const isNone = <A>(x: Option<A>): x is None => x._tag === 'None';

type DivideTwo2 = (x: number) => Option<number>;
const divide_two2: DivideTwo2 = (x) => x === 0 ? none : some(2 / x);

// The complier complains here
// the output of divide_two2 is Option<number> but increment expects a number
// const composed2 = compose(increment, divide_two2);

// there is a better way of handling this but this works for now
const composed2 = compose(
    (x: Option<number>) => isNone(x) ? none : some(increment(x.value)),
    divide_two2
);

console.log('composed2(10) ==', composed2(10));
console.log('composed2(0) ==', composed2(0));