import { client } from '@utils/sanity-client';

export async function getMenuDishes() {
    const query = `*[_type == "dish"] | order(name asc) {
    _id,
    name,
    description,
    price,
    category
  }`;
    return await client.fetch(query);
}

export async function getCategories() {
    const query = `*[_type == "dish" && defined(category)] {
        category
    } | order(category asc)`;
    const categories = await client.fetch(query);

    // Eliminar duplicados y formatear
    const uniqueCategories = [...new Set(categories.map((cat) => cat.category))];

    // Mapear a formato label/value
    return uniqueCategories.map((category) => ({
        label: category
            .split('_')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
        value: category
    }));
}
