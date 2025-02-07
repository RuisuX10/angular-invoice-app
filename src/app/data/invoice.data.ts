import { Invoice } from "../models/invoice";
import { Item } from "../models/item";


export const invoiceData: Invoice = {
    id: 1,
    name: 'Componentes PC',
    client: {
        name: 'Andres',
        lastName: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One street',
            number: 845
        }
    },
    company: {
        name: 'New Age S.A.',
        fiscalNumber: 123456,
    },
    items: [
        new Item({
            id: 1,
            product: 'CPU Intel Core i5',
            quantity: 2,
            price: 599
        }),
        new Item({
            id: 2,
            product: 'Corsair teclado mecanico',
            quantity: 2,
            price: 299
        }),
        new Item({
            id: 3,
            product: 'Monitor Asus 24 pulgadas',
            quantity: 3,
            price: 189
        }),
    ]
}