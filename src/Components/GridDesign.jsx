import React from 'react';
import BlurText from './Animations/BlurText';

const GridDesign = () => {
  return (
    <div className="container mx-auto p-4 mt-10">
      <div className='flex justify-center'>
        <BlurText
        text="Mobiles Purchase in low price"
        delay={150}
        animateBy="letters"
        direction="top"
        className="text-2xl mb-8"
      /></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* First column */}
        <div className="grid gap-4">
          <div>
            <img
              className="h-50 w-80 rounded-lg"
              src="https://rukminim1.flixcart.com/image/828/994/xif0q/mobile/y/m/i/-original-imah4jz66pzdzy4z.jpeg?q=60&crop=false"
              alt="Kashi Vishwanath Temple"
            />
          </div>
          <div>
            <img
              className="h-50 w-80 rounded-lg"
              src="https://rukminim1.flixcart.com/image/850/1000/xif0q/mobile/9/f/p/-original-imaghxenhnpyhn5u.jpeg?q=20&crop=false"
              alt="Image 2"
            />
          </div>
          <div>
            <img
              className="h-50 w-80 rounded-lg"
              src="https://rukminim1.flixcart.com/image/828/1242/xif0q/mobile/z/w/w/-original-imah4zp8pf2uehv4.jpeg?q=60&crop=false"
              alt="Image 3"
            />
          </div>
        </div>

        {/* Second column */}
        <div className="grid gap-4">
          <div>
            <img
              className="h-50 w-80  rounded-lg"
              src="https://rukminim1.flixcart.com/image/828/994/xif0q/mobile/z/v/s/-original-imah8ffzujxhgzpu.jpeg?q=60&crop=false"
              alt="Image 4"
            />
          </div>
          <div>
            <img
              className="h-50 w-80  rounded-lg"
              src="https://rukminim1.flixcart.com/image/828/994/xif0q/mobile/o/q/y/-original-imah8affczqnzp6s.jpeg?q=60&crop=false"
              alt="Image 5"
            />
          </div>
          <div>
            <img
              className="h-50 w-80  rounded-lg"
              src="https://rukminim1.flixcart.com/image/828/994/xif0q/mobile/s/8/d/pixel-8a-ga04988-in-google-original-imahyn3mskjbwphw.jpeg?q=60&crop=false"
              alt="Image 6"
            />
          </div>
        </div>

        {/* Third column */}
        <div className="grid gap-4">
          <div>
            <img
              className="h-50 w-80  rounded-lg"
              src="https://rukminim1.flixcart.com/image/828/994/xif0q/mobile/4/8/0/-original-imah8hd5nq8332tm.jpeg?q=60&crop=false"
              alt="Image 7"
            />
          </div>
          <div>
            <img
              className="h-50 w-80  rounded-lg"
              src="https://rukminim1.flixcart.com/image/828/994/kg8avm80/mobile/q/8/f/apple-iphone-12-dummyapplefsn-original-imafwg8dbzv8vh7t.jpeg?q=60&crop=false"
              alt="Image 8"
            />
          </div>
          <div>
            <img
              className="h-50 w-80  rounded-lg object-contain"
              src="https://rukminim1.flixcart.com/image/828/994/xif0q/mobile/j/z/3/-original-imagtc5fqyz8tu4c.jpeg?q=60&crop=false"
              alt="Image 9"
            />
          </div>
        </div>

        {/* Fourth column */}
        <div className="grid gap-4">
          <div>
            <img
              className="h-50 w-80  rounded-lg"
              src="https://rukminim1.flixcart.com/image/828/994/xif0q/mobile/g/p/d/nord-ce-3-lite-5g-cph2467-oneplus-original-imah4ehbgmz4qzhz.jpeg?q=60&crop=false"
              alt="Image 10"
            />
          </div>
          <div>
            <img
              className="h-50 w-80  rounded-lg"
              src="https://rukminim1.flixcart.com/image/828/994/xif0q/mobile/l/e/y/-original-imah6ruaz2gwcvnu.jpeg?q=60&crop=false"
              alt="Image 11"
            />
          </div>
          <div>
            <img
              className="h-50 w-80  rounded-lg"
              src="https://rukminim1.flixcart.com/image/828/994/kg8avm80/mobile/u/c/d/apple-iphone-12-pro-dummyapplefsn-original-imafwgbrzxg3nggd.jpeg?q=60&crop=false"
              alt="Image 12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridDesign;
