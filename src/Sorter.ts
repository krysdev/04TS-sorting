// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }

// 'Sorter' acts as an abstract class here
export abstract class Sorter {
  // we don't need a 'constructor()', as the abstract class can't create an instance

  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number; // length is a getter, so we treat it as it was a property, and not the method with '()'

  sort(): void {
    const { length } = this;

    // general sorting algorithm (bubble sort)
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          // compare elements
          this.swap(j, j + 1); // swap the elements if needed
        }
      }
    }
  }
}
