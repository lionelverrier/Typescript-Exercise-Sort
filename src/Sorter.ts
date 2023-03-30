interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}

//this is an example of a wrong/not best way to solve this problem

// class Sorter {
//   constructor(public collection: number[] | string) {}

//   sort(): void {
//     const { length } = this.collection;

//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         // All of this only works if collection is number[]
//         // If collection is array of numbers
//         // the parent if statement is an example of a typeguard
//         // we used typeguards to restore access to a set of properties in a union type
//         if (this.collection instanceof Array) {
//           // typeof collectioon === number[]
//           if (this.collection[j] > this.collection[j + 1]) {
//             const leftHand = this.collection[j];
//             this.collection[j] = this.collection[j + 1];
//             this.collection[j + 1] = leftHand;
//           }
//           //only going to work if collection is a string
//           // If collection is string
//           //This is also a typeguard
//           if(typeof this.collection === 'string'){

//           }
//         }
//       }
//     }
//   }
// }
