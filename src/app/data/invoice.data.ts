import { Invoice } from "../models/invoice";


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
        name: 'New Age',
        fiscalNumber: 123456,
    },
    items: [
        {
            id: 1,
            product: 'CPU Intel Core i5',
            quantity: 1,
            price: 599
        },
        {
            id: 2,
            product: 'Corsair teclado mecanico',
            quantity: 2,
            price: 299
        },
        {
            id: 3,
            product: 'Monitor Asus 24 pulgadas',
            quantity: 3,
            price: 189
        },
    ]
}