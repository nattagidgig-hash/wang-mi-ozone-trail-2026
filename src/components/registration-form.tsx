"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Check, ChevronRight, TreePine, Users, Crown, Building2, Tent, Sparkles, GraduationCap, Binoculars, Shirt, Heart } from "lucide-react"

type TicketType = "normal" | "family" | "vip" | "csr"
type Distance = "5k" | "14k"

interface Addon {
  id: string
  name: string
  price: number
  icon: React.ElementType
}

const addonsList: Addon[] = [
  { id: "glamping", name: "VIP Glamping Tent (ครอบครัว)", price: 2500, icon: Tent },
  { id: "camping", name: "เช่าพื้นที่กางเต็นท์", price: 590, icon: Tent },
  { id: "dinner", name: "Farm-to-Table Dinner", price: 390, icon: Sparkles },
  { id: "survival", name: "Family Survival Class", price: 290, icon: GraduationCap },
  { id: "safari", name: "Night Safari & Stargazing", price: 190, icon: Binoculars },
  { id: "mug", name: "แก้วน้ำสแตนเลส Mug", price: 290, icon: Shirt },
  { id: "hat", name: "หมวกซาฟารีเด็ก", price: 150, icon: Shirt },
  { id: "hoodie", name: "เสื้อฮู้ดดี้กันหนาว", price: 890, icon: Shirt },
]

const ticketPrices: Record<TicketType, Record<Distance, number>> = {
  normal: { "5k": 590, "14k": 790 },
  family: { "5k": 1990, "14k": 1990 },
  vip: { "5k": 3000, "14k": 5000 },
  csr: { "5k": 0, "14k": 0 },
}

const ticketLabels: Record<TicketType, { label: string; icon: React.ElementType; description: string }> = {
  normal: { label: "วิ่งปกติ", icon: TreePine, description: "เดี่ยว" },
  family: { label: "Family & Friends", icon: Users, description: "กลุ่ม 4 คน (ผู้ใหญ่ 2 + เด็ก 2)" },
  vip: { label: 'VIP "Nature Founder"', icon: Crown, description: "สิทธิพิเศษผู้สนับสนุน" },
  csr: { label: "CSR Corporate", icon: Building2, description: "สำหรับองค์กร" },
}

