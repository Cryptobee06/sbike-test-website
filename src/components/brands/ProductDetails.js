// components/ProductDetails.js
"use client";

import { useState } from "react";
import { useTranslations, useLocale } from '@/contexts/LanguageContext';
export default function ProductDetails({ brand }) {
  const images = brand.images;
  const features = brand.features;
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const t = useTranslations('brands');
  const locale = useLocale();

  return (
    <section className="bg-[#f9fafb] py-12 px-4 md:px-12">
      <div className="flex flex-col lg:flex-row gap-10 items-start justify-center max-w-7xl mx-auto">
        {/* Left: Thumbnails */}
        <div className="flex lg:flex-col flex-row gap-4">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`w-16 h-16 p-1 border rounded-md bg-white shadow-sm hover:border-blue-500 transition ${
                selectedImage === img ? "border-blue-600" : "border-gray-300"
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="object-cover w-full h-full rounded"
              />
            </button>
          ))}
        </div>

        {/* Center: Large Image */}
        <div className="w-full lg:w-[480px] aspect-square bg-white rounded-xl shadow-md flex items-center justify-center p-4">
          <img
            src={selectedImage}
            alt="Selected"
            className="object-contain max-h-full max-w-full"
          />
        </div>

        {/* Right: Features */}
        <div className="w-full max-w-md bg-white rounded-xl shadow-md border border-blue-100 p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Product Features</h2>
          {/* <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
            {features.map((feature, idx) => (
              <li key={idx} className="flex gap-2 items-start">
                <span className="text-blue-600 mt-1">✔</span>
                {feature}
              </li>
            ))}
          </ul> */}
             <ul className="space-y-3">
                {brand.features[locale].map((feature, index) => (
                  <li key={index} className="flex items-start">
                     <span className="text-blue-600 mt-1">✔</span>  
                    <span className="text-gray-700 ml-5">{feature}</span>
                  </li>   
                ))}
              </ul>
        </div>
      </div>
    </section>
  );
}
