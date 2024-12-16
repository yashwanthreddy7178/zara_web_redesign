import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const products = [
    { id: 1, name: 'Chunky Leather', price: '$100.00', size: '10', image: './images/Chunky Leather.png' },
    { id: 2, name: 'Double Buckle Leather', price: '$100.00', size: '11', image: './images/Double Buckle Leather.png' },
    { id: 3, name: 'Dress Penny Loafers', price: '$100.00', size: '9', image: './images/Dress Penny Loafers.png' },
    { id: 4, name: 'Laced Leather Boots', price: '$20.00', size: '10', image: './images/Laced Leather Boots.png' },
];

const CartPage = () => {
    const total = 117.59; // Example total
    const salesTax = 12.60; // Example sales tax
    const delivery = 4.99; // Example delivery cost

    // New state to manage product quantities
    const [quantities, setQuantities] = React.useState(products.reduce((acc, product) => {
        acc[product.id] = 1; // Initialize each product quantity to 1
        return acc;
    }, {}));

    const handleQuantityChange = (id, change) => {
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max(1, prev[id] + change) // Ensure quantity doesn't go below 1
        }));
    };

    return (
        <div className="min-h-screen bg-white pt-40">
            <Header />
            <div className="p-4 md:p-10 flex">
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-4">Your Bag</h2>
                    <div className="space-y-4">
                        {products.map(product => (
                            <div key={product.id} className="flex justify-between items-center border rounded-lg p-4">
                                <div className="flex items-center">
                                    <img src={product.image} alt={product.name} className="w-50 h-50 object-cover mr-4" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{product.name}</h3>
                                        <span className="text-gray-600 font-bold">{product.price}</span>
                                        <span className="text-gray-600"> | Size: {product.size}</span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <button onClick={() => handleQuantityChange(product.id, -1)} className="text-gray-600">-</button>
                                    <span className="mx-2">{quantities[product.id]}</span>
                                    <button onClick={() => handleQuantityChange(product.id, 1)} className="text-gray-600">+</button>
                                    <button className="text-red-600 ml-4">
                                        <FontAwesomeIcon icon={faTrash} className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-1/3 ml-4">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="border rounded-lg p-4">
                        <div className="flex justify-between">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Sales Tax:</span>
                            <span>${salesTax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Delivery:</span>
                            <span>${delivery.toFixed(2)}</span>
                        </div>
                        <div className="border-t mt-2 pt-2 flex justify-between font-bold">
                            <span>Grand Total:</span>
                            <span>${(total + salesTax + delivery).toFixed(2)}</span>
                        </div>
                        <div className="mt-4">
                            <input 
                                type="text" 
                                placeholder="Enter discount code" 
                                className="border rounded-lg p-2 w-full" 
                            />
                            <button className="bg-green-600 text-white py-2 px-4 rounded mt-2">Apply</button>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">Accepted Cards:</h3>
                            <div className="flex space-x-2 mt-2">
                                <img src="./images/visa.png" alt="Visa" className="w-8 h-8" />
                                <img src="./images/mastercard.png" alt="MasterCard" className="w-8 h-8" />
                                <img src="./images/amex.png" alt="American Express" className="w-8 h-8" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <button className="bg-purple-600 text-white py-2 px-4 rounded w-full">Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CartPage; 