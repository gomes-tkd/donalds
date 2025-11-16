import React from "react";
import { getRestaurantAndProducts } from "@/data/get-data";
import { notFound } from "next/navigation";
import ProductHeader from "@/components/product-header";
import ProductDetails from "@/components/product-details";

interface ProductPageProps {
    params: Promise<{ slug: string, productId: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { productId } = await params;
    const { slug } = await params;
    const product = await getRestaurantAndProducts(productId);

    if (!product) {
        return notFound();
    }

    if (product.restaurant.slug.toUpperCase() !== slug.toUpperCase()) {
        return notFound();
    }


    return (
        <div className={"flex h-full flex-col"}>
            <ProductHeader product={product} />
            <ProductDetails product={product} />
        </div>
    );
}