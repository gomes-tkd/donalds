import React from "react";
import Image from "next/image";
import { CardProduct } from "@/app/[slug]/menu/context/cart";
import formatCurrency from "@/lib/format-currency";
import {Button} from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";

interface CartItemProps {
    item: CardProduct;
}

export default function CartItem({ item }: CartItemProps) {
    return (
        <div className={"flex items-center justify-between px-6"}>
            <div className={"flex items-center gap-3"}>
                <div className={"relative h-20 w-20 bg-gray-200 rounded-lg"}>
                    <Image src={item.imageUrl} alt={item.name} fill className={"object-contain"} />
                </div>

                <div className={"space-y-1 max-w-[150px]"}>
                    <p className={"text-sm max-w-[90%] truncate text-ellipsis"}>{ item.name }</p>
                    <p className={"text-sm font-semibold"}>{ formatCurrency(item.price) }</p>

                    <div className={"flex items-center text-center"}>
                        <Button variant={"outline"} className={"w-7 h-7 rounded-lg"}>
                            <ChevronLeftIcon />
                        </Button>
                        <p className={"text-xs w-8"}>{item.quantity}</p>
                        <Button variant={"default"} className={"w-7 h-7 rounded-lg"}>
                            <ChevronRightIcon />
                        </Button>
                    </div>
                </div>
            </div>

            <div className={"flex items-center gap-3"}>
                <Button className={"h-7 w-7 rounded-lg"} variant={"outline"}>
                    <TrashIcon />
                </Button>
            </div>
        </div>
    );
}