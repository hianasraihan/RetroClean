// components/Home.tsx
import Image from "next/image";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative bg-[#008080] text-white text-center py-28 px-4 flex items-center justify-center overflow-hidden"
    >
      {/* Background Logo (animated) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Kiri Atas */}
        <Image
          src="/Logo.png"
          alt="Logo kiri atas"
          width={300}
          height={300}
          className="absolute top-6 left-6 w-[150px] sm:w-[180px] opacity-40 animate-float"
          style={{ animationDelay: "0s" }}
        />
        {/* Tengah Atas */}
        <Image
          src="/Logo.png"
          alt="Logo tengah atas"
          width={300}
          height={300}
          className="absolute top-6 left-1/2 -translate-x-1/2 w-[150px] sm:w-[180px] opacity-40 animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        {/* Kanan Atas */}
        <Image
          src="/Logo.png"
          alt="Logo kanan atas"
          width={300}
          height={300}
          className="absolute top-6 right-6 w-[150px] sm:w-[180px] opacity-40 animate-float"
          style={{ animationDelay: "1s" }}
        />
        {/* Kiri Bawah */}
        <Image
          src="/Logo.png"
          alt="Logo kiri bawah"
          width={300}
          height={300}
          className="absolute bottom-6 left-6 w-[150px] sm:w-[180px] opacity-40 animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        {/* Tengah Bawah */}
        <Image
          src="/Logo.png"
          alt="Logo tengah bawah"
          width={300}
          height={300}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[150px] sm:w-[180px] opacity-40 animate-float"
          style={{ animationDelay: "2s" }}
        />
        {/* Kanan Bawah */}
        <Image
          src="/Logo.png"
          alt="Logo kanan bawah"
          width={300}
          height={300}
          className="absolute bottom-6 right-6 w-[150px] sm:w-[180px] opacity-40 animate-float"
          style={{ animationDelay: "2.5s" }}
        />
      </div>

      {/* Teks Utama */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center justify-center gap-2 text-center">
        <h2 className="text-[60px] sm:text-[90px] md:text-[145px] font-extrabold leading-none animate-fade-up">
          OUR
        </h2>
        <h1 className="text-[60px] sm:text-[90px] md:text-[145px] font-extrabold leading-none animate-fade-up">
          SHOES
        </h1>
        <div className="mt-5 flex gap-2 sm:gap-3 md:gap-4 animate-fade-up">
          {"LAUNDRY".split("").map((char, idx) => (
            <span
              key={idx}
              className="text-[20px] sm:text-xl md:text-3xl font-bold"
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
