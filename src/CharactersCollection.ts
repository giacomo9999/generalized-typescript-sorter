export class CharactersCollection {
  constructor(public data: string) {}
  
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const leftChar = this.data[leftIndex].toLowerCase();
    const rightChar = this.data[rightIndex].toLowerCase();
    return leftChar.charCodeAt(0) > rightChar.charCodeAt(0);
  }

  swap(leftIndex: number, rightIndex: number): void {
    const splitData = this.data.split("");
    const leftHand = splitData[leftIndex];
    splitData[leftIndex] = splitData[rightIndex];
    splitData[rightIndex] = leftHand;
    this.data = splitData.join("");
  }
}
