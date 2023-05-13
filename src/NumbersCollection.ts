// 1. only for array of numbers

export class NumbersCollection {
  // these 4 lines are equivalent of the 1 below (type + initialize)
  // data: number[];
  // constructor(data: number[]) {
  //   this.data = data;
  // }
  constructor(public data: number[]) {}

  // getter/accessor
  get length(): number {
    return this.data.length;
  }

  // method to compare two elements (using bubble sort logic)
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]; // returns true or false
  }

  // method to swap if compare true
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex]; // take the right element and move it to the left side
    this.data[rightIndex] = leftHand; // take the left el and move it to the right
  }
}
