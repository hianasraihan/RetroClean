"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/Before1.jpg", label: "Before" },
  { src: "/Before2.jpg", label: "Before" },
  { src: "/Before3.jpg", label: "Before" },
  { src: "/After1.jpg", label: "After" },
  { src: "/After2.jpg", label: "After" },
  { src: "/After3.jpg", label: "After" },
];

export default function Dokumentasi() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const showPrev = () => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex - 1 + images.length) % images.length);
    }
  };

  const showNext = () => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex + 1) % images.length);
    }
  };

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  return (
    <section id="dokumentasi" className="bg-[#008080] py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10">
          Dokumentasi
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="relative w-full aspect-[4/5] rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 border-2 border-transparent hover:border-white"
            >
              <Image
                src={img.src}
                alt={`Dokumentasi ${idx + 1}`}
                fill
                className="object-cover"
              />
              {img.label === "Before" && (
                <span className="absolute top-2 left-2 bg-[#008080] text-white text-xs font-bold px-2 py-1 rounded">
                  Before
                </span>
              )}
              {img.label === "After" && (
                <span className="absolute bottom-2 left-2 bg-[#008080] text-white text-xs font-bold px-2 py-1 rounded">
                  After
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-6 text-white text-4xl"
            onClick={closeLightbox}
          >
            &times;
          </button>

          <button
            className="absolute left-4 text-white text-4xl"
            onClick={showPrev}
          >
            &#10094;
          </button>

          <div className="max-w-[90%] max-h-[85vh] px-4 text-center">
            <img
              src={images[activeIndex].src}
              alt="Preview"
              className="max-h-[80vh] mx-auto object-contain rounded-lg"
            />
          </div>

          <button
            className="absolute right-4 text-white text-4xl"
            onClick={showNext}
          >
            &#10095;
          </button>
        </div>
      )}
    </section>
  );
}
