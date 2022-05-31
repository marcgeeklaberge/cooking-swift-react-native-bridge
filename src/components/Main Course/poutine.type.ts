export class PoutineFactory {
    public static createPoutine(type?: PoutinesSpecialties) : Poutine {
        if (type === PoutinesSpecialties.MARC_LABERGE) {
            return {
                potatoes: Potatoes.CRUSHED,
                sauce: Sauce.REGULAR,
                spicyLevel: 1,
                cheeses: Cheeses.CURDS,
                extraCheeses: Cheeses.MOZZARELLA,
                meats: [Meats.BACON, Meats.STEACK],
                vegetables: [Vegetables.GUACAMOLE, Vegetables.MUSHROOMS]
            };
        }
        // Classic poutine by default
        return {
            potatoes: Potatoes.REGULAR,
            sauce: Sauce.REGULAR,
            cheeses: Cheeses.CURDS,
            spicyLevel: 0
        };
    }
}

export interface Poutine {
    potatoes: Potatoes;
    sauce: Sauce;
    cheeses: Cheeses;
    spicyLevel: SpicyLevel;
    extraCheeses?: Cheeses;
    vegetables?: Vegetables[];
    meats?: Meats[];
}

export enum PoutinesSpecialties {
    CLASSIC = "Classic's",
    MARC_LABERGE = "Marc Laberge's"
}

export enum Potatoes {
    REGULAR = "regular",
    CRUSHED = "crushed",
    JULIENNE = "julienne",
    SWEET = "sweet"
}

export enum Cheeses {
    CURDS = "curds",
    MOZZARELLA = "mozzarella",
    SWISS = "swiss",
    CHEDDAR = "cheddar",
    BRIE = "brie",
    FETA = "feta",
    BLUE = "blue",
    GOAT = "goat",
    NON_DAIRY = "non dairy"
}

export enum Vegetables {
    TOMATOES = "tomatoes",
    ONIONS = "onions",
    MUSHROOMS = "mushrooms",
    COLESLAWS = "coleslaws",
    CORN = "corn",
    GUACAMOLE = "guacamole"
}

export enum Meats {
    SAUSAGES = "sausages",
    BACON = "bacon",
    BEEF = "beef",
    PEPPERONI = "pepporoni",
    HAM = "ham",
    STEACK = "steak",
    CHIKEN = "chiken",
    PORK = "pork"
}

export enum Sauce {
    REGULAR = "regular",
    PEPPER = "pepper",
    SPICY = "spicy",
    TOMATO = "tomato"
}

type SpicyLevel = 0 | 1 | 2 | 3 | 4 | 5