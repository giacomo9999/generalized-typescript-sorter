import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";

const numCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numCollection);
sorter.sort();
console.log(numCollection.data);

const charCollection = new CharactersCollection("JamesWilliamGary");
const sorter2 = new Sorter(charCollection);
sorter2.sort();
console.log(charCollection.data);
