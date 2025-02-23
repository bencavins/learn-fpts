/**
 * https://www.youtube.com/watch?v=YIgmGxdQxw8
 */

export type List<A> = Cons<A> | Nil;
// this represents the end of the list
export interface Nil {
    _tag: 'Nil';
}
// this represents a node in the list
// the name "cons" comes from Lisp, it is short for "construct"??
export interface Cons<A> {
    _tag: 'Cons';
    head: A;
    tail: List<A>;
}

export const nil: List<never> = { _tag: 'Nil' };
export const cons = <A>(head: A, tail: List<A>): List<A> => ({
     _tag: 'Cons', 
     head, 
     tail 
});

// x is Nil is a type guard
export const isNil = <A>(x: List<A>): x is Nil => x._tag === 'Nil';

// 1 -> 2 -> 3 -> Nil
const myList = cons(1, cons(2, cons(3, nil)));
console.log(JSON.stringify(myList, null, 2));

type ShowList = <A>(list: List<A>) => string;
const showList: ShowList = (list) => {
    if (isNil(list)) {
        return 'Nil';
    } else {
        return `${list.head} -> ${showList(list.tail)}`;
    }
};
console.log(showList(myList));