export default function RegistrationForm() {
  const [ticketType, setTicketType] = useState<TicketType>("normal")
  const [distance, setDistance] = useState<Distance>("5k")
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])
  const [donation, setDonation] = useState("")
  const [step, setStep] = useState(1)
  const [formErrors, setFormErrors] = useState<Record<string, boolean>>({})
  const [submitting, setSubmitting] = useState(false)

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    )
  }

  const basePrice = ticketType === "csr" ? 0 : ticketPrices[ticketType][distance]
  const addonsTotal = selectedAddons.reduce(
    (sum, id) => sum + (addonsList.find((a) => a.id === id)?.price ?? 0),
    0
  )
  const donationAmount = Number(donation) || 0
  const total = basePrice + addonsTotal + donationAmount

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errors: Record<string, boolean> = {}
    const form = e.currentTarget as HTMLFormElement
    const data = new FormData(form)
    if (!data.get("fullName")?.toString().trim()) errors.fullName = true
    if (!data.get("email")?.toString().trim()) errors.email = true
    if (!data.get("phone")?.toString().trim()) errors.phone = true
    setFormErrors(errors)
    if (Object.keys(errors).length > 0) return
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      alert("สมัครงานสำเร็จ! ขอบคุณที่ร่วมเป็นส่วนหนึ่งของ Wang Mi Ozone Trail 2026")
    }, 1500)
  }

  return (
    <section id="register" aria-label="แบบฟอร์มสมัครงาน" className="py-20 px-4 bg-cream-alt/20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-earth-darker font-[family-name:var(--font-heading)] mb-4">
            สมัครเข้าร่วมงาน
          </h2>
          <p className="text-earth text-base lg:text-lg">{"กรุณากรอกข้อมูลเพื่อสมัครเข้าร่วม Wang Mi Ozone Trail 2026"}</p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold lg:text-base transition-colors ${
                  step >= s ? "bg-earth text-cream" : "bg-cream-alt/40 text-earth/40"
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <ChevronRight aria-hidden="true" className={`h-4 w-4 mx-1 ${step > s ? "text-earth" : "text-cream-alt/40"}`} />
              )}
            </div>
          ))}
        </div>

        {step === 1 && (
          <Card className="border-0 shadow-lg shadow-earth/5">
            <CardHeader>
              <CardTitle className="text-xl font-bold lg:text-2xl text-earth-darker font-[family-name:var(--font-heading)]">
                เลือกแพ็กเกจและระยะทาง
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {(Object.entries(ticketLabels) as [TicketType, typeof ticketLabels[TicketType]][]).map(
                  ([key, val]) => (
                    <button
                      key={key}
                      onClick={() => setTicketType(key)}
                      className={`p-3 rounded-xl border-2 text-left transition-all ${
                        ticketType === key
                          ? "border-earth bg-cream shadow-sm"
                          : "border-cream-alt/40 hover:border-earth-light/40"
                      }`}
                    >
                      <val.icon
                        aria-hidden="true"
                        className={`h-5 w-5 mb-1 ${
                          ticketType === key ? "text-earth" : "text-earth/40"
                        }`}
                      />
                      <div
                        className={`text-sm font-bold lg:text-base ${
                          ticketType === key ? "text-earth-darker" : "text-earth/60"
                        }`}
                      >
                        {val.label}
                      </div>
                      <div className="text-xs lg:text-sm text-earth/50">{val.description}</div>
                    </button>
                  )
                )}
              </div>

              {ticketType !== "csr" && ticketType !== "family" && (
                <div className="flex gap-3 mb-6">
                  {(["5k", "14k"] as Distance[]).map((d) => (
                    <button
                      key={d}
                      onClick={() => setDistance(d)}
                      className={`flex-1 p-4 rounded-xl border-2 text-center transition-all ${
                        distance === d
                          ? "border-earth bg-cream shadow-sm"
                          : "border-cream-alt/40 hover:border-earth-light/40"
                      }`}
                    >
                      <div className="text-lg font-bold lg:text-xl text-earth-darker">
                        {d === "5k" ? "5 กม." : "14 กม."}
                      </div>
                      <div className="text-xl font-bold lg:text-2xl text-earth">
                        {ticketPrices[ticketType][d].toLocaleString()}
                        <span className="text-sm font-normal lg:text-base text-earth/50"> บาท</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {ticketType === "family" && (
                <div className="p-4 bg-cream rounded-xl border border-earth-light/30 mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Users aria-hidden="true" className="h-5 w-5 text-earth" />
                    <span className="font-bold text-earth-darker">Family Run & Learn</span>
                  </div>
                  <div className="text-earth-dark text-sm lg:text-base">
                    กลุ่ม 4 คน (ผู้ใหญ่ 2 + เด็ก 2) — ราคาพิเศษ 1,990 บาท
                  </div>
                  <div className="text-earth text-xs lg:text-sm mt-1">
                    ✓ สลักชื่อบนกำแพงไม้ระแนงศูนย์เรียนรู้
                  </div>
                </div>
              )}

              {ticketType === "csr" && (
                <div className="p-4 bg-sage/10 rounded-xl border border-sage/20 mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 aria-hidden="true" className="h-5 w-5 text-sage-dark" />
                    <span className="font-bold text-earth-darker">Corporate Team</span>
                  </div>
                  <div className="text-earth-dark text-sm lg:text-base">กรุณาติดต่อทีมงานเพื่อรับใบเสนอราคาและส่วนลดพิเศษ</div>
                  <div className="text-earth text-xs lg:text-sm mt-1">Line Official: @WangMiTrail</div>
                </div>
              )}

              <div className="flex justify-end flex-col items-end gap-2">
                {ticketType === "csr" && (
                  <p className="text-xs text-earth/60">กรุณาติดต่อทีมงานผ่าน LINE ก่อน</p>
                )}
                <Button
                  onClick={() => setStep(2)}
                  className="bg-earth hover:bg-earth-dark text-cream"
                  disabled={ticketType === "csr"}
                >
                  ถัดไป
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card className="border-0 shadow-lg shadow-earth/5">
            <CardHeader>
              <CardTitle className="text-xl font-bold lg:text-2xl text-earth-darker font-[family-name:var(--font-heading)]">
                เลือกบริการเสริม
              </CardTitle>
              <p className="text-earth text-sm lg:text-base">เลือกบริการเสริมเพื่อประสบการณ์ที่สมบูรณ์แบบ (ไม่บังคับ)</p>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {addonsList.map((addon) => {
                  const selected = selectedAddons.includes(addon.id)
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border-2 text-left transition-all flex items-center gap-3 ${
                        selected
                          ? "border-earth bg-cream"
                          : "border-cream-alt/40 hover:border-earth-light/40"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 ${
                          selected
                            ? "bg-earth border-earth text-cream"
                            : "border-cream-alt/60"
                        }`}
                      >
                        {selected && <Check aria-hidden="true" className="h-4 w-4" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium lg:text-base text-earth-darker">{addon.name}</div>
                        <div className="text-xs lg:text-sm text-earth">{addon.price.toLocaleString()} บาท</div>
                      </div>
                    </button>
                  )
                })}
              </div>

              <div className="p-4 bg-sage/10 rounded-xl border border-sage/20 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Heart aria-hidden="true" className="h-5 w-5 text-sage-dark" />
                  <span className="font-bold text-earth-darker">Adopt-a-Plot — บริจาคสมทบทุน</span>
                </div>
                <p className="text-earth-dark text-sm lg:text-base mb-2">
                  ร่วมอุปถัมภ์พื้นที่ตารางเมตรละ 590 บาท หรือบริจาคตามกำลังศรัทธา
                </p>
                <input
                  type="number"
                  placeholder="จำนวนเงินบริจาค (บาท)"
                  value={donation}
                  onChange={(e) => setDonation(e.target.value)}
                  className="w-full p-2 border border-sage/30 rounded-lg text-sm lg:text-base bg-transparent text-earth-darker placeholder:text-earth/40"
                  min="0"
                />
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(1)}>
                  ย้อนกลับ
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  className="bg-earth hover:bg-earth-dark text-cream"
                >
                  ถัดไป
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card className="border-0 shadow-lg shadow-earth/5">
            <CardHeader>
              <CardTitle className="text-xl font-bold lg:text-2xl text-earth-darker font-[family-name:var(--font-heading)]">
                ข้อมูลผู้สมัคร
              </CardTitle>
              <p className="text-earth text-sm lg:text-base">กรุณากรอกข้อมูลให้ถูกต้องเพื่อการออก BIB</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium lg:text-base text-earth-darker mb-1">ชื่อ-นามสกุล</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="ชื่อ นามสกุล"
                    className={`w-full p-2.5 border rounded-lg text-sm lg:text-base bg-transparent text-earth-darker placeholder:text-earth/40 ${
                      formErrors.fullName ? "border-red-500" : "border-cream-alt"
                    }`}
                  />
                  {formErrors.fullName && <p className="text-red-500 text-xs mt-1">กรุณากรอกชื่อ-นามสกุล</p>}
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium lg:text-base text-earth-darker mb-1">อีเมล</label>
                    <input type="email" name="email" required placeholder="you@example.com" className={`w-full p-2.5 border rounded-lg text-sm lg:text-base bg-transparent text-earth-darker placeholder:text-earth/40 ${formErrors.email ? "border-red-500" : "border-cream-alt"}`} />
                    {formErrors.email && <p className="text-red-500 text-xs mt-1">กรุณากรอกอีเมล</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium lg:text-base text-earth-darker mb-1">เบอร์โทรศัพท์</label>
                    <input type="tel" name="phone" required placeholder="08X-XXX-XXXX" className={`w-full p-2.5 border rounded-lg text-sm lg:text-base bg-transparent text-earth-darker placeholder:text-earth/40 ${formErrors.phone ? "border-red-500" : "border-cream-alt"}`} />
                    {formErrors.phone && <p className="text-red-500 text-xs mt-1">กรุณากรอกเบอร์โทรศัพท์</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium lg:text-base text-earth-darker mb-1">เพศ</label>
                    <select className="w-full p-2.5 border border-cream-alt rounded-lg text-sm lg:text-base bg-transparent text-earth-darker">
                      <option value="" disabled>เลือกเพศ</option>
                      <option>ชาย</option>
                      <option>หญิง</option>
                      <option>ไม่ระบุ</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium lg:text-base text-earth-darker mb-1">วันเกิด</label>
                    <input type="date" className="w-full p-2.5 border border-cream-alt rounded-lg text-sm lg:text-base bg-transparent text-earth-darker" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium lg:text-base text-earth-darker mb-1">เสื้อที่ระลึก (ขนาด)</label>
                  <div className="flex gap-2 flex-wrap">
                    {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
                      <label key={size} className="flex items-center gap-1.5 text-sm lg:text-base p-2 border border-cream-alt rounded-lg hover:border-earth-light/40 cursor-pointer text-earth-dark">
                        <input type="radio" name="shirtSize" className="accent-earth" />
                        {size}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium lg:text-base text-earth-darker mb-1">ที่อยู่</label>
                  <textarea
                    placeholder="ที่อยู่สำหรับจัดส่ง BIB"
                    className="w-full p-2.5 border border-cream-alt rounded-lg text-sm lg:text-base bg-transparent text-earth-darker placeholder:text-earth/40"
                    rows={3}
                  />
                </div>
              </div>

              <div className="bg-cream rounded-xl p-4 mb-6">
                <h4 className="font-bold lg:text-base text-earth-darker mb-3 font-[family-name:var(--font-heading)]">สรุปรายการ</h4>
                <div className="space-y-2 text-sm lg:text-base">
                  <div className="flex justify-between text-earth-dark">
                    <span>
                      {ticketLabels[ticketType].label} —{" "}
                      {distance === "5k" ? "5 กม." : "14 กม."}
                    </span>
                    <span>{basePrice.toLocaleString()} บาท</span>
                  </div>
                  {selectedAddons.map((id) => {
                    const a = addonsList.find((a) => a.id === id)
                    return a ? (
                      <div key={id} className="flex justify-between text-earth">
                        <span>{a.name}</span>
                        <span>{a.price.toLocaleString()} บาท</span>
                      </div>
                    ) : null
                  })}
                  {donationAmount > 0 && (
                    <div className="flex justify-between text-sage-dark">
                      <span>บริจาค Adopt-a-Plot</span>
                      <span>{donationAmount.toLocaleString()} บาท</span>
                    </div>
                  )}
                  <Separator className="bg-cream-alt" />
                  <div className="flex justify-between font-bold text-earth-darker text-base lg:text-lg">
                    <span>รวมทั้งสิ้น</span>
                    <span>{total.toLocaleString()} บาท</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(2)}>
                  ย้อนกลับ
                </Button>
                <Button
                  type="submit"
                  className="bg-earth hover:bg-earth-dark text-cream"
                  disabled={submitting}
                >
                  {submitting ? "กำลังดำเนินการ..." : `ยืนยันการสมัคร (${total.toLocaleString()} บาท)`}
                </Button>
              </div>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
