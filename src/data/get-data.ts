import db from "@/lib/prisma";

export async function getRestaurantData(slug: string) {
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

export async function getRestaurantAndProducts(id: string) {
    return db.product.findUnique({
        where: { id },
        include: {
            restaurant: {
                select: {
                    name: true,
                    slug: true,
                    avatarImageUrl: true
                }
            }
        }
    });
}