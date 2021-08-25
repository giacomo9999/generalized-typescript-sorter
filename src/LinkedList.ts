import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    if (!this.head) return 0;
    let listLength = 1;
    let currentNode = this.head;
    while (currentNode.next) {
      listLength += 1;
      currentNode = currentNode.next;
    }
    return listLength;
  }

  at(index: number): Node {
    if (!this.head) throw new Error("Error: Index Out Of Bounds - Empty List");
    let counter = 0;

    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      } else {
        counter += 1;
        node = node.next;
      }
    }
    throw new Error("Error: Index Out Of Bounds.");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) throw new Error("List has a length of zero.");
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const tempVal = this.at(leftIndex).data;
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = tempVal;
  }

  print(): void {
    if (!this.head) throw new Error("List has a length of zero.");
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
