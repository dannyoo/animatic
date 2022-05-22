const { assert } = require("chai");

const Animatic = artifacts.require("./Animatic.sol");

require("chai").use(require("chai-as-promised")).should();

contract("Animatic", ([deployer, author, tipper]) => {
  let animatic;
  before(async () => {
    animatic = await Animatic.deployed();
  });

  describe("deployment", () => {
    it("should be an instance of Animatic", async () => {
      const address = await animatic.address;
      assert.notEqual(address, null);
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, undefined);
    });

    it("should have the name", async () => {
      const name = await animatic.name();
      assert.equal(name, "Animatic");
    });
  });

  describe("Videos", () => {
    let result;
    const hash = "abcd1234";
    const description = "This is a test video";
    let videoCount;
    before(async () => {
      result = await animatic.uploadVideo(hash, description, {
        from: author,
      });
      videoCount = await animatic.videoCount();
    });

    it("Create Video", async () => {
      let video = await animatic.videos(1);
      assert.equal(videoCount, 1);
      const event = result.logs[0].args;
      assert.equal(event.hash, hash);
      assert.equal(event.description, description);
    });

    it("Allow users to tip", async () => {
      let oldAuthorBalance;
      oldAuthorBalance = await web3.eth.getBalance(author);
      oldAuthorBalance = new web3.utils.BN(oldAuthorBalance);
      result = await animatic.tipVideoOwner(videoCount, {
        from: tipper,
        value: web3.utils.toWei("1", "Ether"),
      });
      const event = result.logs[0].args;

      let newAuthorBalance;
      newAuthorBalance = await web3.eth.getBalance(author);
      newAuthorBalance = new web3.utils.BN(newAuthorBalance);

      let tipVideoOwner;
      tipVideoOwner = web3.utils.toWei("1", "Ether");
      tipVideoOwner = new web3.utils.BN(tipVideoOwner);

      const expactedBalance = oldAuthorBalance.add(tipVideoOwner);
      assert.equal(newAuthorBalance.toString(), expactedBalance.toString());
    });
  });
});
