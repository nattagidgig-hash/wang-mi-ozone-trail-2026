import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import RaceCategories from "@/components/race-categories"
import Tickets from "@/components/tickets"
import Addons from "@/components/addons"
import PhotoGallery from "@/components/photo-gallery"
import Schedule from "@/components/schedule"
import EcoSection from "@/components/eco-section"
import FAQ from "@/components/faq"
import RegistrationForm from "@/components/registration-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RaceCategories />
        <Tickets />
        <Addons />
        <PhotoGallery />
        <Schedule />
        <EcoSection />
        <FAQ />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  )
}
