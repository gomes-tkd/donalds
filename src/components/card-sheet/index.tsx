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
    const { isOpen, toggleCart } = React.useContext(CartContext);

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
            </SheetContent>
        </Sheet>
    );
}