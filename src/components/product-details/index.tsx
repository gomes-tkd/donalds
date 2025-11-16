"use client";
import React from "react";
import Image from "next/image";
import { Prisma } from "@prisma/client";
import formatCurrency from "@/lib/format-currency";
import { Button } from "@/components/ui/button";
import { ChefHatIcon, ChevronLeftIcon, ChevronRight } from "lucide-react";
import {ScrollArea} from "@/components/ui/scroll-area";

interface ProductDetailsProps {
    product: Prisma.ProductGetPayload<{
        include: {
            restaurant: {
                select: {
                    name: true,
                    avatarImageUrl: true
                }
            }
        }
    }>;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
    const [quantity, setQuantity] = React.useState<number>(0);

    function handleDecreaseQuantity() {
        setQuantity(prev => {
            if (prev <= 0) {
                return 0;
            }
            return prev - 1;
        });
    }

    function handleIncreaseQuantity() {
        setQuantity(prev => prev + 1);
    }

    return (
        <div className={"flex flex-col relative z-50 pt-[-1.5rem] rounded-t-3xl p-5 overflow-hidden"}>
            <div className={"flex-auto overflow-hidden"}>
                <div className={"flex items-center gap-1.5"}>
                    <Image
                        src={product.restaurant.avatarImageUrl}
                        alt={product.restaurant.name}
                        width={16}
                        height={16}
                        className={"rounded-full"}
                    />
                    <p className={"text-xs text-muted-foreground"}>
                        {product.restaurant.name}
                    </p>
                </div>

                <h2 className={"text-xl font-semibold mt-1"}>{product.restaurant.name}</h2>

                <div className={"flex mt-3 items-center justify-between"}>
                    <h3 className={"text-xl font-semibold"}>
                        {formatCurrency(product.price)}
                    </h3>

                    <div className={"flex items-center gap-3 text-center"}>
                        <Button
                            onClick={handleDecreaseQuantity}
                            variant={"outline"}
                            className={"cursor-pointer h-8 w-8 rounded-xl"}
                            disabled={quantity <= 0}
                        >
                            <ChevronLeftIcon />
                        </Button>
                        <p className={"w-4 border-border rounded-xs bg-gray-100"}>{quantity}</p>
                        <Button
                            variant={"destructive"}
                            className={"cursor-pointer h-8 w-8 rounded-xl"}
                            onClick={handleIncreaseQuantity}
                        >
                            <ChevronRight />
                        </Button>
                    </div>
                </div>

                <ScrollArea className={"w-full"}>
                    <div className={"mt-6 space-y-3"}>
                        <h4 className={"font-semibold"}>Sobre</h4>
                        <p className={"text-sm text-muted-foreground"}>{product.description}</p>
                    </div>

                    <div className={"mt-6 space-y-3"}>
                        <div className={"flex items-center gap-1"}>
                            <ChefHatIcon size={18} />
                            <h4 className={"font-semibold"}>Ingredientes</h4>
                        </div>
                        <ul className={"list-disc px-5 text-sm text-muted-foreground"}>
                            {product.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                </ScrollArea>
            </div>

            <Button className={"cursor-pointer w-full rounded-full mt-6"}>
                Adicionar à sacola
            </Button>
        </div>
    );
}
