export class Goodie {
    name: string;
    price: number;
    image: string;

    constructor(name: string, price: number, image: string) {
        this.name = name;
        this.price = price;
        this.image = image;
    }

    Buy(): void {
        Elon.giveProperty(this.name);
        Elon.Pay(this.price);
    }
}
