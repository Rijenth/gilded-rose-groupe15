export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items: Array<Item> = []) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      this.updateItemQuality(item);
    }

    return this.items;
  }

  private updateItemQuality(item: Item) {
    switch (item.name) {
      case "Aged Brie":
        this.updateAgedBrieQuality(item);
        break;
      case "Backstage passes to a TAFKAL80ETC concert":
        this.updateBackstagePassQuality(item);
        break;
      case "Sulfuras, Hand of Ragnaros":
        // Sulfuras n'a pas besoin de mise à jour
        break;
      default:
        this.updateDefaultItemQuality(item);
        break;
    }

    // Mettre à jour la date de péremption
    item.sellIn--;

    // Vérifier si la date de péremption a été atteinte et mettre à jour la qualité
    if (item.sellIn < 0) {
      if (item.name !== "Aged Brie" && item.name !== "Backstage passes to a TAFKAL80ETC concert") {
        this.updateDefaultItemQuality(item);
      } else {
        item.quality = 0;
      }
    }
  }

  private updateAgedBrieQuality(item: Item) {
    if (item.quality < 50) {
      item.quality++;
    }
  }

  private updateBackstagePassQuality(item: Item) {
    if (item.quality < 50) {
      item.quality++;

      if (item.sellIn < 11) {
        if (item.quality < 50) {
          item.quality++;
        }
      }

      if (item.sellIn < 6) {
        if (item.quality < 50) {
          item.quality++;
        }
      }
    }
  }

  private updateDefaultItemQuality(item: Item) {
    if (item.quality > 0) {
      item.quality--;
    }
  }
}
