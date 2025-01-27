import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../data/Poduct'
import ProductCard from '../Components/ProductCard'

const CategoriesBrand = () => {
    const {category,network,os} = useParams()
    const navigate = useNavigate();
let Products = products;
    if(category){
        Products =products.filter((p) => p.brand === category);
    } 
    else if(network)
        {Products =products.filter((p) => p.Network === network)}
    else if(os){
        Products =products.filter((p) => p.OperatingSystem === os)
    }
    // console.log(Products);
    
    // console.log(category);
    
    const handleProductClick = (id) => {
      navigate(`/Product-Details/${id}`)
    }
  return (
    <div><div className='flex justify-center space-x-4'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {/* Map over filtered products and render ProductCard */}
              {Products.length === 0 ? (
                <p>No products found</p>
              ) : (
            Products.map((product) => (
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
          </div></div>
  )
}

export default CategoriesBrand