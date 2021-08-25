"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numCollection.sort();
console.log(numCollection.data);
var charCollection = new CharactersCollection_1.CharactersCollection("JamesWilliamGary");
charCollection.sort();
console.log(charCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(-5);
linkedList.add(400);
linkedList.add(30);
linkedList.add(-2);
linkedList.add(1);
linkedList.add(100);
linkedList.sort();
linkedList.print();
