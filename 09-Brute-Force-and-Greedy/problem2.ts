function dragonOfLoowater(
  dragonHead: number[],
  knightHeight: number[]
): number | string {
  // your code here
}

console.log(dragonOfLoowater([5, 4], [7, 8, 4])); // 11
console.log(dragonOfLoowater([5, 10], [5])); // knight fall
console.log(dragonOfLoowater([7, 2], [4, 3, 1, 2])); // knight fall
console.log(dragonOfLoowater([7, 2], [2, 1, 8, 5])); // 10

export default dragonOfLoowater;
