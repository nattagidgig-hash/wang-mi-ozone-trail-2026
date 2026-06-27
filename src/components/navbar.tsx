"use client"

import { useState, useEffect } from "react"
import { Menu, X, TreesIcon as Tree } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#categories", label: "ระยะทาง" },
  { href: "#tickets", label: "แพ็กเกจ" },
  { href: "#addons", label: "บริการเสริม" },
  { href: "#schedule", label: "กำหนดการ" },
  { href: "#faq", label: "คำถามที่พบบ่อย" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    handler()
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <nav
      aria-label="เมนูนำทางหลัก"
      className={`fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b transition-shadow duration-300 ${
        scrolled ? "border-cream-alt shadow-lg shadow-earth/5" : "border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-earth-dark font-bold text-lg lg:text-xl">
            <Tree aria-hidden="true" className="h-6 w-6 text-earth" />
            <span className="hidden sm:inline">WM Ozone Trail 2026</span>
            <span className="sm:hidden">WM Ozone Trail</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm lg:text-base text-earth hover:text-earth-dark transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#register">
              <Button size="sm" className="bg-earth hover:bg-earth-dark text-cream">
                สมัครเลย
              </Button>
            </a>
          </div>

          <button aria-expanded={open} aria-controls="mobile-menu" className="md:hidden p-2 text-earth" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden bg-cream border-t border-cream-alt px-4 pb-4" onKeyDown={(e) => e.key === "Escape" && setOpen(false)}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-earth hover:text-earth-dark"
            >
              {link.label}
            </a>
          ))}
          <a href="#register" onClick={() => setOpen(false)}>
            <Button size="sm" className="w-full mt-2 bg-earth hover:bg-earth-dark text-cream">
              สมัครเลย
            </Button>
          </a>
        </div>
      )}
    </nav>
  )
}
