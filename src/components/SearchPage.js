import React, { useState } from 'react';
import { FaFilter, FaHeart, FaSearch } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import Footer from './Footer';
import Header from './Header';

const defaultProducts = [
    { id: 1, name: 'Product 1', image: './searchimages/image1.png', price: 10 },
    { id: 2, name: 'Product 2', image: './searchimages/image2.png', price: 15 },
    { id: 3, name: 'Product 3', image: './searchimages/image3.png', price: 20 },
    { id: 4, name: 'Product 4', image: './searchimages/image4.png', price: 25 },
    { id: 5, name: 'Product 5', image: './searchimages/image5.png', price: 30 },
    { id: 6, name: 'Product 6', image: './searchimages/image6.png', price: 35 },
    { id: 7, name: 'Product 7', image: './searchimages/image7.png', price: 40 },
    { id: 8, name: 'Product 8', image: './searchimages/image8.png', price: 45 },
    { id: 9, name: 'Product 9', image: './searchimages/image9.png', price: 50 },
    { id: 10, name: 'Product 10', image: './searchimages/image10.png', price: 55 },
    { id: 11, name: 'Product 11', image: './searchimages/image11.png', price: 60 },
    { id: 12, name: 'Product 12', image: './searchimages/image12.png', price: 65 },
    { id: 13, name: 'Product 13', image: './searchimages/image13.png', price: 70 },
    { id: 14, name: 'Product 14', image: './searchimages/image14.png', price: 75 },
    { id: 15, name: 'Product 15', image: './searchimages/image15.png', price: 80 },
];

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [displayText, setDisplayText] = useState('You might be interested in');
    const [showFilters, setShowFilters] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({
        size: '',
        color: '',
        price: '',
        sortBy: '',
        gender: '',
        discount: '',
        collection: '',
    });
    const [wishlist, setWishlist] = useState({});
    const { isAuthenticated } = useAuth();
    const [filteredProducts, setFilteredProducts] = useState([]);

    console.log('Is Authenticated on Search Page:', isAuthenticated);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        
        // Update filtered products based on search term
        if (value) {
            const filtered = defaultProducts.filter(product =>
                product.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    };

    const handleSearchSubmit = (e) => {
        if (e.key === 'Enter') {
            setDisplayText(searchTerm || 'You might be interested in');
            setSearchTerm('');
        }
    };

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
        // Update filtered products based on selected filters
        const filtered = defaultProducts.filter(product => {
            return (
                (selectedFilters.size ? product.size === selectedFilters.size : true) &&
                (selectedFilters.color ? product.color === selectedFilters.color : true) &&
                (selectedFilters.price ? product.price <= parseInt(selectedFilters.price.split('-')[1]) : true)
            );
        });
        setFilteredProducts(filtered);
    };

    const handleSearchWithFilters = () => {
        console.log('Searching with filters:', selectedFilters);
    };

    const handleAddToWishlist = (productId) => {
        setWishlist((prevWishlist) => ({
            ...prevWishlist,
            [productId]: !prevWishlist[productId],
        }));
    };

    return (
        <div className="min-h-screen bg-white pt-40">
            <Header />
            <h1 className="text-3xl font-bold text-center mt-10">Discover Your Next Favorite Product!</h1>
            <div className="flex justify-center mt-5">
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onKeyDown={handleSearchSubmit}
                    className="border border-gray-300 rounded p-2 w-1/2"
                />
                {filteredProducts.length > 0 && (
                    <ul className="absolute bg-white border border-gray-300 w-1/2 mt-1">
                        {filteredProducts.map(product => (
                            <li key={product.id} className="p-2 hover:bg-gray-200 cursor-pointer">
                                {product.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="flex justify-between items-center mt-10 ml-4">
                <h2 className="text-2xl font-semibold">{displayText}</h2>
                <button
                    className="ml-2 p-3 border border-gray-300 rounded-lg flex items-center text-lg"
                    onClick={toggleFilters}
                >
                    <FaFilter className="mr-1" />
                    Filter
                </button>
            </div>

            {/* Filter Section */}
            {showFilters && (
                <div className="mt-5 ml-4">
                    <h3 className="text-xl font-semibold">Filters</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
                        <div>
                            <label className="block mb-1">Size</label>
                            <select
                                name="size"
                                onChange={handleFilterChange}
                                className="border border-gray-300 rounded p-2 w-full"
                            >
                                <option value="">Select Size</option>
                                <option value="S">Small</option>
                                <option value="M">Medium</option>
                                <option value="L">Large</option>
                                <option value="XL">Extra Large</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1">Color</label>
                            <select
                                name="color"
                                onChange={handleFilterChange}
                                className="border border-gray-300 rounded p-2 w-full"
                            >
                                <option value="">Select Color</option>
                                <option value="red">Red</option>
                                <option value="blue">Blue</option>
                                <option value="green">Green</option>
                                <option value="black">Black</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1">Price</label>
                            <select
                                name="price"
                                onChange={handleFilterChange}
                                className="border border-gray-300 rounded p-2 w-full"
                            >
                                <option value="">Select Price Range</option>
                                <option value="0-50">$0 - $50</option>
                                <option value="51-100">$51 - $100</option>
                                <option value="101-200">$101 - $200</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1">Sort By</label>
                            <select
                                name="sortBy"
                                onChange={handleFilterChange}
                                className="border border-gray-300 rounded p-2 w-full"
                            >
                                <option value="">Select Sorting</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1">Gender</label>
                            <select
                                name="gender"
                                onChange={handleFilterChange}
                                className="border border-gray-300 rounded p-2 w-full"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1">Discount</label>
                            <select
                                name="discount"
                                onChange={handleFilterChange}
                                className="border border-gray-300 rounded p-2 w-full"
                            >
                                <option value="">Select Discount</option>
                                <option value="10">10% Off</option>
                                <option value="20">20% Off</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1">Collection</label>
                            <select
                                name="collection"
                                onChange={handleFilterChange}
                                className="border border-gray-300 rounded p-2 w-full"
                            >
                                <option value="">Select Collection</option>
                                <option value="summer">Summer Collection</option>
                                <option value="winter">Winter Collection</option>
                            </select>
                        </div>
                    </div>
                    <button
                        className="mt-4 p-2 border border-gray-300 rounded-lg flex items-center"
                        onClick={handleSearchWithFilters}
                    >
                        <FaSearch className="mr-1" />
                        Search with Filters
                    </button>
                </div>
            )}

            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
                {defaultProducts.map(product => (
                    <div key={product.id} className="border rounded p-4 relative">
                        <FaHeart 
                            className={`absolute top-2 right-2 cursor-pointer ${wishlist[product.id] ? 'text-red-500' : 'text-gray-300'}`} 
                            onClick={() => handleAddToWishlist(product.id)} 
                            size={24}
                        />
                        <img src={product.image} alt={product.name} className="w-full h-auto object-cover mb-2" />
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="text-lg font-semibold ml-2">${product.price}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default SearchPage; 