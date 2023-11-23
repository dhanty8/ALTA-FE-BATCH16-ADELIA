function binarySearch(array: number[], x: number): number {
  // your code here
}

console.log(binarySearch([1, 1, 3, 5, 5, 6, 7], 3)); // 2
console.log(binarySearch([1, 2, 3, 5, 6, 8, 10], 5)); // 3
console.log(binarySearch([12, 15, 15, 19, 24, 31, 53, 59, 60], 53)); // 6
console.log(binarySearch([12, 15, 15, 19, 24, 31, 53, 59, 60], 100)); // -1

export default binarySearch;
