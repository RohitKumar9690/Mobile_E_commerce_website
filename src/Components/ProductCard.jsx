import { Scale, Heart, ShoppingCart } from "lucide-react";

export default function ProductCard({
  id,
  image,
  title,
  rating,
  reviews,
  originalPrice,
  discountedPrice,
  discountPercentage,
  onProductClick
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-80" onClick={ ()=> onProductClick(id)}>
      {/* Product ID and Floating Buttons */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-500 text-sm">id: {id}</span>
        <div className="flex space-x-2">
          <button
            className="bg-white p-2 rounded-full shadow-md"
            aria-label="Quick View"
          >
            <Scale className="h-4 w-4 text-blue-500" />
          </button>
          <button
            className="bg-white p-2 rounded-full shadow-md"
            aria-label="Add to Favorites"
          >
            <Heart className="h-4 w-4 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Product Image */}
      <div className="flex justify-center mb-4">
        <img
          alt={title}
          className="w-40 h-50 object-fill"
          src={image}
        
        />
      </div>

      {/* Product Title */}
      <h2 className="text-lg font-semibold mb-2">{title}</h2>

      {/* Rating */}
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <i
              key={i}
              className={`fas fa-star ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        <span className="text-gray-500 text-sm ml-2">({reviews})</span>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-gray-500 line-through">{originalPrice}</span>
         
        </div>
        <span className="text-2xl font-bold">{discountedPrice}</span>
      </div>

      {/* Cart Button */}
      <button className="bg-blue-500 text-white p-3 rounded-full w-full flex items-center justify-center">
        <ShoppingCart className="h-5 w-5" />
      </button>
    </div>
  );
}
