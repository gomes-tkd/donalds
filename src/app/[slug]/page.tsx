import React from "react";
import Image from "next/image";
import TakeAwaySVG from "@/assets/take-away.svg";
import DineInSVG from "@/assets/dine-in.svg";
import { notFound } from "next/navigation";
import OrderMethodOption from "@/components/consumption-method-option";
import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

interface RestaurantProps {
    params: Promise<{ slug: string }>
}

export default async function RestaurantPage({ params }: RestaurantProps) {
    const { slug } = await params;
    const restaurant = await getRestaurantBySlug(slug);

    if (!restaurant) {
        return notFound();
    }

    return (
        <div className={"h-screen flex flex-col items-center justify-center px-6 pt-24"}>
            <div className={"flex flex-col items-center gap-2"}>
                <Image
                    src={restaurant.avatarImageUrl}
                    alt={restaurant.name}
                    width={80}
                    height={80}
                />
                <h2 className={"font-semibold"}>{restaurant.name}</h2>
            </div>

            <div className={"pt-24 text-center space-y-2"}>
                <h3 className={"text-2xl font-semibold"}>Seja bem-vindo!</h3>
                <p className={"opacity-55"}>
                    Escolha como prefere aproveitar sua refeição. Estamos aqui para oferecer praticidade e sabor em cada detalhe!
                </p>
            </div>

            <div className={"pt-14 grid grid-cols-2 gap-4"}>
                <OrderMethodOption
                    slug={slug}
                    imageUrl={DineInSVG}
                    imageAlt={"Comer aqui"}
                    buttonText={"Para comer Aqui"}
                    option={"DINE_IN"}
                />

                <OrderMethodOption
                    slug={slug}
                    imageUrl={TakeAwaySVG}
                    imageAlt={"Para Levar"}
                    buttonText={"Para levar"}
                    option={"TAKEAWAY"}
                />
            </div>
        </div>
    );
}