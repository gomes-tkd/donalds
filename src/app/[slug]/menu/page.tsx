import React from "react";
import { notFound } from "next/navigation";
import getRestaurantBySlug from "@/data/get-restaurant-by-slug";
import RestaurantHeader from "@/components/restaurant-header";

interface MenuPageProps {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ consumptionMethod: string }>
}

function isConsumptionMethodValid(consumptionMethod: string) {
    return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());
}

export default async function MenuPage({ params, searchParams }: MenuPageProps) {
    const { slug } = await params;
    const { consumptionMethod } = await searchParams;
    const restaurant = await getRestaurantBySlug(slug);

    if (!isConsumptionMethodValid(consumptionMethod)) {
        return notFound();
    }

    if (!restaurant) {
        return notFound();
    }

    return (
        <div>
            <RestaurantHeader restaurant={restaurant} />
        </div>
    );
}