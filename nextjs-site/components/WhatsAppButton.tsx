export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/351920309613"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg z-50 flex items-center space-x-2"
    >
      <i className="fab fa-whatsapp text-2xl" />
      <span className="hidden md:inline font-medium">WhatsApp</span>
    </a>
  )
}
