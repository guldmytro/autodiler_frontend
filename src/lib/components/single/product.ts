export interface Child {
    slug: string;
    parentSlug: string;
    parentCategorySlug: string;
    color: {
        name: string;
        hex_code: string;
    }
}

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
        slug: string;
        parents: {
            id: number;
            name_ua: string;
            name_ru: string;
        }[];
    };
    producer: string;
    country: string;
    vin: string | null;
    children?: Child[];
    siblings?: Child[];
    params: {
        name: string;
        units: string;
        value: string;
    }[];
}