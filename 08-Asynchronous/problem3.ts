function lottery(num: number): Promise<string> {
  // your code here
}

lottery(5)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("undian lotre telah berakhir…"));

export default lottery;
