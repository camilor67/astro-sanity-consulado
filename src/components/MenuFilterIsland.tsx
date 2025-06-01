import React, { useState } from 'react';

interface Dish {
  _id: string;
  name: string;
  description?: string;
  price?: number;
  category?: string;
  subcategory?: string;
}

interface Props {
  dishes: Dish[];
  categories: { label: string; value: string }[];
}

const MenuFilterIsland: React.FC<Props> = ({ dishes, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].value);

  // Filtrar platos por categoría
  const filteredDishes = dishes.filter((dish) => dish.category === selectedCategory);

  // Agrupar por subcategoría si existen
  const groupedDishes = filteredDishes.reduce((acc, dish) => {
    if (dish.subcategory) {
      if (!acc[dish.subcategory]) {
        acc[dish.subcategory] = [];
      }
      acc[dish.subcategory].push(dish);
    } else {
      if (!acc['sin_subcategoria']) {
        acc['sin_subcategoria'] = [];
      }
      acc['sin_subcategoria'].push(dish);
    }
    return acc;
  }, {} as Record<string, Dish[]>);

  return (
    <>
      <h1 className="text-4xl font-black text-center my-8">Menú</h1>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={`px-4 py-2 rounded font-bold transition ${
              selectedCategory === cat.value ? 'bg-yellow-400 text-black shadow' : 'bg-gray-200 hover:bg-yellow-100'
            }`}
            onClick={() => setSelectedCategory(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-4">
        {Object.entries(groupedDishes).map(([subcategory, dishes]) => (
          <div key={subcategory} className="mb-8 last:mb-0">
            {subcategory !== 'sin_subcategoria' && (
              <h2 className="text-xl font-bold mb-4 capitalize">{subcategory.replace('_', ' ')}</h2>
            )}
            <table className="w-full text-left border-separate border-spacing-y-2">
              {subcategory === 'sin_subcategoria' && (
                <thead>
                  <tr>
                    <th className="text-lg font-bold">Plato</th>
                    <th className="text-lg font-bold text-right">Precio</th>
                  </tr>
                </thead>
              )}
              <tbody>
                {dishes.map((dish) => (
                  <tr className="align-top" key={dish._id}>
                    <td className="pr-4">
                      <div className="font-semibold">{dish.name}</div>
                      {dish.description && <div className="text-sm text-gray-600">{dish.description}</div>}
                    </td>
                    <td className="text-right font-bold whitespace-nowrap">
                      {dish.price ? dish.price.toFixed(2) + ' €' : ''}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuFilterIsland; 