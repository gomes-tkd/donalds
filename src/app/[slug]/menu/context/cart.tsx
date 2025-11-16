"use client";
import React from "react";
import { Product } from "@prisma/client";

interface CardProduct
    extends Pick<Product, "name" | "price" | "id" | "imageUrl">
{
    name: string;
    quantity: number;
}

export interface ICartContext {
    isOpen: boolean;
    products: CardProduct[];
    toggleCart: () => void;
    addProductToCart: (product: CardProduct) => void;
}

export const CartContext = React.createContext<ICartContext>({
    isOpen: false,
    products: [],
    toggleCart: () => {},
    addProductToCart: () => {}
});

export function CardProvider({ children }: { children: React.ReactNode}) {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [products, setProducts] = React.useState<CardProduct[]>([]);

    function toggleCart() {
        setIsOpen(prev => !prev);
    }

    function addProductToCart(product: CardProduct) {
        setProducts(prev => [...prev, product]);
    }

    return (
        <CartContext.Provider value={{ isOpen, products, toggleCart, addProductToCart }}>
            { children }
        </CartContext.Provider>
    )
}