export class Item {
    id?: number;
    product?: string;
    quantity?: number;
    price?: number;

    constructor(data: Partial<Item> = {}) {
        this.id = data.id;
        this.product = data.product;
        this.quantity = data.quantity;
        this.price = data.price;
    }
    total(): number {
        return (this.price ?? 0) * (this.quantity ?? 0);
    }
}