import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";
import { ConsumptionMethod } from "@prisma/client";

interface OrderMethodOptionProps {
    slug: string
    imageUrl: string;
    imageAlt: string;
    buttonText: string;
    option: ConsumptionMethod
}

export default function OrderMethodOption({ slug, imageUrl, imageAlt, buttonText, option }: OrderMethodOptionProps) {
    return (
        <Card>
            <CardContent className={"flex flex-col items-center gap-8 py-8"}>
                <div className={"relative h-[80px] w-[80px]"}>
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        fill
                        className={"object-contain"}
                    />
                </div>
                <Button
                    variant={"secondary"}
                    className={"rounded-full cursor-pointer"}
                    asChild
                >
                    <Link href={`/${slug}/menu?consumptionMethod=${option}`}>
                        { buttonText }
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}