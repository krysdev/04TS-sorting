class Sorter {
  // these 4 lines are equivalent of the 1 below (type + initialize)
  // collection: number[];
  // constructor(collection: number[]) {
  //   this.collection = collection;
  // }

  constructor(public collection: number[]) {}

  sort(): void {}
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
