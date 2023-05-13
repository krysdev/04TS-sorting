class Sorter {
  // these 4 lines are equivalent of the 1 below (type + initialize)
  // collection: number[];
  // constructor(collection: number[]) {
  //   this.collection = collection;
  // }

  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection;

    // sorting algorithm (bubble sort)

    // array of numbers (not for strings)
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // compare the elements
        if (this.collection[j] > this.collection[j + 1]) {
          // swap the elements
          const leftElement = this.collection[j];
          this.collection[j] = this.collection[j + 1]; // take the right element and move it to the left side
          this.collection[j + 1] = leftElement; // take the left el and move it to the left
        }
      }
    }
    //
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
