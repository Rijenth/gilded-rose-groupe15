import { GildedRose, Item } from ".";
import runGoldenMaster from "jest-golden-master";

describe("Gilded Rose", function () {

  it("Test normal item", function () {
    runGoldenMaster(async () => {
      const gildedRose = new GildedRose([new Item("Normal Item", 10, 20)]);
      gildedRose.updateQuality();
    });
  });

  it("Test Aged Brie", function () {
    runGoldenMaster(async () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", 10, 20)]);
      gildedRose.updateQuality();
    });
  });

  it("Test Sulfuras", function () {
    runGoldenMaster(async () => {
      const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 10, 80)]);
      gildedRose.updateQuality();
    });
  });

  it("Test Backstage passes", function () {
    runGoldenMaster(async () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)]);
      gildedRose.updateQuality();
    });
  });

  // Assuming that Conjured items have a name starting with "Conjured"
  it("Test Conjured items", function () {
    runGoldenMaster(async () => {
      const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 10, 20)]);
      gildedRose.updateQuality();
    });
  });

});