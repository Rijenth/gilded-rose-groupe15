/*
export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      console.log('Mise à jour du produit');

      if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
        console.log('Le produit n\'est ni Aged Brie ni Backstage passes');

        if (this.items[i].quality > 0) {
          console.log('La qualité du produit est supérieure à 0');

          if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
            console.log('Le produit n\'est pas Sulfuras, réduction de la qualité');
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        console.log('Le produit est soit Aged Brie, soit Backstage passes');

        if (this.items[i].quality < 50) {
          console.log('La qualité du produit est inférieure à 50, augmentation de la qualité');
          this.items[i].quality = this.items[i].quality + 1;

          if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
            console.log('Le produit est Backstage passes');

            if (this.items[i].sellIn < 11) {
              console.log('SellIn est inférieur à 11');

              if (this.items[i].quality < 50) {
                console.log('La qualité est inférieure à 50, augmentation de la qualité');
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              console.log('SellIn est inférieur à 6');

              if (this.items[i].quality < 50) {
                console.log('La qualité est inférieure à 50, augmentation de la qualité encore une fois');
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }

      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        console.log('Le produit n\'est pas Sulfuras, réduction de SellIn');
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }

      if (this.items[i].sellIn < 0) {
        console.log('SellIn est inférieur à 0');

        if (this.items[i].name != "Aged Brie") {
          console.log('Le produit n\'est pas Aged Brie');

          if (this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
            console.log('Le produit n\'est ni Aged Brie ni Backstage passes');

            if (this.items[i].quality > 0) {
              console.log('La qualité est supérieure à 0');

              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                console.log('Le produit n\'est pas Sulfuras, réduction de la qualité');
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            console.log('Le produit est Backstage passes après le concert, mise à 0 de la qualité');
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          console.log('Le produit est Aged Brie');

          if (this.items[i].quality < 50) {
            console.log('La qualité est inférieure à 50, augmentation de la qualité');
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }

      console.log('Produit mis à jour');
    }

    return this.items;
  }
}*/

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {
      console.log('Mise à jour du produit');

      switch (item.name) {
        case "Aged Brie":
          this.updateAgedBrie(item);
          break;
        case "Sulfuras, Hand of Ragnaros":
          console.log("Le produit n'est ni Aged Brie ni Backstage passes");
          console.log("La qualité du produit est supérieure à 0");
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.updateBackstagePasses(item);
          break;
        case "Conjured Mana Cake":
          this.updateConjured(item);
          break;
        default:
          this.updateNormalItem(item);
          break;
      }
      this.updateSellIn(item);
      console.log('Produit mis à jour');
    });

    return this.items;
  }


  updateAgedBrie(item: Item) {
    console.log('Le produit est soit Aged Brie, soit Backstage passes');
    if (item.quality < 50) {
      console.log('La qualité du produit est inférieure à 50, augmentation de la qualité');
      item.quality++;
    }
  }

  updateBackstagePasses(item: Item) {
    console.log('Le produit est soit Aged Brie, soit Backstage passes');
    if (item.sellIn <= 0) {
      item.quality = 0;
    } else {
      if (item.quality < 50) {
        console.log('La qualité du produit est inférieure à 50, augmentation de la qualité');
        item.quality++;

        console.log('Le produit est Backstage passes');

        if (item.sellIn <= 5) {
          console.log('SellIn est inférieur à 6');
          if (item.quality < 50) {
            console.log('La qualité est inférieure à 50, augmentation de la qualité encore une fois');
            item.quality++;
          }
        } else if (item.sellIn <= 10) {
          console.log('SellIn est inférieur à 11');
          if (item.quality < 50) {
            console.log('La qualité est inférieure à 50, augmentation de la qualité');
            item.quality++;
          }
        }
      }
    }
  }

  updateConjured(item: Item) {
    console.log('Le produit n\'est ni Aged Brie ni Backstage passes');
    if (item.quality > 0) {
      console.log('La qualité du produit est supérieure à 0');
      console.log('Le produit n\'est pas Sulfuras, réduction de la qualité');
      item.quality = Math.max(item.quality - 2, 0);
    }
  }

  updateNormalItem(item: Item) {
    console.log('Le produit n\'est ni Aged Brie ni Backstage passes');
    if (item.quality > 0) {
      console.log('La qualité du produit est supérieure à 0');
      console.log('Le produit n\'est pas Sulfuras, réduction de la qualité');
      item.quality = item.sellIn <= 0 ? Math.max(item.quality - 2, 0) : Math.max(item.quality - 1, 0);
    }
  }

  updateSellIn(item: Item) {
    if (item.name !== "Sulfuras, Hand of Ragnaros") {
      console.log('Le produit n\'est pas Sulfuras, réduction de SellIn');
      item.sellIn--;
    }
  }
}

