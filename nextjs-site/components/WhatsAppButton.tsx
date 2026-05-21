export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/351920309613"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="wa-float"
    >
      <i className="fab fa-whatsapp text-2xl" />
      <span className="hidden md:inline font-semibold text-sm">WhatsApp</span>
    </a>
  )
}
