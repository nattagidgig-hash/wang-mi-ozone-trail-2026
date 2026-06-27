import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tent, Coffee, GraduationCap, Shirt, Binoculars, Sparkles } from "lucide-react"

const addons = [
  {
    icon: Tent,
    title: "ที่พักและแคมป์ปิ้ง",
    description: "VIP Glamping Tent เต็นท์พร้อมเครื่องนอนครบชุดสำหรับครอบครัว หรือเช่าพื้นที่กางเต็นท์สำหรับผู้นำอุปกรณ์มาเอง",
    price: "590 - 2,500 บาท",
  },
  {
    icon: Sparkles,
    title: "Farm-to-Table Exclusive Dinner",
    description: "อาหารเย็นวัตถุดิบอินทรีย์จากวังหมี เมนูพิเศษจากเชฟท้องถิ่น พร้อมบรรยากาศธรรมชาติ",
    price: "390 บาท/ท่าน",
  },
  {
    icon: GraduationCap,
    title: "Family Survival Class",
    description: "คลาสสอนทักษะเอาตัวรอดสำหรับครอบครัว — ตั้งแต่การจุดไฟ การหาน้ำ การปฐมพยาบาลเบื้องต้น",
    price: "290 บาท/ครอบครัว",
  },
  {
    icon: Binoculars,
    title: "Night Safari & Stargazing",
    description: "พาเด็กๆ เดินส่องแมลงกลางคืนและดูดาว พร้อมนักธรรมชาติวิทยามืออาชีพ",
    price: "190 บาท/คน",
  },
  {
    icon: Shirt,
    title: "Eco-Merchandise",
    description: "แก้วน้ำสแตนเลส Mug, หมวกซาฟารีสำหรับเด็ก, เสื้อฮู้ดดี้กันหนาว",
    price: "150 - 890 บาท",
  },
  {
    icon: Coffee,
    title: "Agro-Cafe & ตลาดนัดชุมชน",
    description: "กาแฟสด เบเกอรี่ และสินค้าชุมชนวังหมี ตลาดนัดเปิดตลอดวัน",
    price: "จำหน่ายหน้างาน",
  },
]

export default function Addons() {
  return (
    <section id="addons" aria-label="บริการเสริม" className="py-20 px-4 bg-cream-alt/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-earth-darker font-[family-name:var(--font-heading)] mb-4">
            บริการเสริม
          </h2>
          <p className="text-earth max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed">
            จองบริการเสริมเพื่อประสบการณ์ที่สมบูรณ์แบบ 2 วัน 1 คืนในวังหมี
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {addons.map((item) => (
            <Card key={item.title} className="border border-cream-alt shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <item.icon className="h-8 w-8 text-earth mb-2" aria-hidden="true" />
                <CardTitle className="text-xl lg:text-2xl font-bold text-earth-darker font-[family-name:var(--font-heading)]">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm lg:text-base text-earth mb-3 leading-relaxed">{item.description}</p>
                <div className="text-earth-dark font-semibold text-sm lg:text-base font-[family-name:var(--font-heading)]">
                  {item.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
