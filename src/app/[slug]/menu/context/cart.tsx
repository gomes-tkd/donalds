"use client";
import React from "react";
import { Product } from "@prisma/client";

interface CardProduct extends Product{
    quantity: number;
}

export interface ICartContext {
    isOpen: boolean;
    products: CardProduct[];
    toggleCart: () => void;
}

export const CartContext = React.createContext<ICartContext>({
    isOpen: false,
    products: [],
    toggleCart: () => {}
});

export function CardProvider({ children }: { children: React.ReactNode}) {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [products, setProducts] = React.useState<CardProduct[]>([]);

    function toggleCart() {
        setIsOpen(prev => !prev);
    }

    return (
        <CartContext.Provider value={{ isOpen, products, toggleCart }}>
            { children }
        </CartContext.Provider>
    )
}