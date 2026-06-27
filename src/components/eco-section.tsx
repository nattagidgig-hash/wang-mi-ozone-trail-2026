import { Card, CardContent } from "@/components/ui/card"
import { Recycle, CupSoda, Medal, Building2 } from "lucide-react"

const rules = [
  {
    icon: CupSoda,
    title: "Bring Your Own Cup",
    description: "นักวิ่งต้องนำแก้วน้ำส่วนตัวมาเองเพื่อรับน้ำตามจุดต่างๆ ลดขยะพลาสติก",
  },
  {
    icon: Recycle,
    title: "Zero Waste F&B",
    description: "ซุ้มอาหารทั้งหมดจากชุมชนใช้ภาชนะที่ย่อยสลายได้ 100%",
  },
  {
    icon: Medal,
    title: "Sustainable Finisher",
    description: "เหรียญและถ้วยรางวัลออกแบบจากวัสดุธรรมชาติในท้องถิ่นหรือวัสดุรีไซเคิล",
  },
  {
    icon: Building2,
    title: "Circular Infrastructure",
    description: "โครงสร้างและเวทีสร้างจากไม้ระแนงหรือแผ่นไอโซวอลล์ นำไปก่อสร้างศูนย์เรียนรู้ต่อโดยไม่เป็นขยะ",
  },
]

export default function EcoSection() {
  return (
    <section aria-label="กติการักษ์โลก" className="py-20 px-4 bg-gradient-to-br from-soil via-soil-light to-earth-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 bg-organic-blob" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream font-[family-name:var(--font-heading)] mb-4">
            กติการักษ์โลก
          </h2>
          <p className="text-cream-alt/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            เราใส่ใจสิ่งแวดล้อมทุกรายละเอียด ทุกมาตรการถูกออกแบบมาเพื่อให้งานนี้เป็น Zero Waste อย่างแท้จริง
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rules.map((rule) => (
            <Card key={rule.title} className="bg-cream/5 border-earth-light/15 backdrop-blur-sm text-center hover:bg-cream/10 transition-all">
              <CardContent className="pt-8 pb-6">
                <rule.icon className="h-10 w-10 text-sage mx-auto mb-4" />
                <h3 className="text-cream text-base lg:text-lg font-bold mb-2 font-[family-name:var(--font-heading)]">{rule.title}</h3>
                <p className="text-cream-alt/80 text-sm lg:text-base">{rule.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
