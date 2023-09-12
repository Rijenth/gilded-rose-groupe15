import { GildedRose, Item } from ".";
import runGoldenMaster from "jest-golden-master";

describe("Gilded Rose", function () {
    it("Gilded Rose updateQuality without items", function () {
        runGoldenMaster(async () => {
            const gildedRose = new GildedRose();

            gildedRose.updateQuality();
        });
    });

    it("Gilded Rose updateQuality with one item with sellIn = 0", function () {
        runGoldenMaster(async () => {
            const gildedRose = new GildedRose([new Item("Cheese", 0, 2)]);

            gildedRose.updateQuality();
        });
    });

    it("Gilded Rose updateQuality with one item with quality = 0", function () {
        runGoldenMaster(async () => {
            const gildedRose = new GildedRose([new Item("Cheese", 2, 0)]);

            gildedRose.updateQuality();
        });
    });

    it("Gilded Rose updateQuality with one Aged Brie with sellIn = 0", function () {
        runGoldenMaster(async () => {
            const gildedRose = new GildedRose([new Item("Aged Brie", 0, 10)]);

            gildedRose.updateQuality();
        });
    });

    it("Gilded Rose updateQuality with one Backstage passes to a TAFKAL80ETC concert with sellIn = 0", function () {
        runGoldenMaster(async () => {
            const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)]);

            gildedRose.updateQuality();
        });
    });

    it("Gilded Rose updateQuality with one Sulfuras, Hand of Ragnaros with sellIn = 0", function () {
        runGoldenMaster(async () => {
            const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 0, 50)]);

            gildedRose.updateQuality();
        });
    });

    it("Gilded Rose updateQuality with one Sulfuras, Hand of Ragnaros with sellIn > 0", function () {
        runGoldenMaster(async () => {
            const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 2, 50)]);

            gildedRose.updateQuality();
        });
    });
});