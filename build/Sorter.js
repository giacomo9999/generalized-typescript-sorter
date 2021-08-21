"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var leftHand;
        for (var i = 0; i < this.collection.length; i++) {
            for (var j = 0; j < this.collection.length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
                console.log(i, j, this.collection.data);
            }
        }
        return this.collection.data;
    };
    return Sorter;
}());
exports.Sorter = Sorter;
