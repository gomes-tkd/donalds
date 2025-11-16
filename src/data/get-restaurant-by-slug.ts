import db from "@/lib/prisma";

export async function getRestaurantBySlug(slug: string) {
    return db.restaurant.findUnique({
        where: {slug},
        include: {
            menuCategories: {
                include: { products: true }
            }
        }
    });
}

export async function getProductById(id: string) {
    return db.product.findUnique({
        where: {id}
    });
}