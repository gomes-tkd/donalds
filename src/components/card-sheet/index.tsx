import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import {CartContext} from "@/app/[slug]/menu/context/cart";

export default function CardSheet() {
    const { isOpen, toggleCart, products } = React.useContext(CartContext);

    return (
        <Sheet open={isOpen} onOpenChange={toggleCart}>
            <SheetTrigger></SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        asdasda
                    </SheetDescription>
                </SheetHeader>
                {products.length > 0 && products.map(product => (
                    <h1 key={product.id}>{product.name}: {product.quantity}</h1>
                ))}
            </SheetContent>
        </Sheet>
    );
}