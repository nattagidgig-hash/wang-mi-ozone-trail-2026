import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import RaceCategories from "@/components/race-categories"
import Tickets from "@/components/tickets"
import Addons from "@/components/addons"
import SocialCards from "@/components/ui/card-fan-carousel"
import type { CardItem } from "@/components/ui/card-fan-carousel"
import Schedule from "@/components/schedule"
import EcoSection from "@/components/eco-section"
import FAQ from "@/components/faq"
import RegistrationForm from "@/components/registration-form"
import Footer from "@/components/footer"

const galleryCards: CardItem[] = [
  { imgUrl: "/ภาพฝันวังน้ำเขียว (5).png", alt: "วิวทิวทัศน์วังน้ำเขียว" },
  { imgUrl: "/ภาพฝันวังน้ำเขียว (6).png", alt: "เส้นทางเดินป่าวังน้ำเขียว" },
  { imgUrl: "/ภาพฝันวังน้ำเขียว (7).png", alt: "ธรรมชาติวังน้ำเขียว" },
  { imgUrl: "/ภาพฝันวังน้ำเขียว (8).png", alt: "บรรยากาศชุมชนวังน้ำเขียว" },
  { imgUrl: "/ภาพฝันวังน้ำเขียว (9).png", alt: "จุดชมวิววังน้ำเขียว" },
  { imgUrl: "/ภาพฝันวังน้ำเขียว (10).png", alt: "บรรยากาศวังน้ำเขียว" },
  { imgUrl: "/งานวิ่งเทรลวังหมี วังน้ำเขียว (3).png", alt: "งานวิ่งเทรลวังหมี" },
  { imgUrl: "/งานวิ่งเทรลวังหมี วังน้ำเขียว (4).png", alt: "โปสเตอร์งานวิ่งเทรล" },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RaceCategories />
        <Tickets />
        <Addons />
        <section className="py-20 px-4 bg-cream">
          <div className="max-w-6xl mx-auto text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-earth-darker font-[family-name:var(--font-heading)] mb-3">
              ภาพบรรยากาศวังน้ำเขียว
            </h2>
            <p className="text-earth max-w-2xl mx-auto text-base lg:text-lg">
              สัมผัสธรรมชาติและวิถีชีวิตชุมชนผ่านภาพถ่าย
            </p>
          </div>
          <SocialCards cards={galleryCards} />
        </section>
        <Schedule />
        <EcoSection />
        <FAQ />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  )
}
