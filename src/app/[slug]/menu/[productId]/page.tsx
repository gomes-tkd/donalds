import React from "react";
import { getProductById } from "@/data/get-restaurant-by-slug";
import { notFound } from "next/navigation";
import ProductHeader from "@/components/product-header";

interface ProductPageProps {
    params: Promise<{ slug: string; productId: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug, productId } = await params;
    const product = await getProductById(productId);

    if (!product) {
        return notFound();
    }

    return (
        <>
            <ProductHeader product={product} />
        </>
    );
}