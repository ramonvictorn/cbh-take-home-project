const {deterministicPartitionKey} = require("./dpk");


const addZero = function(originalNumber, size) {
    let number = String(originalNumber);
    while (number.length < (size || 2)) {number = number + "0";}
    return number;
}

// console.log(deterministicPartitionKey({ partitionKey: addZero(5, 1000) }));

module.exports = {
    addZero
}