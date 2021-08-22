"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        var leftChar = this.data[leftIndex].toLowerCase();
        var rightChar = this.data[rightIndex].toLowerCase();
        return leftChar.charCodeAt(0) > rightChar.charCodeAt(0);
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var splitData = this.data.split("");
        var leftHand = splitData[leftIndex];
        splitData[leftIndex] = splitData[rightIndex];
        splitData[rightIndex] = leftHand;
        this.data = splitData.join("");
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
