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

        
    }
}
