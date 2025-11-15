"use client";
import React from "react";
import { Prisma } from "@prisma/client";
import Image from "next/image";
import { ClockIcon } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Products from "@/components/products";

interface CategoriesProps {
    restaurant: Prisma.RestaurantGetPayload<{
        include: {
            menuCategories: {
                include: { products: true }
            }
        }
    }>;
}

type MenuCategoriesWithProducts = Prisma.MenuCategoryGetPayload<{ include: { products: true } }>;

export default function Categories({ restaurant }: CategoriesProps) {
    const [selectedCategory, setSelectedCategory] = React.useState<MenuCategoriesWithProducts>(restaurant.menuCategories[0]);

    function handleCategoryClick(category: MenuCategoriesWithProducts) {
        setSelectedCategory(category);
    }

    function getCategoryButtonVariant(category: MenuCategoriesWithProducts) {
        return (category.id === selectedCategory.id) ? "default" : "secondary";
    }

    return (
        <div className={"relative z-50 mt-[-1.5rem] rounded-t-3xl bg-white"}>
            <div className={"p-5"}>
                <div className={"flex items-center gap-3"}>
                    <Image src={restaurant.avatarImageUrl} alt={restaurant.name} width={45} height={45} />
                    <h2 className={"text-lg font-semibold"}>{restaurant.name}</h2>
                    <p className={"text-xs opacity-55"}>{restaurant.description}</p>
                </div>

                <div className={"flex items-center gap-1 text-xs text-green-500 mt-3"}>
                    <ClockIcon size={12} />
                    <p>Aberto!</p>
                </div>
            </div>

            <ScrollArea className={"w-full h-[-1.5rem]"}>
                <div className={"flex w-max space-x-4 px-4 pt-0 mb-[1rem]"}>
                    {restaurant.menuCategories.map(category => (
                        <Button
                            key={category.id}
                            variant={getCategoryButtonVariant(category)}
                            size={"sm"}
                            onClick={() => handleCategoryClick(category)}
                            className={"cursor-pointer rounded-full"}
                        >
                            { category.name }
                        </Button>
                    ))}
                </div>
                <ScrollBar orientation={"horizontal"} />
            </ScrollArea>
            <h3 className={"px-5 font-semibold pt-8"}>{selectedCategory.name}</h3>
            <Products products={selectedCategory.products} />
        </div>
    );
}