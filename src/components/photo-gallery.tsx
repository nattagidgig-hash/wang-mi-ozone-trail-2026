"use client"

import { useEffect, useState, useRef } from "react"
import { Pause, Play, X } from "lucide-react"

const images = [
  "/ภาพฝันวังน้ำเขียว (6).png",
  "/ภาพฝันวังน้ำเขียว (7).png",
  "/ภาพฝันวังน้ำเขียว (8).png",
  "/ภาพฝันวังน้ำเขียว (9).png",
  "/ภาพฝันวังน้ำเขียว (10).png",
]

const altTexts = [
  "วิวทิวทัศน์วังน้ำเขียว",
  "เส้นทางเดินป่าวังน้ำเขียว",
  "ธรรมชาติวังน้ำเขียว",
  "บรรยากาศชุมชนวังน้ำเขียว",
  "จุดชมวิววังน้ำเขียว",
]

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null
    closeRef.current?.focus()

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); return }
      if (e.key === "Tab" && containerRef.current) {
        const focusable = containerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length === 0) return
        const first = focusable[0], last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }

    document.addEventListener("keydown", handler)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handler)
      document.body.style.overflow = ""
      prevFocus?.focus()
    }
  }, [onClose])

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] bg-soil/95 flex items-center justify-center p-4 cursor-zoom-out" onClick={onClose}>
      <button ref={closeRef} onClick={onClose} className="absolute top-4 right-4 text-cream/60 hover:text-cream transition-colors z-10" aria-label="Close">
        <X className="h-8 w-8" aria-hidden="true" />
      </button>
      <img src={src} alt="วังน้ำเขียว" className="max-h-[90vh] max-w-[90vw] w-auto h-auto rounded-xl shadow-2xl shadow-black/50 object-contain" onClick={(e) => e.stopPropagation()} />
    </div>
  )
}

export default function PhotoGallery() {
  const [paused, setPaused] = useState(false)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  return (
    <>
      <section className="py-20 px-4 bg-cream overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-earth-darker font-[family-name:var(--font-heading)] mb-3">
              ภาพบรรยากาศวังน้ำเขียว
            </h2>
            <p className="text-earth max-w-2xl mx-auto text-base lg:text-lg">
              สัมผัสธรรมชาติและวิถีชีวิตชุมชนผ่านภาพถ่าย
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-lg shadow-earth/10">
              <div
                className={`flex gap-4 sm:gap-6 ${!reduced ? "animate-scroll" : ""}`}
                style={{
                  width: "max-content",
                  animationPlayState: paused ? "paused" : "running",
                }}
              >
                {[...images, ...images].map((src, i) => (
                  <div
                    key={`${src}-${i}`}
                    className="w-[70vw] sm:w-[50vw] lg:w-[40vw] shrink-0 cursor-zoom-in"
                    onClick={() => setLightboxSrc(images[i % images.length])}
                    aria-hidden={i >= images.length ? "true" : undefined}
                  >
                    <div className="aspect-[16/9] overflow-hidden rounded-lg">
                      <img
                        src={src}
                        alt={altTexts[i % altTexts.length]}
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
              className="absolute bottom-3 right-3 bg-soil/50 hover:bg-soil/70 text-cream rounded-full p-2 transition-all backdrop-blur-sm cursor-pointer z-10"
              aria-label={paused ? "Play" : "Pause"}
            >
              {paused ? <Play className="h-4 w-4" aria-hidden="true" /> : <Pause className="h-4 w-4" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </section>

      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </>
  )
}
