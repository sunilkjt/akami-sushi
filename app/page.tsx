import Hero from '@/components/Hero'
import ImageSlider from '@/components/ImageSlider'
import AboutSection from '@/components/AboutSection'
import DineIn from '@/components/DineIn'
import OrderOnline from '@/components/OrderOnline'
import GalleryLightbox from '@/components/GalleryLightbox'
import CTASection from '@/components/CTASection'
import FindUs from '@/components/FindUs'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const galleryImages = [
  '/images/WhatsApp Image 2025-04-25 at 03.41.25_0249ca50.jpg',
  '/images/WhatsApp Image 2025-07-07 at 15.48.28_88649eaf.jpg',
  '/images/WhatsApp Image 2025-07-07 at 15.48.28_965306ec.jpg',
  '/images/WhatsApp Image 2025-07-07 at 15.48.28_b43c9f59.jpg',
  '/images/WhatsApp Image 2025-07-07 at 15.48.28_3881a224.jpg',
  '/images/WhatsApp Image 2025-07-07 at 15.48.27_485e5f2a.jpg',
  '/images/WhatsApp Image 2025-07-07 at 15.48.27_4ed83f85.jpg',
  '/images/WhatsApp Image 2025-07-07 at 15.48.27_0e2b68b3.jpg',
  '/images/WhatsApp Image 2025-07-07 at 15.48.29_7079c717.jpg',
]

const menuImages = [
  '/images/WhatsApp Image 2025-07-07 at 15.48.29_6daa514b.jpg',
  '/images/WhatsApp Image 2025-07-07 at 15.48.29_ca1c567c.jpg',
  '/images/WhatsApp Image 2025-07-07 at 15.48.28_f3a285f7.jpg',
  '/images/WhatsApp Image 2025-07-07 at 15.48.28_c1fff619.jpg',
  '/images/WhatsApp Image 2025-07-07 at 15.48.28_bcf011e7.jpg',
  '/images/WhatsApp Image 2025-07-07 at 15.48.29_88c6e5e6.jpg',
]

export default function Home() {
  return (
    <>
      <div className="p-6 max-w-7xl mx-auto">
        <Hero />
        <ImageSlider />
        <AboutSection />
        <DineIn />
        <OrderOnline />
        <GalleryLightbox images={galleryImages} title="🍣 Gallery" />
        <GalleryLightbox images={menuImages} title="🍣 Our Menu" id="menu-gallery" />
        <CTASection />
        <FindUs />
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  )
}
