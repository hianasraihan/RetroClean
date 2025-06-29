import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-[#008080] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Contact us</h2>
        <p className="text-lg mb-10">
          Hubungi kami untuk pertanyaan, pemesanan, atau kerja sama.
        </p>

        <div className="flex justify-center gap-10">
          {/* WhatsApp */}
          <a
            href="https://wa.me/628982815456"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:scale-110 transition-transform"
          >
            <div className="bg-white text-[#25D366] p-5 rounded-full shadow-lg">
              <FaWhatsapp className="text-4xl" />
            </div>
            <span className="mt-2 text-sm font-semibold">WhatsApp</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/retro.cleans/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:scale-110 transition-transform"
          >
            <div className="bg-white text-[#E4405F] p-5 rounded-full shadow-lg">
              <FaInstagram className="text-4xl" />
            </div>
            <span className="mt-2 text-sm font-semibold">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
