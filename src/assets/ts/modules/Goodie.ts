/**
 * The Goodie class.
 */
export class Goodie {

    /**
     * The name of the goodie.
     */
    name: string;

    /**
     * The price of the goodie.
     */
    price: number;

    /**
     * The image url of the goodie.
     */
    image: string;

    /**
     * Creating a new goodie.
     * 
     * @param name The name of the goodie.
     * @param price The price of the goodie.
     * @param image The image url of the goodie.
     */
    constructor(name: string, price: number, image: string) {
        this.name = name;
        this.price = price;
        this.image = image;
    }
}
