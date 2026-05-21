export default function ImageSlider() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden section-card p-0">
      <div className="slide inset-0 w-full h-full">
        <img src="/images/hero1.jpg" className="object-cover w-full h-full" alt="Sushi Slide 1" />
      </div>
      <div className="slide-delay-1 inset-0 w-full h-full">
        <img src="/images/hero2.jpg" className="object-cover w-full h-full" alt="Sushi Slide 2" />
      </div>
      <div className="slide-delay-2 inset-0 w-full h-full">
        <img src="/images/hero3.jpg" className="object-cover w-full h-full" alt="Sushi Slide 3" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4 z-10">
        <div>
          <h2 className="text-5xl font-serif drop-shadow-lg">Akami Sushi</h2>
          <p className="text-xl font-sans mt-2 drop-shadow">
            Refined Japanese Cuisine in the Heart of Lisbon
          </p>
        </div>
      </div>
    </section>
  )
}
