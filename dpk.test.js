const { addZero } = require(".");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns correct hash when give 1 as input", () => {
    const trivialKey = deterministicPartitionKey(1);
    expect(trivialKey).toBe("ca2c70bc13298c5109ee0cb342d014906e6365249005fd4beee6f01aee44edb531231e98b50bf6810de6cf687882b09320fdd5f6375d1f2debd966fbf8d03efa");
  });

  it("Returns correct hash when give 50 as input", () => {
    const trivialKey = deterministicPartitionKey(50);
    expect(trivialKey).toBe("e55e36b58a817b0cc2729f0ffd22ac0d8ecf255abae0e545884b9508a68ece9c3e7fb7efff3c45913fc664668fa57b32e609abcdd439e9a8fd62fd8e1da738d6");
  });

  it("Returns correct hash when give partitionKey 500 as input", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 500 });
    expect(trivialKey).toBe("500");
  });

  it("Returns the correct hash when given the one thousand digit partition key as input", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: addZero(5, 1000) });
    expect(trivialKey).toBe("9f1216b4b4f6e2597e4205b7b22a80f3688f2be39acd19bcd9221150846ddc6d90b34176260e7cae3f9cff7b1cd5ccf87d60ad5d432c722e4cb226d9dcadd075");
  });
});
