function normal_sum(a: number, b: number): number {
    return a + b;
}

// curry version of sum
type Sum = (a: number) => (b: number) => number;
const sum: Sum = a => b => a + b;
console.log('sum(3)(5) ==', sum(3)(5));
/**
 * Same thing as:
 * 
 * function sum(a: number) {
 *     return function(b: number) {
 *        return a + b;
 * }}
 */

type Inc = (x: number) => number;
const inc: Inc = sum(1);
console.log('inc(0) ==', inc(0))

type Dec = (x: number) => number;
const dec: Dec = sum(-1);
console.log('dec(10) ==', dec(10))

const sumTen = sum(10);
console.log('sumTen(88) ==', sumTen(88))

type Curry2 = <A, B, Z>(f: (a: A, b: B) => Z)
    => (a: A) 
    => (b: B) 
    => Z;
const curry2: Curry2 = f => a => b => f(a, b);
const sum2 = curry2(normal_sum);

console.log('sum2(3)(5) ==', sum2(3)(5));
