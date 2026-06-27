import { TreePine, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer aria-label="ส่วนท้ายของหน้า" className="bg-soil text-cream-alt/85 py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TreePine className="h-6 w-6 text-sage" />
              <span className="text-cream font-bold text-lg lg:text-xl font-[family-name:var(--font-heading)]">
                WM Ozone Trail 2026
              </span>
            </div>
            <p className="text-sm lg:text-base text-cream-alt/70 leading-relaxed">
              วิ่งสูดโอโซน ชมวิถีเกษตรชุมชน ลดคาร์บอนเพื่อผืนป่า
              <br />
              จัดโดยโครงการศูนย์เรียนรู้ 300 ไร่ ต.วังหมี อ.วังน้ำเขียว
            </p>
          </div>

          <div>
            <h4 className="text-cream text-sm lg:text-base font-bold mb-3 font-[family-name:var(--font-heading)] tracking-wider">ลิงก์</h4>
            <ul className="space-y-2 text-sm lg:text-base">
              <li><a href="#categories" className="hover:text-cream transition-colors">ระยะทาง</a></li>
              <li><a href="#tickets" className="hover:text-cream transition-colors">แพ็กเกจ</a></li>
              <li><a href="#addons" className="hover:text-cream transition-colors">บริการเสริม</a></li>
              <li><a href="#schedule" className="hover:text-cream transition-colors">กำหนดการ</a></li>
              <li><a href="#faq" className="hover:text-cream transition-colors">คำถามที่พบบ่อย</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream text-sm lg:text-base font-bold mb-3 font-[family-name:var(--font-heading)] tracking-wider">การกุศล</h4>
            <p className="text-sm lg:text-base text-cream-alt/70 leading-relaxed">
              รายได้สมทบทุนพัฒนา "ศูนย์เรียนรู้ในวิถีธรรมชาติสำหรับครอบครัว"
              <br />
              ศูนย์ดูนก พื้นที่เกษตรอินทรีย์ ลานกิจกรรมผจญภัย
            </p>
          </div>

          <div>
            <h4 className="text-cream text-sm lg:text-base font-bold mb-3 font-[family-name:var(--font-heading)] tracking-wider">ติดต่อ</h4>
            <ul className="space-y-2 text-sm lg:text-base">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sage shrink-0" />
                ต.วังหมี อ.วังน้ำเขียว จ.นครราชสีมา
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sage shrink-0" />
                <a href="https://line.me/R/ti/p/~@WangMiTrail" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">LINE Official: @WangMiTrail</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-earth-light/20 pt-6 text-center text-xs lg:text-sm text-cream-alt/80">
          <p className="leading-relaxed">Wang Mi Ozone Trail 2026 — All proceeds support the 300 Rai Nature Learning Center</p>
        </div>
      </div>
    </footer>
  )
}
