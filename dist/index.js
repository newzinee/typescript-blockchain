"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CrpytoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CrpytoJS.SHA256(index + previousHash + timestamp + data).toString();
const genesisBlock = new Block(0, "202003", "", "Hello", 123456);
let blockchain = [genesisBlock];
console.log(blockchain);
const getBlockchain = () => blockchain;
const getLastestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLastestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    return newBlock;
};
console.log(createNewBlock("hi"), createNewBlock("bye bye"));
//# sourceMappingURL=index.js.map