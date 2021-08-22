"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var Sorter_1 = require("./Sorter");
var numCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var sorter = new Sorter_1.Sorter(numCollection);
sorter.sort();
console.log(numCollection.data);
var charCollection = new CharactersCollection_1.CharactersCollection("JamesWilliamGary");
var sorter2 = new Sorter_1.Sorter(charCollection);
sorter2.sort();
console.log(charCollection.data);
