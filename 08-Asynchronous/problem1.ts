function jajanBoba(uang: number, callback: (uang: number) => void): void {
  // your code here
}

function jajanSeblak(uang: number): void {
  // your code here
}

jajanBoba(20000, jajanSeblak);
jajanBoba(10000, jajanSeblak);

export { jajanBoba, jajanSeblak };
