"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, TreesIcon as TreeIcon, Mountain, X, ZoomIn } from "lucide-react"

function Countdown() {
  const target = new Date("2026-12-11T00:00:00+07:00")
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const diff = target.getTime() - now.getTime()
  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)))
  const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24))
  const minutes = Math.max(0, Math.floor((diff / (1000 * 60)) % 60))

  return (
    <div className="flex gap-4 justify-center lg:justify-start text-cream">
      {[
        { value: days, label: "วัน" },
        { value: hours, label: "ชั่วโมง" },
        { value: minutes, label: "นาที" },
      ].map((item) => (
        <div key={item.label} className="text-center">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)]">
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="text-xs sm:text-sm lg:text-base text-cream-alt/70">{item.label}</div>
        </div>
      ))}
    </div>
  )
}

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<Element | null>(null)

  useEffect(() => {
    triggerRef.current = document.activeElement
    closeRef.current?.focus()

    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", handler)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handler)
      document.body.style.overflow = ""
      ;(triggerRef.current as HTMLElement)?.focus()
    }
  }, [onClose])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return
    const container = containerRef.current
    if (!container) return
    const focusable = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault()
        last.focus()
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }

  return (
    <motion.div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-soil/95 flex items-center justify-center p-4 cursor-zoom-out"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <button
        ref={closeRef}
        onClick={onClose}
        className="absolute top-4 right-4 text-cream/60 hover:text-cream transition-colors"
        aria-label="Close"
      >
        <X className="h-8 w-8" aria-hidden="true" />
      </button>
      <motion.img
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-[90vw] w-auto h-auto rounded-xl shadow-2xl shadow-black/50 object-contain"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
    </motion.div>
  )
}

export default function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) {
      document.documentElement.style.scrollBehavior = "auto"
    }
    const handler = (e: MediaQueryListEvent) => {
      document.documentElement.style.scrollBehavior = e.matches ? "auto" : ""
    }
    mq.addEventListener("change", handler)
    return () => {
      mq.removeEventListener("change", handler)
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/ภาพฝันวังน้ำเขียว (5).png")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-soil/85 via-soil-light/70 to-earth-darker/85" />
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute inset-0 bg-gradient-to-t from-soil/90 via-soil/30 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <Mountain className="h-5 w-5 text-sage" aria-hidden="true" />
                <span className="text-sage text-sm lg:text-base tracking-[0.2em] uppercase font-medium">
                  Wang Mi Ozone Trail 2026
                </span>
                <Mountain className="h-5 w-5 text-sage" aria-hidden="true" />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-4 font-[family-name:var(--font-heading)] leading-[1.1]">
                วิ่งสูดโอโซน
                <br />
                <span className="text-sage">ชมวิถีเกษตรชุมชน</span>
              </h1>

              <p className="text-cream-alt/70 text-lg sm:text-xl lg:text-2xl mb-2 max-w-xl leading-relaxed">
                ลดคาร์บอนเพื่อผืนป่า — วิ่ง 1 ครั้ง... สร้างห้องเรียนธรรมชาติให้เด็กๆ ตลอดไป
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 text-cream-alt/60 text-sm sm:text-base lg:text-lg mb-8 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  11 - 13 ธ.ค. 2569
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  ต.วังหมี อ.วังน้ำเขียว จ.นครราชสีมา
                </span>
                <span className="flex items-center gap-1.5">
                  <TreeIcon className="h-4 w-4" aria-hidden="true" />
                  2 ระยะ 5กม. / 14กม.
                </span>
              </div>

              <div className="mb-10">
                <p className="text-cream-alt/50 text-sm lg:text-base mb-3 tracking-wider">อีกกี่วันถึงวันปล่อยตัว</p>
                <Countdown />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a href="#register">
                  <Button size="lg" className="bg-earth hover:bg-earth-dark text-cream font-bold text-base lg:text-lg shadow-lg shadow-soil/30">
                    สมัครเข้าร่วมงาน
                  </Button>
                </a>
              <a href="#categories">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cream/60 text-earth-darker bg-cream/70 hover:bg-cream hover:border-cream text-base lg:text-lg"
                >
                  ดูรายละเอียดระยะทาง
                </Button>
              </a>
              </div>
            </div>

            <div className="shrink-0 w-64 sm:w-72 lg:w-96">
              <div className="relative group cursor-pointer" onClick={() => setLightboxOpen(true)}>
                <div className="absolute -inset-3 bg-sage/10 rounded-2xl blur-sm group-hover:bg-sage/20 transition-all" />
                <div className="absolute -inset-1 bg-gradient-to-br from-sage/5 to-earth-light/5 rounded-2xl" />
                <div className="absolute top-2 right-2 z-10 bg-soil/60 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="h-4 w-4 text-cream" aria-hidden="true" />
                </div>
                <img
                  src="/งานวิ่งเทรลวังหมี วังน้ำเขียว (4).png"
                  alt="Wang Mi Ozone Trail 2026 Poster"
                  className="relative rounded-xl shadow-2xl shadow-soil/50 w-full h-auto cursor-zoom-in"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            key="poster-lightbox"
            src="/งานวิ่งเทรลวังหมี วังน้ำเขียว (4).png"
            alt="Wang Mi Ozone Trail 2026 Poster"
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
