"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Services() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const scrollLeft = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth =
      container.firstChild instanceof HTMLElement
        ? container.firstChild.offsetWidth
        : 300;
    container.scrollBy({ left: -cardWidth - 16, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth =
      container.firstChild instanceof HTMLElement
        ? container.firstChild.offsetWidth
        : 300;
    container.scrollBy({ left: cardWidth + 16, behavior: "smooth" });
  };

  const phoneNumber = "628982815456";

  const services = [
    { title: "YES (Yakin Esok Selesai)", desc: "Cepat bersih rapi profesional", price: "Rp 40.000" },
    { title: "TTS (Today Tentu Selesai)", desc: "Selesai di hari sama", price: "Rp 40.000" },
    { title: "Sepokat Putih", desc: "Putih kembali seperti baru", price: "Rp 80.000" },
    { title: "Sepokat/Sandal Bocil", desc: "Nyaman bersih aman higienis", price: "Rp 20.000 - 35.000" },
    { title: "Sepatu Sandal/Selop", desc: "Untuk alas kaki santai", price: "Rp 35.000" },
    { title: "Bye-Bye Kuning", desc: "Hilangkan kuning membandel maksimal", price: "Rp 100.000 - 120.000" },
    { title: "Canvas, Polyester, & Mesh", desc: "Teknik lembut bahan ringan", price: "Rp 55.000" },
    { title: "Leather, Suede, Nubuck", desc: "Sepatu bersih ekstra hati-hati", price: "Rp 70.000 - 85.000" },
    { title: "Topi", desc: "Dicuci dan dibentuk ulang", price: "Rp 30.000" },
    { title: "Tas Gemblok", desc: "Tas Anda kembali segar", price: "Rp 30.000 - 50.000" },
    { title: "Tas Ibu-Ibu", desc: "Tas wanita bersih wangi", price: "Rp 50.000" },
    { title: "Tas Bocil", desc: "Tas anak bersih higienis", price: "Rp 30.000 - 40.000" },
  ];

  const handleContact = (title: string) => {
    const message = `Halo, saya tertarik dengan layanan ${title}. Boleh info lebih lanjut?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="services"
      className="py-20 px-4 bg-white relative z-30 overflow-visible"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#008080] mb-1">
        Our Services
      </h2>

      {/* Tombol Panah Kiri */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#008080] text-white p-2 rounded-full z-50"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 px-6 scroll-smooth snap-x snap-mandatory pb-6 pt-20 relative z-20"
        style={{
          scrollbarWidth: "none",
          overflowX: "auto",
          overflowY: "visible",
        }}
      >
        {services.map((service, index) => {
          const isSelected = selectedIndex === index;

          return (
            <div
              key={index}
              onClick={() =>
                setSelectedIndex(isSelected ? null : index)
              }
              className={`min-w-[260px] snap-center flex-shrink-0 border rounded-lg p-6 text-center cursor-pointer transition-all duration-300 transform relative
                ${
                  isSelected
                    ? "bg-[#008080] text-white border-teal-900 scale-105 z-[60]"
                    : "bg-white text-black border-[#008080] hover:border-teal-800 hover:scale-105 hover:z-[50]"
                }`}
              style={{ transformOrigin: "bottom center" }}
            >
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-xl font-bold
                ${isSelected ? "bg-white text-[#008080]" : "bg-[#008080] text-white"}`}
              >
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>
              <p
                className={`mb-2 text-sm ${
                  isSelected ? "text-white" : "text-gray-700"
                }`}
              >
                {service.desc}
              </p>
              <p
                className={`font-semibold mb-4 ${
                  isSelected ? "text-white" : "text-[#008080]"
                }`}
              >
                {service.price}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleContact(service.title);
                }}
                className={`py-2 px-4 rounded transition 
                  ${
                    isSelected
                      ? "bg-white text-[#008080] hover:bg-gray-200"
                      : "bg-[#008080] text-white hover:bg-teal-900"
                  }`}
              >
                Contact Us
              </button>
            </div>
          );
        })}
      </div>

      {/* Tombol Panah Kanan */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#008080] text-white p-2 rounded-full z-50"
      >
        <ChevronRight size={20} />
      </button>
    </section>
  );
}
