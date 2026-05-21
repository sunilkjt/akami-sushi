export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/351920309613"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-btn fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-xl z-50 flex items-center gap-2 transition-colors"
    >
      <i className="fab fa-whatsapp text-2xl" />
      <span className="hidden md:inline font-semibold text-sm">WhatsApp</span>
    </a>
  )
}
