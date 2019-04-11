/**
 * The Goodie class.
 */
export class Goodie {

    /**
     * The id of the goodie.
     */
    id: number;

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
     * @param id The id of the goodie.
     * @param name The name of the goodie.
     * @param price The price of the goodie.
     * @param image The image url of the goodie.
     */
    constructor(id: number, name: string, price: number, image: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }
}
