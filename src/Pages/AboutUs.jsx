import React from 'react'
import highquality from'../icons/100-satisfaction-guaranteed-gold-silver-badge-premium-vector_616879-474.jpg'
const AboutUs = () => {
  return (
    <div className='flex justify-center'> <section class="bg-white p-6 rounded-lg  relative">
    {/* <img alt="Background image showing a variety of mobile phones" class="absolute inset-0 w-full h-full object-cover opacity-20 rounded-lg" src="https://placehold.co/1200x800"/> */}
    <div class="relative z-10">
     <h2 class="text-3xl font-bold mb-4">
      About Us
     </h2>
     <p class="mb-4 flex items-center justify-center font-bold text-gray-500">
      Welcome to Mobile Products! We specialize in selling high-quality mobile products at affordable prices. Our mission is to provide our customers with the best value for their money without compromising on quality.
     </p>
     <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
       <div class="bg-gray-200 p-4 rounded-lg shadow-md">
        <img alt="A high-quality mobile phone displayed on a stand" class=" object-fill rounded-lg mb-4" src={highquality}/>
        <h3 class="text-xl font-bold mb-2">
         High-Quality Products
        </h3>
        <p>
         We offer a wide range of mobile products that are built to last and perform exceptionally well.
        </p>
       </div>
      </div>
      <div class=" md:w-1/2 lg:w-1/3 px-4 mb-4">
       <div class="bg-gray-200 p-4 rounded-lg shadow-md">
        <img alt="A price tag showing a low price for a mobile phone" class=" object-fill rounded-lg mb-4" src="https://img.freepik.com/free-vector/e-shopping-cartoon-web-icon-online-store-cashback-service-money-returning-financial-refund-idea-return-investment-internet-income_335657-745.jpg?t=st=1737966673~exp=1737970273~hmac=72673f776fcfd6b7de73196d6564d128baccc994b43146eff3d91bb62c5fb256&w=740"/>
        <h3 class="text-xl font-bold mb-2">
         Affordable Prices
        </h3>
        <p>
         Our products are priced competitively to ensure that you get the best deal possible.
        </p>
       </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
       <div class="bg-gray-200 p-4 rounded-lg shadow-md">
        <img alt="A customer service representative assisting a customer" class=" object-fill rounded-lg mb-4" src="https://img.freepik.com/free-vector/good-customer-service-from-call-center-phone-conversation-vector_1284-43144.jpg?t=st=1737966825~exp=1737970425~hmac=24aede9b655dfa37c48eb32a4b9e221fd40551a86f5f44ae5f51f89fd2d4112d&w=740"/>
        <h3 class="text-xl font-bold mb-2">
         Excellent Customer Service
        </h3>
        <p>
         Our team is dedicated to providing you with the best customer service experience possible.
        </p>
       </div>
      </div>
      {/* <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
       <div class="bg-gray-200 p-4 rounded-lg shadow-md">
        <img alt="A mobile phone with advanced features displayed on a stand" class=" object-fill rounded-lg mb-4" src="https://placehold.co/300x200"/>
        <h3 class="text-xl font-bold mb-2">
         Advanced Features
        </h3>
        <p>
         Our mobile products come with the latest features to keep you ahead of the curve.
        </p>
       </div>
      </div> */}
      {/* <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
       <div class="bg-gray-200 p-4 rounded-lg shadow-md">
        <img alt="A mobile phone with a sleek design displayed on a stand" class="w-full h-48 object-cover rounded-lg mb-4" src="https://placehold.co/300x200"/>
        <h3 class="text-xl font-bold mb-2">
         Sleek Design
        </h3>
        <p>
         Our products are designed to be both functional and aesthetically pleasing.
        </p>
       </div>
      </div> */}
      {/* <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
       <div class="bg-gray-200 p-4 rounded-lg shadow-md">
        <img alt="A mobile phone with a long battery life displayed on a stand" class="w-full h-48 object-cover rounded-lg mb-4" src="https://placehold.co/300x200"/>
        <h3 class="text-xl font-bold mb-2">
         Long Battery Life
        </h3>
        <p>
         Enjoy extended usage with our mobile products that come with long-lasting batteries.
        </p>
       </div>
      </div> */}
     </div>
    </div>
   </section>
   </div>
  )
}

export default AboutUs