import { Goodie } from "./Goodie";

/**
 * The Property class.
 */
export class Property {

    /**
     * The goodie.
     */
    goodie: Goodie = null;

    /**
     * The quanity.
     */
    quantity: number = 0;

    /**
     * Creating a new property.
     * 
     * @param goodie The goodie.
     * @param quantity The quantity.
     */
    constructor(goodie: Goodie, quantity: number) {
        this.goodie = goodie;
        this.quantity = quantity;
    }
}
