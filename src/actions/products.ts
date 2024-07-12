"use server";

import { Product } from "@/types";
import { headers } from "next/headers";
import { NextRequest } from "next/server";

const url = process.env.url
export async function getProducts() {
    const products = await fetch(`${url}/data.json`, { cache: 'no-store' }).then((res) => res.json())

    return products
}
export async function getProductByCategory(category: string) {
    const products = await fetch(`${url}/data.json`, { cache: 'no-store' })
        .then((res) => res.json())
        .then((data: Product[]) => data
            .filter((product: Product) => product.category === category.toLocaleLowerCase())
            .sort((a, b) => b.id - a.id));
    return products
}
export async function getProductBySlug(slug: string) {
    const products = await fetch(`${url}/data.json`, { cache: 'no-store' })
        .then((res) => res.json())
        .then((data: Product[]) => data
            .find((product: Product) => product.slug === slug.toLocaleLowerCase()));
    return products
}


