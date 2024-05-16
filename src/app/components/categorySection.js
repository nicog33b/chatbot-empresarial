import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
const foodSections = [
  {
    id: 'burgers',
    title: 'Burgers',
    products: [
      {
        name: 'Cheeseburger',
        description: 'Classic cheeseburger with cheddar cheese, lettuce, and tomato.',
        price: 5.99,
        image: '/burgers/cheeseburger.jfif',
      },
      {
        name: 'Bacon Burger',
        description: 'Juicy burger topped with crispy bacon and melted cheese.',
        price: 6.99,
        image: '/burgers/baconburger.jpg',
      },
      {
        name: 'Veggie Burger',
        description: 'Delicious vegetarian burger with fresh veggies and avocado.',
        price: 5.49,
        image: '/burgers/veggieburger.jpg',
      },
      {
        name: 'Double Burger',
        description: 'Double patty burger with double cheese and all the fixings.',
        price: 7.99,
        image: '/burgers/doubleburger.webp',
      },
      {
        name: 'Spicy Burger',
        description: 'Spicy burger with jalapenos, pepper jack cheese, and spicy mayo.',
        price: 6.49,
        image: '/burgers/spicyburger.jfif',
      },
    ],
  },
  {
    id: 'pizzas',
    title: 'Pizzas',
    products: [
      {
        name: 'Margherita Pizza',
        description: 'Classic Margherita pizza with fresh tomatoes, mozzarella, and basil.',
        price: 8.99,
        image: '/pizza/margheritapizza.jpg',
      },
  
      {
        name: 'BBQ Chicken Pizza',
        description: 'BBQ chicken pizza with onions, cilantro, and BBQ sauce.',
        price: 10.49,
        image: '/pizza/bbqchickenpizza.jpeg',
      },
      {
        name: 'Veggie Pizza',
        description: 'Vegetarian pizza with bell peppers, olives, onions, and mushrooms.',
        price: 9.49,
        image: '/pizza/veggiepizza.jfif',
      },
      {
        name: 'Hawaiian Pizza',
        description: 'Hawaiian pizza with ham and pineapple.',
        price: 9.99,
        image: '/pizza/hawaiianpizza.jpg',
      },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    products: [
      {
        name: 'Coca-Cola',
        description: 'Refreshing classic Coca-Cola.',
        price: 1.99,
        image: '/drinks/cocacola.webp',
      },
      {
        name: 'Lemonade',
        description: 'Freshly squeezed lemonade.',
        price: 2.49,
        image: '/drinks/lemonade.jpg',
      },
      {
        name: 'Iced Tea',
        description: 'Chilled iced tea with a hint of lemon.',
        price: 2.29,
        image: '/drinks/icedtea.jfif',
      },
      {
        name: 'Milkshake',
        description: 'Thick and creamy milkshake in various flavors.',
        price: 3.99,
        image: '/drinks/milkshake.jfif',
      },
    ],
  },
];

function CategorySection({ id, title, products }) {
  return (
    <section id={id} className="py-8">
    <h2 className="text-2xl font-bold mb-6">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <div key={index} className="bg-white shadow-lg justify-center rounded-lg overflow-hidden">
          <Image src={product.image} alt={product.name} width={300} height={200} className="w-full h-48 object-cover" />
          <div className="p-4 flex flex-col items-center">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="mt-2 text-gray-600 text-center">{product.description}</p>
            <button className="mt-4 bg-black text-red-600 font-bold rounded-md px-6 py-1 flex items-center">
              <span className='mr-1 flex items-center'>
                <FaShoppingCart />
              </span>
              <span className='text-white'>
                ${product.price.toFixed(2)}
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
  
  );
}

export default CategorySection;
export { foodSections };
