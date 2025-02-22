// imperative approach
function normal_sum_all(arr: number[]): number {
  let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result
}
console.log('normal_sum_all([1, 2, 3, 4, 5]) ==', normal_sum_all([1, 2, 3, 4, 5]));

type SumAll = (arr: number[]) => number;
const sum_all: SumAll = (arr) => {
    if (arr.length === 0) {
        return 0;
    }
    const [head, ...rest] = arr;
    return head + sum_all(rest);
}
console.log('sum_all([1, 2, 3, 4, 5]) ==', sum_all([1, 2, 3, 4, 5]));

const sum_all2: SumAll = (arr) => arr.length === 0 ? 0 : arr[0] + sum_all(arr.slice(1));
console.log('sum_all2([1, 2, 3, 4, 5]) ==', sum_all2([1, 2, 3, 4, 5]));