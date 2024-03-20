export interface Product {
    cnt: any;
    product: any;
    id: number;
    sku: string;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    category: {
        id: number;
        name_ua: string;
        name_ru: string;
        parents: {
            id: number;
            name_ua: string;
            name_ru: string;
        }[];
    };
    producer: string;
    country: string;
    params: {
        name: string;
        units: string;
        value: string;
    }[];
}