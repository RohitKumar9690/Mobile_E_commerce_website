import React, { useState } from 'react';
import { products } from '../data/Poduct'; // Make sure this points to your actual data file
import { useParams } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react'
import WhatsAppModal from '../Components/WhatsaapModal';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle opening the modal
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    // Handle closing the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    // console.log(id);

    // Find the product by its id
    const product = products.find((p) => p.id === parseInt(id));

    // Handle the case when product is not found
    if (!product) return <div>Product not found</div>;

    const [mainImage, setMainImage] = useState(product.mainImage);
    const [selectedThumbnail, setSelectedThumbnail] = useState(product.thumbnails[0]);

    // Handle thumbnail click
    const handleThumbnailClick = (imageUrl) => {
        setMainImage(imageUrl);
        setSelectedThumbnail(imageUrl);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col lg:flex-row bg-white p-4 rounded-lg shadow-lg">
                {/* Left Column - Image Section */}
                <div className="lg:w-1/3">
                    <div className="flex flex-col lg:flex-row-reverse items-center">
                        {/* Main Product Image */}
                        <img
                            id="mainImage"
                            alt="Product Image"
                            className="w-60 h-80 mb-4 cursor-pointer object-contain"
                            src={mainImage}
                        />

                        {/* Thumbnails */}
                        <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 mr-8">
                            {product.thumbnails.map((thumbnail, index) => (
                                <img
                                    key={index}
                                    onClick={() => handleThumbnailClick(thumbnail)}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`w-12 h-12 cursor-pointer object-contain ${selectedThumbnail === thumbnail ? 'border-2 border-blue-500 rounded-md' : 'border-2 border-gray-500'}`}
                                    src={thumbnail}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Product Details */}
                <div className="lg:w-2/3 lg:pl-8">
                    <h1 className="text-4xl font-bold">
                        {product.title}
                    </h1>
                    <div className="mt-4">
                        <span className="text-3xl font-bold text-green-600">
                            {product.price}
                        </span>
                        <span className="text-gray-600 line-through">
                            {product.originalPrice}
                        </span>
                        <span className="text-green-600">
                            {product.discount}
                        </span>
                    </div>



                    <div className="mt-4">
                        <div className="flex">
                            <p className="text-blue-600 border-b-2 font-bold border-blue-500 mb-2">
                                Key Features
                            </p></div>
                        <p className="text-gray-600">{product.description}</p>
                    </div>
                    <div className="mt-4">
                        <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleOpenModal}>
                            Buy Now <ShoppingCart className="h-4 w-4 ml-2" />
                        </button>
                    </div>
                </div>
                <WhatsAppModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    phoneNumber="+91 1234567890" 
                    message={`Hello, I would like to buy the product "${product.title}" with ID: ${product.id}.`}
                />
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg mt-4">
                <h2 className="text-xl font-bold">
                    Specifications
                </h2>
                <div className="mt-4">
                    <table className="w-full text-left">
                        {product.specifications.map((spec, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2 font-bold">{spec.label}</td>
                                <td className="border px-4 py-2">{spec.value}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ProductDetailsPage;
