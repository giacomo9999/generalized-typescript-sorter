import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numCollection);
sorter.sort();
console.log(sorter.collection.data);
