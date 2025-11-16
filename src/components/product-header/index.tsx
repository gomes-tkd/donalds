"use client";
import React from "react";
import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";

interface ProductHeaderProps {
    product: Pick<Product, "imageUrl" | "name">
}

export default function ProductHeader({ product }: ProductHeaderProps) {
    const router = useRouter();

    function handleBack() {
        return router.back();
    }

    return (
        <div className={"relative h-[300px] w-full"}>
            <Button
                size={"icon"}
                className={"absolute top-4 left-4 z-50 rounded-full cursor-pointer"}
                variant={"secondary"}
                onClick={handleBack}
            >
                <ChevronLeftIcon />
            </Button>
            <Image src={product?.imageUrl} alt={product?.name} fill className={"object-cover"} />

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