import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numCollection = new NumbersCollection([10, 3, -5, 0]);
numCollection.sort();
console.log(numCollection.data);

const charCollection = new CharactersCollection("JamesWilliamGary");
charCollection.sort();
console.log(charCollection.data);

const linkedList = new LinkedList();
linkedList.add(-5);
linkedList.add(400);
linkedList.add(30);
linkedList.add(-2);
linkedList.add(1);
linkedList.add(100);
linkedList.sort();

linkedList.print();
