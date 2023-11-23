function caesarCipher(offset: number, input: string): string {
  // your code here
}

console.log(caesarCipher(3, "abc")); // def
console.log(caesarCipher(2, "alta")); // cnvc
console.log(caesarCipher(10, "alterraacademy")); // kvdobbkkmknowi
console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz")); // bcdefghijklmnopqrstuvwxyza
console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz")); // mnopqrstuvwxyzabcdefghijkl

export default caesarCipher;
