import { Property } from "./Property";
import { Goodie } from "./Goodie";

/**
 * Elon Musk's class.
 */
export class Elon {

    /**
     * Elon Musk's networth.
     */
    static readonly netWorth: number = 19600000000.00;

    /**
     * Elon's balance.
     */
    static money: number = Elon.netWorth;

    /**
     * Elon's properties.
     */
    static properties: Property[] = [];

    /**
     * Buy a goodie.
     * @param goodie The goodie to buy.
     */
    static buy(goodie: Goodie) {

        if (goodie.price < this.money) {

            this.money -= goodie.price;
            this.addProperty(goodie);
        }
    }

    /**
     * Check if Elon has a said property.
     * 
     * @param goodie The goodie to check the availability for.
     */
    static hasProperty(goodie: Goodie) {

        let hasProp: boolean = false;

        this.properties.forEach((property: Property) => {

            if (property.goodie.id === goodie.id) {
                hasProp = true;
            }
        });

        return hasProp;
    }

    /**
     * Adding a new property.
     * 
     * @param goodie The goodie to add as a property.
     */
    static addProperty(goodie: Goodie) {

        if (this.hasProperty(goodie)) {

            this.properties.forEach((property: Property) => {

                if (property.goodie.id === goodie.id) {
                    property.quantity++;
                }
            });
        } else {
            this.properties.push(new Property(goodie, 1));
        }
    }
}
