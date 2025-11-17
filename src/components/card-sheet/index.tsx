import React from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import {CartContext} from "@/app/[slug]/menu/context/cart";
import CartItem from "@/components/cart-item";

export default function CardSheet() {
    const { isOpen, toggleCart, products } = React.useContext(CartContext);

    return (
        <Sheet open={isOpen} onOpenChange={toggleCart}>
            <SheetContent className={"w-[80%]"}>
                <SheetHeader>
                    <SheetTitle>Sacola</SheetTitle>
                </SheetHeader>
                {/*<div className={"py-5"}>*/}
                    {products.length > 0 && products.map(product => (
                        <CartItem key={product.id} item={product} />
                    ))}
                {/*</div>*/}
            </SheetContent>
        </Sheet>
    );
}