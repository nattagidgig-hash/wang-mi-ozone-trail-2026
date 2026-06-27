"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Pause, Play, ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  { src: "/ภาพฝันวังน้ำเขียว (5).png", alt: "วิวทิวทัศน์วังน้ำเขียว" },
  { src: "/ภาพฝันวังน้ำเขียว (6).png", alt: "เส้นทางเดินป่าวังน้ำเขียว" },
  { src: "/ภาพฝันวังน้ำเขียว (7).png", alt: "ธรรมชาติวังน้ำเขียว" },
  { src: "/ภาพฝันวังน้ำเขียว (8).png", alt: "บรรยากาศชุมชนวังน้ำเขียว" },
  { src: "/ภาพฝันวังน้ำเขียว (9).png", alt: "จุดชมวิววังน้ำเขียว" },
  { src: "/ภาพฝันวังน้ำเขียว (10).png", alt: "บรรยากาศวังน้ำเขียว" },
  { src: "/งานวิ่งเทรลวังหมี วังน้ำเขียว (3).png", alt: "งานวิ่งเทรลวังหมี" },
  { src: "/งานวิ่งเทรลวังหมี วังน้ำเขียว (4).png", alt: "โปสเตอร์งานวิ่งเทรล" },
]

export default function AutoScrollGallery() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }, [])

  useEffect(() => {
    if (paused || reduced) return
    intervalRef.current = setInterval(next, 4000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [paused, reduced, next])

  return (
    <section className="py-20 px-4 bg-cream overflow-hidden" aria-label="ภาพบรรยากาศ">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-earth-darker font-[family-name:var(--font-heading)] mb-3">
          ภาพบรรยากาศวังน้ำเขียว
        </h2>
        <p className="text-earth max-w-2xl mx-auto text-base lg:text-lg">
          สัมผัสธรรมชาติและวิถีชีวิตชุมชนผ่านภาพถ่าย
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-xl shadow-earth/10 bg-cream-alt">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current].src}
              alt={images[current].alt}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-soil/20 to-transparent pointer-events-none" />

          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-soil/50 hover:bg-soil/70 text-cream rounded-full p-2 transition-all backdrop-blur-sm cursor-pointer z-10 shadow-lg"
            aria-label="ภาพก่อนหน้า"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-soil/50 hover:bg-soil/70 text-cream rounded-full p-2 transition-all backdrop-blur-sm cursor-pointer z-10 shadow-lg"
            aria-label="ภาพถัดไป"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <button
            onClick={() => setPaused(!paused)}
            className="absolute bottom-4 right-4 bg-soil/50 hover:bg-soil/70 text-cream rounded-full p-2.5 transition-all backdrop-blur-sm cursor-pointer z-10 shadow-lg"
            aria-label={paused ? "เล่นต่อ" : "หยุดชั่วคราว"}
          >
            {paused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="เลือกภาพ">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => { setCurrent(i); setPaused(true) }}
              role="tab"
              aria-selected={i === current}
              aria-label={`ภาพที่ ${i + 1}: ${img.alt}`}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                i === current ? "bg-earth w-6" : "bg-earth-light/40 hover:bg-earth-light/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
