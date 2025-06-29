"use client";

import React, { useState } from 'react';

export default function TentangRetroClean() {
  const [showMore, setShowMore] = useState(false);

  const fullSteps = [
    "Inspection : Pemeriksaan menyeluruh untuk mengetahui kondisi sepatu.",
    "Dusting : Menghilangkan debu dan kotoran permukaan sebelum pencucian.",
    "Stain Removal : Penanganan noda dengan teknik dan bahan yang tepat.",
    "Deep Cleaning : Pencucian menyeluruh sesuai material dan warna sepatu.",
    "Midsole & Outsole Treatment : Membersihkan dan memutihkan bagian sol sepatu.",
    "Upper Cleaning : Membersihkan bagian atas sepatu dengan bahan yang sesuai.",
    "Insole Cleaning : Membersihkan bagian dalam sepatu untuk kenyamanan optimal.",
    "Deodorizing : Menghilangkan bau tak sedap dan memberikan aroma segar.",
    "Drying : Proses pengeringan dengan metode aman untuk menjaga bentuk.",
    "Finishing : Pengecekan akhir untuk memastikan kualitas hasil perawatan."
  ];

  const displayedSteps = showMore ? fullSteps : fullSteps.slice(0, 5);

  return (
    <section id="about" className="bg-[#008080] text-white px-6 py-14 rounded">
      {/* Judul tengah */}
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-20">
          About <span className="text-black">Retro Clean</span>
        </h2>
      </div>

      {/* Subjudul dan paragraf di kiri */}
      <div className="text-left">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">
          10 Tahapan Perawatan Sepatu Profesional
        </h3>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Di Retro Clean, kami tidak hanya mencuci sepatu kami merawatnya dengan penuh presisi.
          Kami menghadirkan <strong>10 Tahapan Eksklusif Perawatan Sepatu</strong> untuk menjaga tampilan,
          kualitas, dan daya tahan sepatu Anda.
        </p>
      </div>

      {/* List Tahapan juga di kiri */}
      <ol className="list-decimal list-inside space-y-4 text-left text-base sm:text-lg md:text-xl mb-8">
        {displayedSteps.map((step, index) => (
          <li key={index}>
            <strong>{step.split(':')[0]}</strong>: {step.split(':')[1]}
          </li>
        ))}
      </ol>

      {/* Tombol toggle tetap di tengah */}
      <div className="text-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-white underline text-sm sm:text-base hover:text-gray-200 transition"
        >
          {showMore ? 'Sembunyikan ▲' : 'Tampilkan Selengkapnya ▼'}
        </button>
      </div>
    </section>
  );
}
