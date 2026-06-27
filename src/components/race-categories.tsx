import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footprints, Mountain, Bird, Star, Leaf } from "lucide-react"

const categories = [
  {
    id: "5k",
    distance: "5 กม.",
    title: "Nature Walk & Fun Trail",
    subtitle: "Trail of the Future",
    icon: Footprints,
    color: "from-earth-light to-earth",
    badge: "ครอบครัว / มือใหม่",
    difficulty: "ง่าย",
    highlights: [
      "วิ่งและเดินป่าระยะสั้น ความชันน้อย",
      "ผ่านแปลงเกษตรอินทรีย์ สวนผลไม้ ฟาร์มชุมชน",
      "ป้าย Storytelling Waypoints บอกเล่าอนาคตพื้นที่",
      "Family Nature Passport สำหรับเด็กๆ",
    ],
    activities: ["ฐานดูนก", "ฐานเรียนรู้ไลเคน", "ปักหมุด Nature Passport"],
  },
  {
    id: "14k",
    distance: "14 กม.",
    title: "Wang Mi Explorer",
    subtitle: "Biodiversity Explorer",
    icon: Mountain,
    color: "from-sage to-sage-dark",
    badge: "นักวิ่งมีประสบการณ์",
    difficulty: "ปานกลาง-หนัก",
    highlights: [
      "ทางวิ่งกึ่งผจญภัย มีความชันสะสม",
      "วิ่งตัดชายป่า ลำธารเล็กๆ",
      "จุดชมวิวพาโนรามา 360°",
      "สัมผัสความหลากหลายทางชีวภาพวังน้ำเขียว",
    ],
    activities: ["เส้นทาง Biodiversity", "จุดเช็คพอยท์ Panorama", "Challenge Zone"],
  },
]

export default function RaceCategories() {
  return (
    <section id="categories" className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-earth-darker font-[family-name:var(--font-heading)] mb-4">
            เส้นทางแห่งอนาคต
          </h2>
          <p className="text-earth max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed">
            เส้นทางถูกออกแบบให้เป็นการพาทัวร์ศูนย์เรียนรู้ในอนาคต (Visionary Route)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <Card
              key={cat.id}
              className="group border-0 shadow-lg shadow-earth/5 overflow-hidden hover:shadow-xl hover:shadow-earth/10 transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${cat.color}`} />
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.color} text-cream`}>
                      <cat.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <CardTitle className="text-xl lg:text-2xl font-bold text-earth-darker font-[family-name:var(--font-heading)]">
                        {cat.title}
                      </CardTitle>
                      <p className="text-earth text-sm lg:text-base font-medium">{cat.subtitle}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-cream-alt text-earth-dark text-xs lg:text-sm">
                    {cat.badge}
                  </Badge>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl lg:text-4xl font-bold text-earth-darker font-[family-name:var(--font-heading)]">
                    {cat.distance}
                  </span>
                  <span className="text-sm lg:text-base text-earth">· ความยาก: {cat.difficulty}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5 mb-4">
                  {cat.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm lg:text-base text-earth-dark leading-relaxed">
                      <Leaf className="h-4 w-4 text-sage mt-0.5 shrink-0" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {cat.activities.map((a, i) => (
                    <Badge key={i} variant="outline" className="border-earth-light/40 text-earth bg-cream/50 text-xs lg:text-sm">
                      {i === 0 ? <Bird className="h-3 w-3 mr-1" aria-hidden="true" /> : <Star className="h-3 w-3 mr-1" aria-hidden="true" />}
                      {a}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
