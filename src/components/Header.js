import { ChevronRight, Heart, Menu, Search, ShoppingCart, User } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState('');
  const [isAccountOptionsOpen, setIsAccountOptionsOpen] = useState(false);
  const menuRef = useRef(null);
  const accountRef = useRef(null);
  const { isAuthenticated, logout } = useAuth();

  console.log('Is Authenticated:', isAuthenticated);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setExpandedCategory('');
  };

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? '' : category);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const toggleAccountOptions = () => {
    setIsAccountOptionsOpen(!isAccountOptionsOpen);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleWishlistClick = () => {
    navigate('/wishlist');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleSearchClick = () => {
    window.location.href = '/search';
  };

  const categories = [
    {
      name: 'WOMAN',
      subcategories: ['New In', 'Clothing', 'Dresses', 'Tops', 'Shirts', 'Trousers', 'Skirts', 'Jeans', 'Knitwear', 'Coats', 'Blazers', 'Shoes & Bags', 'Accessories', 'Join Life', 'Collections']
    },
    {
      name: 'MAN',
      subcategories: ['New In', 'Clothing', 'Jackets', 'Shirts', 'Trousers', 'Jeans', 'Knitwear', 'Coats', 'Suits', 'Shoes & Bags', 'Accessories', 'Join Life', 'Collections']
    },
    {
      name: 'KIDS',
      subcategories: ['Newborn', 'Baby Girl', 'Baby Boy', 'Girl', 'Boy', 'Shoes', 'Accessories', 'Join Life']
    },
    {
      name: 'BEAUTY',
      subcategories: ['Makeup', 'Fragrance', 'Accessories']
    },
    {
      name: 'COLLECTIONS',
      content: 'Curated seasonal or thematic collections across categories.'
    },
    {
      name: 'SPECIAL CATEGORIES',
      subcategories: ['Zara Origins', 'Studio Collection', 'Athletic Wear', 'Lingerie', 'Zara Home']
    }
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        accountRef.current && !accountRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setExpandedCategory('');
        setIsAccountOptionsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button
            className="p-2 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded-md"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            ref={menuRef}
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex-1 flex justify-center items-center relative ml-40">
            <img src="./images/zara-logo.png" alt="Zara Logo" className="w-48 h-auto cursor-pointer" onClick={handleLogoClick} />
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={handleSearchClick} aria-label="Search" className="flex items-center justify-center w-10 h-10">
              <Search className="w-6 h-6" />
            </button>
            <button onClick={handleWishlistClick} aria-label="Go to wishlist" className="flex items-center justify-center w-10 h-10">
              <Heart className="w-6 h-6" />
            </button>
            <div className="relative" ref={accountRef}>
              <button onClick={toggleAccountOptions} aria-label="Account options" className="flex items-center justify-center w-10 h-10">
                <User className="w-6 h-6" />
              </button>
              {isAccountOptionsOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                  {isAuthenticated ? (
                    <ul>
                      <li><Link to="/purchases">Purchases</Link></li>
                      <li><Link to="/returns">Returns</Link></li>
                      <li><Link to="/favorites">Favorites</Link></li>
                      <li><Link to="/notifications">Notifications (0)</Link></li>
                      <li><Link to="/payment-methods">Payment Methods</Link></li>
                      <li><Link to="/profile">Profile</Link></li>
                      <li><Link to="/settings">Settings</Link></li>
                      <li><button onClick={logout}>Logout</button></li>
                    </ul>
                  ) : (
                    <ul>
                      <li><Link to="/login">Login</Link></li>
                      <li><Link to="/signup">Sign Up</Link></li>
                    </ul>
                  )}
                </div>
              )}
            </div>
            <button onClick={handleCartClick} aria-label="Go to cart" className="flex items-center justify-center w-10 h-10">
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </div>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-6 text-sm">
            <li className="text-red-600">
              <Link to="/sale">SALE</Link>
            </li>
            <li>
              <Link to="/new">New</Link>
            </li>
            <li>
              <Link to="/clothing">Clothing</Link>
            </li>
            <li>
              <Link to="/shoes">Shoes</Link>
            </li>
            <li>
              <Link to="/bags">Bags</Link>
            </li>
            <li>
              <Link to="/beauty">Beauty</Link>
            </li>
            <li>
              <Link to="/accessories">Accessories</Link>
            </li>
          </ul>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div ref={menuRef} className="bg-white w-64 h-full overflow-y-auto p-4">
            {categories.map((category) => (
              <div key={category.name} className="mb-4 border-b border-gray-200 pb-2">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleCategory(category.name)}
                >
                  <h3 className="font-semibold">{category.name}</h3>
                  <ChevronRight className={`w-4 h-4 transition-transform ${expandedCategory === category.name ? 'rotate-90' : ''}`} />
                </div>
                {expandedCategory === category.name && (
                  <div className="mt-2 ml-4">
                    {category.subcategories ? (
                      <ul className="space-y-1">
                        {category.subcategories.map((sub) => (
                          <li key={sub} className="text-sm hover:text-purple-600">
                            <Link to={`/${sub.toLowerCase().replace(/\s+/g, '-')}`}>{sub}</Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm">{category.content}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

