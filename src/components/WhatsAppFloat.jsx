import React from "react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/919561161009"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 right-6 z-50 group"
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md shadow-xl border border-white/30 hover:scale-110 hover:shadow-green-500/60 transition-all duration-300">
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </div>
    </a>
  );
};

export default WhatsAppFloat;
