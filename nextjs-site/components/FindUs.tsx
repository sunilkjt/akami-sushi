export default function FindUs() {
  return (
    <section className="section-card my-12 px-4">
      <h2 className="text-4xl font-serif text-center mb-6">📍 Find Us</h2>
      <div className="w-full h-[400px] max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.168479055289!2d-9.180463799999998!3d38.75983959999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193350a62db15f%3A0x5bda4d8dfce15f51!2sAkami%20Sushi!5e0!3m2!1sen!2spt!4v1751978046351!5m2!1sen!2spt"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Akami Sushi location"
        />
      </div>
    </section>
  )
}
