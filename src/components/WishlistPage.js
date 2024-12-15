import { Heart } from 'lucide-react';
import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const products = [
    { id: 1, name: 'Product 1', price: '$49.90', image: './searchimages/image1.png' },
    { id: 2, name: 'Product 2', price: '$59.90', image: './searchimages/image2.png' },
    { id: 3, name: 'Product 3', price: '$39.90', image: './searchimages/image3.png' },
    { id: 4, name: 'Product 4', price: '$29.90', image: './searchimages/image4.png' },
    { id: 5, name: 'Product 5', price: '$19.90', image: './searchimages/image5.png' },
];

const WishlistPage = () => {
    const [wishlistItems, setWishlistItems] = useState(new Set(products.map(product => product.id)));

    const toggleWishlist = (id) => {
        const updatedWishlist = new Set(wishlistItems);
        if (updatedWishlist.has(id)) {
            updatedWishlist.delete(id);
        } else {
            updatedWishlist.add(id);
        }
        setWishlistItems(updatedWishlist);
    };

    return (
        <div className="min-h-screen bg-white pt-40">
            <Header />
            <div className="p-4 md:p-10">
                <h2 className="text-2xl font-semibold mb-4">Your Wishlist</h2>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
                    {products.map(product => (
                        <div key={product.id} className="border rounded-lg p-6 flex flex-col items-center relative">
                            <img src={product.image} alt={product.name} className="w-full h-auto object-cover mb-2" />
                            <h3 className="text-md font-semibold">{product.name}</h3>
                            <span className="text-gray-600 text-lg">{product.price}</span>
                            <button
                                className={`absolute top-2 right-2 p-1 rounded-full ${wishlistItems.has(product.id) ? 'text-red-600' : 'text-gray-600'}`}
                                onClick={() => toggleWishlist(product.id)}
                                aria-label="Toggle Wishlist"
                            >
                                <Heart size={24} fill={wishlistItems.has(product.id) ? 'currentColor' : 'none'} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default WishlistPage; 