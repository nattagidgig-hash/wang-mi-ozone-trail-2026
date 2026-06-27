import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, TreePine, Users, Crown, Building2, Heart } from "lucide-react"

const tickets = [
  {
    type: "วิ่งปกติ",
    icon: TreePine,
    items: [
      { distance: "5 กม.", price: "590", highlight: false },
      { distance: "14 กม.", price: "790", highlight: false },
    ],
    features: ["BIB + เสื้อที่ระลึก", "ประกันอุบัติเหตุ", "อาหารเช้าชุมชน", "เหรียญ Finisher รักษ์โลก"],
  },
  {
    type: "Family & Friends",
    icon: Users,
    badge: "ยอดนิยม",
    items: [
      { distance: "Family Run & Learn", price: "1,990", highlight: true },
    ],
    features: [
      "สมัครกลุ่ม 4 คน (ผู้ใหญ่ 2 + เด็ก 2)",
      "สลักชื่อบนกำแพงไม้ระแนงศูนย์เรียนรู้",
      "สิทธิ์ผู้ร่วมก่อตั้งโซนครอบครัว",
      "Family Nature Passport 4 ชุด",
    ],
  },
  {
    type: 'VIP "Nature Founder"',
    icon: Crown,
    badge: "พรีเมียม",
    items: [
      { distance: "VIP Gold", price: "3,000", highlight: false },
      { distance: "VIP Platinum", price: "5,000", highlight: false },
    ],
    features: [
      "สลักชื่อบนกำแพงเกียรติยศ",
      "สิทธิ์ปลูกต้นไม้ประจำตัว 1 ต้น",
      "กิจกรรม Adventure ฟรีเมื่อศูนย์สร้างเสร็จ",
      "ของที่ระลึก VIP Set",
    ],
  },
  {
    type: "CSR Corporate",
    icon: Building2,
    badge: "องค์กร",
    items: [
      { distance: "Corporate Team", price: "ติดต่อเรา", highlight: false },
    ],
    features: [
      "ซื้อ BIB แบบกลุ่มสำหรับพนักงาน",
      "ออกใบเสร็จลดหย่อนภาษีได้",
      "โลโก้บริษัทบน BIB และเว็บไซต์",
      "ภาพกิจกรรม CSR ทีม",
    ],
  },
]

export default function Tickets() {
  return (
    <section id="tickets" className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-earth-darker font-[family-name:var(--font-heading)] mb-4">
            แพ็กเกจค่าสมัคร
          </h2>
          <p className="text-earth max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed">
            เลือกแพ็กเกจที่ใช่สำหรับคุณและครอบครัว รายได้สมทบทุนสร้างศูนย์เรียนรู้วิถีธรรมชาติ
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tickets.map((ticket) => (
            <Card
              key={ticket.type}
              className={`relative border-0 shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                ticket.badge === "ยอดนิยม"
                  ? "ring-2 ring-sage shadow-sage/20"
                  : "shadow-earth/5"
              }`}
            >
              {ticket.badge && (
                <div className="absolute top-0 right-0">
                  <Badge
                    className={`rounded-none rounded-bl-lg text-xs px-3 py-1 ${
                      ticket.badge === "ยอดนิยม"
                        ? "bg-sage text-earth-darker"
                        : ticket.badge === "พรีเมียม"
                          ? "bg-earth text-cream"
                          : "bg-earth-dark text-cream"
                    }`}
                    aria-label={ticket.badge}
                  >
                    {ticket.badge}
                  </Badge>
                </div>
              )}
              <CardHeader>
                <ticket.icon className="h-8 w-8 text-earth mb-2" aria-hidden="true" />
                <CardTitle className="text-xl lg:text-2xl font-bold text-earth-darker font-[family-name:var(--font-heading)]">
                  {ticket.type}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  {ticket.items.map((item) => (
                    <div
                      key={item.distance}
                      className={`p-3 rounded-lg ${
                        item.highlight ? "bg-cream-alt/40 border border-earth-light/30" : "bg-cream-alt/20"
                      }`}
                    >
                      <div className="text-sm lg:text-base text-earth">{item.distance}</div>
                      <div className="text-2xl lg:text-3xl font-bold text-earth-darker font-[family-name:var(--font-heading)]">
                        {item.price === "ติดต่อเรา" ? (
                          <span className="text-base">{item.price}</span>
                        ) : (
                          <>{item.price} <span className="text-sm lg:text-base font-normal text-earth">บาท</span></>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <ul className="space-y-2 mb-6">
                  {ticket.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm lg:text-base text-earth-dark leading-relaxed">
                      <Check className="h-4 w-4 text-sage mt-0.5 shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#register">
                  <Button className="w-full bg-earth hover:bg-earth-dark text-cream">
                    เลือกแพ็กเกจ
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-sage/10 to-cream-alt/50 rounded-2xl border border-sage/20">
          <div className="flex items-start gap-4">
            <Heart className="h-8 w-8 text-sage shrink-0" aria-hidden="true" />
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-earth-darker font-[family-name:var(--font-heading)] mb-1">
                Adopt-a-Plot — บริจาคสมทบทุนเพิ่มเติม
              </h3>
              <p className="text-earth text-sm lg:text-base mb-3 leading-relaxed">
                ร่วมอุปถัมภ์พื้นที่ตารางเมตรละ 590 บาท หรือบริจาคซื้อกล้าไม้หายาก
                เพื่อเป็นส่วนหนึ่งในการสร้างศูนย์เรียนรู้ในวิถีธรรมชาติให้เด็กๆ ตลอดไป
              </p>
              <a href="#register">
                <Button variant="outline" className="border-earth-light/50 text-earth-dark hover:bg-earth-light/10">
                  ร่วมบริจาคเพิ่มเติม
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
