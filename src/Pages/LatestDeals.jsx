import React, { useState } from 'react'
import ProductCard from '../Components/ProductCard'
import AnimatedText from '../Components/AnimatedText';
import BrandFilter from '../Components/BrandFilter';
import PriceFilter from '../Components/PriceFlter';
import SearchFilter from '../Components/Searchfilter';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/Poduct';
const LatestDeals = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const navigate = useNavigate();

const handleProductClick=(id)=>{
  navigate(`/Product-Details/${id}`)
  console.log(id)
}


const filteredProducts = products.filter((product) => {
  // Filter by search query
  const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());

  // Filter by brand
  const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;

  // Filter by price range
  let matchesPrice = true;
  const price = parseFloat(product.price.replace(/[^\d.-]/g, ''));  // Remove non-numeric characters if any
  
  if (isNaN(price)) {
    matchesPrice = false; // If the price is not a valid number, exclude this product
  } else {
    if (selectedPriceRange === 'Low') {
      matchesPrice = price < 50000;
    } else if (selectedPriceRange === 'Mid') {
      matchesPrice = price >= 50000 && price <= 1000000;
    } else if (selectedPriceRange === 'High') {
      matchesPrice = price > 1000000;
    }
  }

  return matchesBrand && matchesPrice && matchesSearch;
});

  return (
    <div><AnimatedText className="" />
      <div className="flex flex-col sm:flex-row justify-center p-4 space-y-4 sm:space-y-0">
        <SearchFilter searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <BrandFilter selectedBrand={selectedBrand} onBrandChange={setSelectedBrand} />
        <PriceFilter selectedPriceRange={selectedPriceRange} onPriceRangeChange={setSelectedPriceRange} />
      </div>


      <div className='flex justify-center space-x-4'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {/* Map over filtered products and render ProductCard */}
          {filteredProducts.length === 0 ? (
            <p>No products match your filters</p>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.mainImage}
                title={product.title}
                rating={product.rating}
                reviews={product.reviews}
                originalPrice={product.originalPrice}
                discountedPrice={product.price}
                discountPercentage={product.discountPercentage}
                onProductClick={() => handleProductClick(product.id)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default LatestDeals