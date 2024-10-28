// Типизация объекта

type Product = {
    id: number,
    sku: string,
    title: string,
    price: number,
    special_price?: number,
    discount?: number,
    qty: number
}

const obj: {
    "id": number
    "customer": {
        "id": string,
        "is_customer": boolean,
        "first_name": string,
        "last_name": string,
        "loaylity_level": string,
        "bonus_amount": number
    },
    "products": Product[],
    "quote": string,
    "totals": {
        "shipping": string,
        "discount": string,
        "subtotal": string,
        "total": string
    }
}

// Типизация метода

function printTotal(total: (number | string), amount: (number | string)): string {
    return `${total}: ${amount}`;
}

// Типизация массива

type User = {
    name: string,
    age: number,
    date_of_birth: string,
}

type Callback = () => void;

const array: (User | string | number | boolean | Callback)[];
