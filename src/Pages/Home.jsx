import React, { useRef } from 'react';
import Coursel from '../Components/Coursel';
import CategoriesCards from '../Components/CategoriesCards';
import appleLogo from '../icons/apple-173-svgrepo-com.svg';
import xiaomiLogo from '../icons/xiaomi-svgrepo-com.svg';
import googleLogo from '../icons/google-color-svgrepo-com.svg';
import samsungLogo from '../icons/samsung-1-logo-svgrepo-com.svg';
import oppologo from '../icons/oppo-1.svg';
import realmelogo from '../icons/realme.svg';
import onepluslogo from '../icons/oneplus.svg';
import iqoologo from '../icons/iqoo.svg';
import pocologo from '../icons/poco.svg';
import lenovologo from '../icons/lenovo.svg';
import asuslogo from '../icons/asus.svg';
import motorolaLogo from '../icons/motorola.svg';
import FourGlogo from '../icons/network-cellular-4g-svgrepo-com.svg';
import FifveGlogo from '../icons/network-cellular-5g-svgrepo-com.svg';
import androidOSlogo from '../icons/android-color-svgrepo-com.svg';
import iosLogo from '../icons/ios-svgrepo-com.svg';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/Poduct';
import ProductCard from '../Components/ProductCard';
import { ChevronsLeft, ChevronsRight, Section } from 'lucide-react';
import GridDesign from '../Components/GridDesign';
import LogoWall from '../Components/Animations/Logowall';
import Slider from 'react-slick';
const Home = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const navigate = useNavigate();

  const handleNavigate = (category) => {
    navigate(`/category/${category}`);
    // console.log(category);

  }

  const handleProductClick = (id) => {
    navigate(`/Product-Details/${id}`)
    // console.log(id)
  }

  const handleNavigateNetwork = (network) => {
    navigate(`/networkCategory/${network}`);
    // console.log(network);
  }
  const handleNavigateOS = (os) => {
    navigate(`/operatingSystem/${os}`);
    // console.log(os);
  }
  const scrollContainerRef = useRef(null);
  const ScrollMobile = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.slickPrev();
    }
  };
  const scrollLeft1 = () => {
    if (ScrollMobile.current) {
      ScrollMobile.current.slickPrev();
    }
  };
  // Function to scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.slickNext();
    }
  };

  const scrollRight1 = () => {
    if (ScrollMobile.current) {
      ScrollMobile.current.slickNext();
    }
  };
  const logoImgs = [
    { imgUrl: appleLogo, altText: "React Bits Logo" },
    { imgUrl: xiaomiLogo, altText: "React Bits Logo" },
    { imgUrl: googleLogo, altText: "React Bits Logo" },
    { imgUrl: samsungLogo, altText: "React Bits Logo" },
    { imgUrl: onepluslogo, altText: "React Bits Logo" },
    { imgUrl: motorolaLogo, altText: "React Bits Logo" },
    { imgUrl: asuslogo, altText: "React Bits Logo" }
  ];

  const categories = [
    { logo: appleLogo, title: 'Apple', textColor: 'text-black' },
    { logo: xiaomiLogo, title: 'Xiaomi', textColor: 'text-black' },
    { logo: googleLogo, title: 'Google', textColor: 'text-black' },
    { logo: samsungLogo, title: 'Samsung', textColor: 'text-black' },
    { logo: oppologo, title: 'Oppo', textColor: 'text-black' },
    { logo: realmelogo, title: 'Realme', textColor: 'text-black' },
    { logo: onepluslogo, title: 'OnePlus', textColor: 'text-black' },
    { logo: iqoologo, title: 'IQOO', textColor: 'text-black' },
    { logo: pocologo, title: 'Poco', textColor: 'text-black' },
    { logo: lenovologo, title: 'Lenovo', textColor: 'text-black' },
    { logo: asuslogo, title: 'Asus', textColor: 'text-black' },
    { logo: motorolaLogo, title: 'Motorola', textColor: 'text-black' },
  ];

  const NetworksCategories = [{
    logo: FourGlogo,
    title: '4G',
    textColor: 'text-black'
  },
  {
    logo: FifveGlogo,
    title: '5G',
    textColor: 'text-black'
  }
  ]

  const OperatingSystemCategories = [{
    logo: androidOSlogo,
    title: 'Android',
    textColor: 'text-black'
  }, {
    logo: iosLogo,
    title: 'iOS',
    textColor: 'text-black'
  }]

  return (
    <div>
      <Coursel />
      <section className="mt-10 p-5 relative">
  <div>
    <h2 className="flex justify-center items-centerlg:text-3xl font-bold text-gray-700 sm:text-2xl">Latest Products</h2>
  </div>
  
  <button
    onClick={scrollLeft1}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white  ml-5 rounded-full shadow-lg z-10"
  >
    <ChevronsLeft />
  </button>
  
  {/* Slick Slider */}
  <Slider {...settings} ref={ScrollMobile} className="flex overflow-x-hidden">
    {products.map((product) => (
      <div key={product.id} className='mb-5' onClick={() => handleProductClick(product.id)}>
        <ProductCard
          id={product.id}
          title={product.title}
          image={product.mainImage}
          price={product.price}
          rating={product.rating}
          category={product.category}
          reviews={product.reviews}
        />
      </div>
    ))}
  </Slider>

  <button
    onClick={scrollRight1}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full mr-5 shadow-lg z-10"
  >
    <ChevronsRight />
  </button>
</section>

      <section className="mt-10 p-5">
        <div className="ml-5">
          <h2 className="flex justify-center items-centerlg:text-3xl font-bold text-gray-700 sm:text-2xl">Categories by Brand</h2>
        </div>
        <div className="relative mt-5">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white  ml-5 rounded-full shadow-lg z-10"
          >
            <ChevronsLeft />          </button>

          {/* Scrollable Cards Container */}
          <Slider {...settings}
            ref={scrollContainerRef}
            className="flex overflow-x-hidden space-x-4 px-4 pb-2 scroll-smooth"
          >
            {categories.map((category, index) => (
              <CategoriesCards
                key={index}
                logo={category.logo}
                title={category.title}
                textColor={category.textColor}
                getOncategory={() => handleNavigate(category.title)}
              />
            ))}
          </Slider>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full mr-5 shadow-lg z-10"
          >
            <ChevronsRight />          </button>
        </div>
      </section>
      <section className='mt-10'>
        <div className="ml-5">
          <h2 className="flex justify-center items-centerlg:text-3xl font-bold text-gray-700 sm:text-2xl">Categories by Network</h2>
        </div>
        <div className='flex'>
          {
            NetworksCategories.map((category, index) => (
              <CategoriesCards
                key={index}
                logo={category.logo}
                title={category.title}
                textColor={category.textColor}
                getOncategory={() => handleNavigateNetwork(category.title)}
              />
            ))
          }</div>

      </section>

      <section className='mt-10'>
        <div className="ml-5">
          <h2 className="flex justify-center items-centerlg:text-3xl font-bold text-gray-700 sm:text-2xl">Categories by operating system</h2>
        </div>
        <div className='flex'>
          {
            OperatingSystemCategories.map((category, index) => (
              <CategoriesCards
                key={index}
                logo={category.logo}
                title={category.title}
                textColor={category.textColor}
                getOncategory={() => handleNavigateOS(category.title)}
              />
            ))
          }
        </div>
      </section>
      <section>
        {/* <GridDesign /> */}
      </section>
      <section>

        <div className='flex justify-center items-center mt-5 mb-5'>
          <h2 className="flex justify-center items-centerlg:text-3xl font-bold text-gray-700 sm:text-2xl">We are sells top qualities and Brand products</h2>
        </div>

        <div >
          <LogoWall
            items={logoImgs}
            direction='horizontal'
            pauseOnHover={true}
            size='clamp(8rem, 1rem + 20vmin, 25rem)'
            duration='60s'
            bgColor='#ffffff'
            bgAccentColor='#11111100'
          />
        </div>    
        </section>
    </div>
  );
};

export default Home;
