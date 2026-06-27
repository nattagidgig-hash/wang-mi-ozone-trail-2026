import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "ใครสามารถสมัครเข้าร่วมได้บ้าง?",
    a: "ทุกคนสามารถสมัครได้ ระยะ 5 กม. เหมาะสำหรับครอบครัว นักท่องเที่ยวสายชิล และมือใหม่หัดวิ่งเทรล ส่วนระยะ 14 กม. แนะนำสำหรับนักวิ่งที่มีประสบการณ์",
  },
  {
    q: "เด็กสามารถเข้าร่วมได้ไหม?",
    a: "ได้! ระยะ 5 กม. ออกแบบมาให้เด็กและครอบครัวสามารถวิ่งและเดินได้ โดยมี Family Nature Passport และฐานกิจกรรมให้เด็กๆ ได้สนุกตลอดเส้นทาง",
  },
  {
    q: "จำเป็นต้องพักค้างคืนไหม?",
    a: "งานจัดเป็นรูปแบบแคมป์ปิ้ง 2 วัน 1 คืน แนะนำให้พักค้างคืนเพื่อร่วมกิจกรรมต่างๆ แต่หากไม่สะดวก สามารถเดินทางไปกลับในวันอาทิตย์ได้",
  },
  {
    q: "มีที่พักให้บริการหรือต้องเตรียมมาเอง?",
    a: "มีทั้ง VIP Glamping Tent (เต็นท์พร้อมเครื่องนอน) และพื้นที่ให้เช่ากางเต็นท์สำหรับผู้มีอุปกรณ์มาเอง สามารถเลือกจองได้ในขั้นตอนสมัคร",
  },
  {
    q: "การแต่งกายและอุปกรณ์ที่ต้องเตรียม?",
    a: "รองเท้าวิ่งเทรลหรือรองเท้ากีฬาพื้นหนา เสื้อผ้าที่ระบายอากาศได้ดี หมวก แก้วน้ำส่วนตัว (BYOC) ไฟฉายคาดหัว ยากันแมลง และชุดกันหนาว (พื้นที่วังน้ำเขียวอากาศเย็นในเดือนธันวาคม)",
  },
  {
    q: "สามารถยกเลิกหรือโอนสิทธิ์ได้ไหม?",
    a: "สามารถโอนสิทธิ์ให้ผู้อื่นได้โดยแจ้งล่วงหน้าอย่างน้อย 7 วันก่อนวันงาน ไม่สามารถขอคืนเงินได้เนื่องจากรายได้สมทบทุนการก่อสร้างศูนย์เรียนรู้",
  },
  {
    q: "มีประกันอุบัติเหตุให้หรือไม่?",
    a: "ผู้สมัครทุกคนได้รับประกันอุบัติเหตุระหว่างการแข่งขันในวันงาน ครอบคลุมตามเงื่อนไขที่กำหนด",
  },
  {
    q: "รายได้จากค่าสมัครไปใช้ทำอะไร?",
    a: "รายได้ทั้งหมดนำไปสมทบทุนพัฒนาพื้นที่ 300 ไร่ ให้เป็นศูนย์เรียนรู้ในวิถีธรรมชาติสำหรับครอบครัวแบบครบวงจร ทั้งศูนย์ดูนก พื้นที่เกษตรอินทรีย์ และลานกิจกรรมผจญภัย",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 bg-cream scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-earth-darker font-[family-name:var(--font-heading)] mb-4">
            คำถามที่พบบ่อย
          </h2>
          <p className="text-earth lg:text-lg leading-relaxed">มีข้อสงสัยเพิ่มเติม? ติดต่อเราได้ที่ LINE Official: @WangMiTrail</p>
        </div>

        <Accordion className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-cream-alt rounded-lg px-4 data-[state=open]:shadow-sm transition-shadow"
            >
              <AccordionTrigger className="text-earth-darker text-base lg:text-lg font-medium text-left hover:text-earth hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-earth text-sm lg:text-base leading-relaxed">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
