import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Sun, Moon, Sunrise, Coffee, Flag } from "lucide-react"

const days = [
  {
    day: "วันที่ 1",
    date: "ศุกร์ที่ 11 ธ.ค.",
    icon: Sun,
    events: [
      { time: "13:00 น. เป็นต้นไป", title: "เดินทางถึงวังน้ำเขียว", description: "เช็คอิน ที่พัก และพื้นที่กางเต็นท์" },
    ],
  },
  {
    day: "วันที่ 2",
    date: "เสาร์ที่ 12 ธ.ค.",
    icon: Moon,
    events: [
      { time: "10:00 - 18:00", title: "รับอุปกรณ์การแข่งขัน", description: "Race Pack Pick-up" },
      { time: "10:00 - 20:00", title: "ตลาดนัดชุมชนวังหมี & Agro-Cafe", description: "เปิดให้ช้อปและชิม" },
      { time: "15:00 - 17:00", title: "Family Nature Workshops", description: "กิจกรรมเวิร์กชอปครอบครัว" },
      { time: "17:00 - 19:30", title: "Farm-to-Table Dinner", description: "รับประทานอาหารเย็นวัตถุดิบอินทรีย์" },
      { time: "19:30 - 21:00", title: "รอบกองไฟไร้ควัน", description: "ดนตรีอคูสติก และ Night Safari" },
    ],
  },
  {
    day: "วันที่ 3 — RACE DAY",
    date: "อาทิตย์ที่ 13 ธ.ค.",
    icon: Flag,
    events: [
      { time: "05:30", title: "ปล่อยตัวระยะ 14 กม.", description: "Wang Mi Explorer" },
      { time: "06:00", title: "ปล่อยตัวระยะ 5 กม.", description: "Nature Walk & Fun Trail" },
      { time: "07:30", title: "นักวิ่งเข้าเส้นชัย", description: "รับประทานอาหารเช้าฝีมือชุมชนวังหมี" },
      { time: "09:30", title: "พิธีมอบรางวัล", description: "ถ้วยรักษ์โลก และสรุปยอดระดมทุน" },
      { time: "11:00", title: "เก็บเต็นท์ & เดินทางกลับ", description: "เคลียร์พื้นที่แบบ Zero Waste" },
    ],
  },
]

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 px-4 bg-soil relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-noise" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream font-[family-name:var(--font-heading)] mb-4">
            กำหนดการจัดงาน
          </h2>
          <p className="text-cream-alt/80 text-lg lg:text-xl max-w-2xl mx-auto">2 วัน 1 คืนแห่งการเรียนรู้และความสนุกสำหรับทุกคนในครอบครัว</p>
        </div>

        <div className="space-y-8">
          {days.map((day) => (
            <div key={day.day}>
              <div className="flex items-center gap-3 mb-4">
                <day.icon className="h-5 w-5 text-sage" />
                <h3 className="text-lg lg:text-xl font-bold text-cream font-[family-name:var(--font-heading)]">{day.day}</h3>
                <Badge variant="outline" className="border-earth-light/30 text-cream-alt/70 text-xs lg:text-sm">
                  {day.date}
                </Badge>
              </div>
              <div className="space-y-3">
                {day.events.map((event, i) => (
                  <Card key={i} className="bg-earth-darker/20 border-earth-light/10 p-4 hover:bg-earth-darker/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="text-cream-alt/80 text-sm lg:text-base font-medium whitespace-nowrap min-w-[130px]">
                        {event.time}
                      </div>
                      <div>
                        <div className="text-cream font-semibold lg:text-lg">{event.title}</div>
                        <div className="text-cream-alt/80 text-sm lg:text-base">{event.description}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
