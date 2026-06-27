"use client"

import { useState, useEffect } from "react"
import { Pause, Play } from "lucide-react"

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
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

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

      <div className="relative max-w-7xl mx-auto">
        <div className="overflow-hidden rounded-2xl shadow-xl shadow-earth/10">
          <div
            className={`flex gap-6 ${!reduced ? "animate-scroll" : ""}`}
            style={{
              width: "max-content",
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {[...images, ...images].map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className="w-[85vw] sm:w-[65vw] md:w-[50vw] lg:w-[40vw] shrink-0"
                aria-hidden={i >= images.length ? "true" : undefined}
              >
                <div className="aspect-[16/9] overflow-hidden rounded-xl">
                  <img
                    src={img.src}
                    alt={i < images.length ? img.alt : ""}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => setPaused(!paused)}
          className="absolute bottom-4 right-4 bg-soil/50 hover:bg-soil/70 text-cream rounded-full p-2.5 transition-all backdrop-blur-sm cursor-pointer z-10 shadow-lg"
          aria-label={paused ? "เล่นต่อ" : "หยุดชั่วคราว"}
        >
          {paused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
        </button>
      </div>
    </section>
  )
}
