import type { Metadata } from "next";
import { Sarabun, Anuphan } from "next/font/google";
import "./globals.css";

const sarabun = Sarabun({
  variable: "--font-sans",
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
});

const anuphan = Anuphan({
  variable: "--font-heading",
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wang Mi Ozone Trail 2026 | วิ่งสูดโอโซน ชมวิถีเกษตรชุมชน",
  description:
    "ร่วมวิ่งเทรลการกุศล 11-13 ธ.ค. 2569 ที่วังน้ำเขียว โคราช รายได้สมทบทุนสร้างศูนย์เรียนรู้ในวิถีธรรมชาติสำหรับครอบครัว",
  openGraph: {
    title: "Wang Mi Ozone Trail 2026",
    description:
      "วิ่งสูดโอโซน ชมวิถีเกษตรชุมชน ลดคาร์บอนเพื่อผืนผ้า",
    locale: "th_TH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${sarabun.variable} ${anuphan.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
