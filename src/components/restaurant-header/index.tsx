"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { Restaurant } from "@prisma/client";
import { useRouter } from "next/navigation";

interface RestaurantHeaderProps {
    restaurant: Pick<Restaurant, "coverImageUrl" | "name">
}

export default function RestaurantHeader({ restaurant }: RestaurantHeaderProps) {
    const router = useRouter();

    function handleBack() {
        return router.back();
    }

    return (
        <div className={"relative h-[250px] w-full"}>
            <Button
                size={"icon"}
                className={"absolute top-4 left-4 z-50 rounded-full cursor-pointer"}
                variant={"secondary"}
                onClick={handleBack}
            >
                <ChevronLeftIcon />
            </Button>
            <Image src={restaurant.coverImageUrl} alt={restaurant.name} fill className={"object-cover"} />

            <Button
                size={"icon"}
                className={"absolute top-4 right-4 z-50 rounded-full"}
                variant={"secondary"}
            >
                <ScrollTextIcon />
            </Button>
        </div>
    );
}