import db from "@/lib/prisma";

export default async function getRestaurantBySlug(slug: string) {
    return db.restaurant.findUnique({
        where: {slug},
        include: {
            menuCategories: {
                include: { products: true }
            }
        }
    });
}