import { GildedRose, Item } from ".";
import runGoldenMaster from "jest-golden-master";

describe("Gilded Rose", function () {
    it("should foo", function () {
        runGoldenMaster(async () => {
            const gildedRose = new GildedRose([new Item("foo", 0, 0)]);

            gildedRose.updateQuality();
        });
    });
});