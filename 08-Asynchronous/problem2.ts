interface ObjItem {
  item: string;
  price: number;
  time: number;
}

const clothes: ObjItem = {
  item: "clothes",
  price: 15000,
  time: 3000,
};

const pants: ObjItem = {
  item: "pants",
  price: 25000,
  time: 7000,
};

const hat: ObjItem = {
  item: "hat",
  price: 22000,
  time: 2000,
};

const shoes: ObjItem = {
  item: "shoes",
  price: 46000,
  time: 10000,
};

function buyApparel(
  money: number,
  objItem: ObjItem,
  callback: (money: number) => void
): void {
  // your code here
}

export default buyApparel;
