"use client";

import { useState } from "react";
import { useTranslations, useLocale } from '@/contexts/LanguageContext';

export default function ProductDetails({ brand }) {
  const images = brand.images;
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const t = useTranslations('brands');
  const locale = useLocale();

  return (
    <section className="bg-primary-50 py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* ── MOBILE (< lg): stack vertically ── */}
        <div className="flex flex-col gap-6 lg:hidden">

          {/* Main image */}
          <div className="w-full aspect-square bg-white rounded-2xl shadow-card border border-gray-100 flex items-center justify-center p-4 sm:p-6">
            <img
              src={selectedImage}
              alt="Selected"
              className="object-contain max-h-full max-w-full"
            />
          </div>

          {/* Thumbnails — horizontal scroll row */}
          <div className="flex flex-row gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`w-14 h-14 sm:w-16 sm:h-16 p-1 border-2 rounded-xl bg-white shadow-sm hover:border-primary-400 transition-all duration-200 flex-shrink-0 ${
                  selectedImage === img ? "border-primary-600 shadow-emerald-sm" : "border-gray-200"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </button>
            ))}
          </div>

          {/* Features */}
          <div className="w-full bg-white rounded-2xl shadow-card border border-gray-100 flex flex-col overflow-hidden">
            <div className="bg-primary-600 px-5 py-3.5">
              <h2 className="text-base font-bold text-white">Product Features</h2>
            </div>
            <div className="p-5">
              <FeatureList features={brand.features[locale]} />
            </div>
          </div>
        </div>

        {/* ── DESKTOP (>= lg): 3-column layout ── */}
        <div className="hidden lg:grid lg:grid-cols-[auto_1fr_1fr] gap-8 xl:gap-10 items-start justify-center">

          {/* Left: Thumbnails vertical */}
          <div className="flex flex-col gap-3 sticky top-24 self-start max-h-[calc(100vh-120px)] overflow-y-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 p-1 border-2 rounded-xl bg-white shadow-sm hover:border-primary-400 transition-all duration-200 flex-shrink-0 ${
                  selectedImage === img ? "border-primary-600 shadow-emerald-sm" : "border-gray-200"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </button>
            ))}
          </div>

          {/* Center: Large image */}
          <div className="w-full max-w-xs lg:max-w-md xl:max-w-lg aspect-square bg-white rounded-2xl shadow-card border border-gray-100 flex items-center justify-center p-6 sticky top-24 self-start">
            <img
              src={selectedImage}
              alt="Selected"
              className="object-contain max-h-full max-w-full"
            />
          </div>

          {/* Right: Features */}
          <div className="w-full max-w-xs lg:max-w-md xl:max-w-lg max-h-[600px] bg-white rounded-2xl shadow-card border border-gray-100 sticky top-24 self-start flex flex-col overflow-hidden">
            <div className="bg-primary-600 px-6 py-4">
              <h2 className="text-lg font-bold text-white">Product Features</h2>
            </div>
            <div className="p-6 overflow-y-auto flex-1">
              <FeatureList features={brand.features[locale]} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Shared feature list used in both mobile and desktop
function FeatureList({ features }) {
  return (
    <ul className="space-y-4">
      {features.map((feature, index) => {
        if (typeof feature === "string") {
          return (
            <li key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
            </li>
          );
        } else {
          return (
            <li key={index} className="flex flex-col gap-1">
              {feature.title && (
                <h3 className="text-sm font-bold text-gray-900">{feature.title}</h3>
              )}
              {feature.description && (
                <p className="text-gray-500 leading-relaxed text-sm">{feature.description}</p>
              )}
              {feature.bullets && feature.bullets.length > 0 && (
                <ul className="mt-1 space-y-1">
                  {feature.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-gray-500 text-sm">
                      <span className="text-primary-500 mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {feature.footer && (
                <p className="text-gray-500 mt-1 leading-relaxed text-sm">{feature.footer}</p>
              )}
            </li>
          );
        }
      })}
    </ul>
  );
} 