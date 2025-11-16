import React from "react";
import { notFound } from "next/navigation";
import { getRestaurantData } from "@/data/get-data";
import RestaurantHeader from "@/components/restaurant-header";
import Categories from "@/components/categories";

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
    const restaurant = await getRestaurantData(slug);

    if (!isConsumptionMethodValid(consumptionMethod)) {
        return notFound();
    }

    if (!restaurant) {
        return notFound();
    }

    return (
        <div>
            <RestaurantHeader restaurant={restaurant} />
            <Categories restaurant={restaurant} />
        </div>
    );
}