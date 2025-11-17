import React from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import {CartContext} from "@/app/[slug]/menu/context/cart";
import CartItem from "@/components/cart-item";
import { Button } from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import formatCurrency from "@/lib/format-currency";

export default function CardSheet() {
    const { isOpen, toggleCart, products, total } = React.useContext(CartContext);

    return (
        <Sheet open={isOpen} onOpenChange={toggleCart}>
            <SheetContent className={"w-[80%]"}>
                <SheetHeader>
                    <SheetTitle>Sacola</SheetTitle>
                </SheetHeader>
                <div className={"flex h-full flex-col gap-y-1"}>
                    {products.length > 0 && products.map(product => (
                        <CartItem key={product.id} item={product} />
                    ))}
                    <Card className={"mb-6"}>
                        <CardContent className={"p-5"}>
                            <div className={"flex justify-between"}>
                                <p className={"text-sm text-muted-foreground"}>Total</p>
                                <p className={"text-sm font-semibold"}>
                                    {formatCurrency(total)}
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Button className={"cursor-pointer mx-3"}>
                        Finalizar pedido
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    );
}