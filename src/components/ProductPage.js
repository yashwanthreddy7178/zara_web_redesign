import { Heart, ShoppingCart } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';

// Star component for rating
const Star = ({ filled, onClick }) => (
    <span
        onClick={onClick}
        style={{ cursor: 'pointer', color: filled ? '#FFD700' : '#ccc' }} // Gold for filled, gray for unfilled
    >
        ★
    </span>
);

const ProductPage = () => {
    const [selectedColor, setSelectedColor] = useState('gold');
    const [mainImage, setMainImage] = useState('./images/product1.png');
    const [isWishlist, setIsWishlist] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');
    const [rating, setRating] = useState(5);

    const MRP = 99.90; // Define the MRP
    const currentPrice = 89.90; // Current price

    const thumbnails = [
        './images/product2.png',
        './images/product3.png',
        './images/product4.png',
        './images/product5.png',
        './images/product6.png',
        './images/product7.png',
    ];

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    const handleThumbnailClick = (image) => {
        setMainImage(image);
    };

    const handleAddToCart = () => {
        setIsAddedToCart(true);
        setTimeout(() => setIsAddedToCart(false), 2000);
    };

    const handleWishlist = () => {
        setIsWishlist(!isWishlist);
    };

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (newReview.trim()) {
            const reviewData = {
                content: newReview,
                rating: rating,
                id: Date.now(),
            };
            setReviews([...reviews, reviewData]);
            setNewReview('');
            setRating(5); // Reset rating after submission
        }
    };

    useEffect(() => {
        const handleScroll = (event) => {
            event.preventDefault();
            const scrollDirection = event.deltaY > 0 ? 'down' : 'up';
            const currentIndex = thumbnails.indexOf(mainImage);
            if (scrollDirection === 'down' && currentIndex < thumbnails.length - 1) {
                setMainImage(thumbnails[currentIndex + 1]);
            } else if (scrollDirection === 'up' && currentIndex > 0) {
                setMainImage(thumbnails[currentIndex - 1]);
            }
        };

        const imageContainer = document.querySelector('.main-image-container');

        if (imageContainer) {
            imageContainer.addEventListener('wheel', handleScroll, { passive: false });
        }

        return () => {
            if (imageContainer) {
                imageContainer.removeEventListener('wheel', handleScroll);
            }
        };
    }, [mainImage, thumbnails]);

    return (
        <div className="min-h-screen bg-white pt-40">
            <Header />
            <div className="p-2">
                <button className="text-purple-600 hover:underline" onClick={() => window.history.back()} aria-label="Go back">
                    ← Back
                </button>
            </div>
            <div className="flex flex-col md:flex-row p-4 md:p-6 gap-10 mt-0">
                <div className="flex-1 max-w-full md:max-w-[40%] p-5">
                    <div className="mb-4">
                        <h1 className="text-2xl font-semibold mb-2">Elegant Evening Clutch</h1>
                        <span className="text-xl font-semibold text-purple-600">
                            <strong>${currentPrice.toFixed(2)}</strong>
                        </span>
                        <span className="text-gray-500 line-through ml-2">${MRP.toFixed(2)}</span>
                    </div>

                    <ul className="list-disc list-inside text-gray-600 mb-4">
                        <li>Material: Metallic Finish</li>
                        <li>Dimensions: 25cm x 15cm</li>
                        <li>Chain Length: 50cm</li>
                    </ul>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Sophisticated clutch with metallic finish. Features magnetic closure and removable chain strap. Perfect for special occasions.
                    </p>

                    <div className="mb-8">
                        <h3 className="text-sm font-semibold mb-2">PRODUCT SPECIFICATIONS</h3>
                        <p className="text-gray-600">Chain Length: 50cm, Dimensions: 25cm x 15cm</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-sm font-semibold mb-2">SELECT COLOR</h3>
                        <div className="flex gap-2">
                            {['gold', 'silver', 'black'].map((color) => (
                                <button
                                    key={color}
                                    className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${selectedColor === color ? 'border-purple-600' : 'border-transparent'
                                        }`}
                                    style={{ backgroundColor: color, boxShadow: '0 0 5px rgba(0,0,0,0.2)' }}
                                    aria-label={color}
                                    onClick={() => {
                                        handleColorSelect(color);
                                        setMainImage(`./images/product_${color}.png`);
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-sm font-semibold mb-2">REVIEWS</h3>
                        <p className="text-gray-600">Average Rating: <strong>4.6 ★★★★★</strong></p>
                        <p className="text-gray-600">"Absolutely love this clutch!" - Jane D.</p>
                        <p className="text-gray-600">"Perfect for my evening out." - Sarah K.</p>
                    </div>

                    <div className="flex gap-4 mb-10">
                        <button
                            className={`flex-1 h-12 rounded-full text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 ${isAddedToCart
                                    ? 'bg-green-500 pointer-events-none'
                                    : 'bg-purple-600 hover:bg-purple-700'
                                }`}
                            onClick={handleAddToCart}
                        >
                            <ShoppingCart size={20} />
                            <span className={isAddedToCart ? 'animate-bounce' : ''}>
                                {isAddedToCart ? 'ADDED!' : 'ADD TO CART'}
                            </span>
                        </button>
                        <button
                            className={`w-12 h-12 rounded-full border transition-all duration-300 flex items-center justify-center ${isWishlist
                                    ? 'bg-purple-100 border-purple-600'
                                    : 'border-gray-300 hover:border-purple-600 hover:bg-gray-100'
                                }`}
                            onClick={handleWishlist}
                            aria-label="Add to Wishlist"
                        >
                            <Heart
                                size={24}
                                className={isWishlist ? 'text-purple-600' : 'text-gray-600'}
                                fill={isWishlist ? 'currentColor' : 'none'}
                            />
                        </button>
                    </div>

                    <div className="mt-8">
                        {[
                            { title: 'Reviews', content: '4.6 ★★★★★ (1780 reviews)' },
                            { title: 'Description', content: 'Sophisticated clutch with metallic finish. Features magnetic closure and removable chain strap. Perfect for special occasions.' },
                            { title: 'Details', content: 'Additional details about the product can go here.' },
                            { title: 'How to style', content: 'Suggestions on how to style the product.' },
                        ].map((section, index) => (
                            <div key={index} className="mb-4">
                                <button
                                    className="w-full text-left font-semibold flex items-center justify-between"
                                    onClick={() => toggleSection(section.title)}
                                >
                                    <span>{section.title}</span>
                                    <span className="text-gray-600">{activeSection === section.title ? '▲' : '▼'}</span>
                                </button>
                                {activeSection === section.title && (
                                    <div className="mt-2 text-gray-600">
                                        {section.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 max-w-full md:max-w-[60%] flex gap-5">
                    <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:max-h-[600px] scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-100">
                        {thumbnails.map((thumb, index) => (
                            <img
                                key={index}
                                src={thumb}
                                alt={`Thumbnail ${index + 2}`}
                                className={`w-20 h-20 object-cover cursor-pointer transition-all duration-300 hover:opacity-80 ${mainImage === thumb ? 'border-2 border-purple-600' : ''
                                    }`}
                                onClick={() => handleThumbnailClick(thumb)}
                            />
                        ))}
                    </div>
                    <div className="flex-1 cursor-ns-resize overflow-hidden main-image-container">
                        <img
                            src={mainImage}
                            alt="Product Main View"
                            className="w-full max-h-[600px] object-contain transition-opacity duration-300"
                        />
                    </div>
                </div>
            </div>

            <div className="p-4 md:p-10">
                <h2 className="text-xl font-semibold mb-4">YOU MIGHT LIKE</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {[
                        { name: 'Basic Knit Sweater', price: '$49.90', image: './images/product1.png' },
                        { name: 'Metallic Eye Shadow', price: '$15.90', image: './images/product2.png' },
                        { name: 'Amber Fusion EDP 30 ML', price: '$17.90', image: './images/product3.png' },
                        { name: 'Lace Trim Pointelle Bra', price: '$22.90', image: './images/product4.png' },
                        { name: 'Metal Handle Handbag', price: '$49.90', image: './images/product5.png' },
                    ].map((product, index) => (
                        <div key={index} className="border rounded-lg p-4 flex flex-col items-center">
                            <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
                            <h3 className="text-sm font-semibold">{product.name}</h3>
                            <span className="text-gray-600">{product.price}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-4 md:p-10">
                <h2 className="text-xl font-semibold mb-4">Reviews</h2>
                <form onSubmit={handleReviewSubmit} className="mb-4">
                    <textarea
                        value={newReview}
                        onChange={(e) => setNewReview(e.target.value)}
                        placeholder="Leave a review..."
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                        required
                    />
                    <div className="flex items-center mb-2">
                        <label className="mr-2">Rating:</label>
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    filled={star <= rating}
                                    onClick={() => setRating(star)}
                                />
                            ))}
                        </div>
                    </div>
                    <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300">
                        Submit Review
                    </button>
                </form>

                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <div key={review.id} className="border p-4 mb-2 rounded">
                            <p className="font-semibold">Rating: <strong>{review.rating} ★</strong></p>
                            <p>{review.content}</p>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet. Be the first to leave a review!</p>
                )}
            </div>

            <Footer className="mt-auto" />
        </div>
    );
};

export default ProductPage;

