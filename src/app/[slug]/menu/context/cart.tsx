"use client";
import React from "react";
import { Product } from "@prisma/client";

export interface CardProduct
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
    decreaseProductQuantity: (productId: string) => void;
    increaseProductQuantity: (productId: string) => void;
    removeProductFromCart: (productId: string) => void;
}

export const CartContext = React.createContext<ICartContext>({
    isOpen: false,
    products: [],
    toggleCart: () => {},
    addProductToCart: () => {},
    decreaseProductQuantity: () => {},
    increaseProductQuantity: () => {},
    removeProductFromCart: () => {}
});

export function CardProvider({ children }: { children: React.ReactNode}) {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [products, setProducts] = React.useState<CardProduct[]>([]);

    function toggleCart() {
        setIsOpen(prev => !prev);
    }

    function addProductToCart(product: CardProduct) {
        const isProductAlreadyInCart = products.some(p => p.id === product.id);

        if (!isProductAlreadyInCart) {
            return setProducts(prev => [...prev, product]);
        }

        setProducts(prev => {
            return prev.map(p => {
                if (p.id === product.id) {
                    return {
                        ...p,
                        quantity: p.quantity + product.quantity
                    };
                }
                return p;
            });
        });
    }

    function increaseProductQuantity(productId: string) {
        setProducts(prevProducts => {
            return prevProducts.map(product => {
                if (product.id !== productId) {
                    return product;
                }

                return {
                    ...product,
                    quantity: product.quantity + 1
                };
            });
        });
    }

    function decreaseProductQuantity(productId: string) {
        setProducts(prevProducts => prevProducts.map(product => {
                if (product.id !== productId) {
                    return product;
                }

                if (product.quantity === 1) {
                    return product;
                }
                return {
                    ...product,
                    quantity: product.quantity - 1
                };
            }
        ));
    }

    function removeProductFromCart(productId: string) {
        setProducts(prevProducts => prevProducts.filter(product => (
            product.id !== productId
        )));
    }

    return (
        <CartContext.Provider value={{
            isOpen, products,
            toggleCart, addProductToCart,
            decreaseProductQuantity, increaseProductQuantity,
            removeProductFromCart
        }}>
            { children }
        </CartContext.Provider>
    )
}