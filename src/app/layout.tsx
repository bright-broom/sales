import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WSS CLASS | 営業の悩みを『仕組み』で解決する実践型セールスプログラム",
  description:
    "営業に苦手意識のあるクリエイター・フリーランス・副業者向けの実践型セールスプログラム。500本以上の動画コンテンツと充実のサポート体制で、営業スキルを「仕組み」として身につけられます。",
  keywords: [
    "営業スクール",
    "セールススキル",
    "フリーランス",
    "副業",
    "営業研修",
    "ビジネススキル",
  ],
  authors: [{ name: "WS Inc." }],
  openGraph: {
    title: "WSS CLASS | 営業の悩みを『仕組み』で解決する実践型セールスプログラム",
    description:
      "営業に苦手意識のあるクリエイター・フリーランス・副業者向けの実践型セールスプログラム。",
    type: "website",
    locale: "ja_JP",
    siteName: "WSS CLASS",
  },
  twitter: {
    card: "summary_large_image",
    title: "WSS CLASS | 実践型セールスプログラム",
    description:
      "営業の悩みを『仕組み』で解決する実践型セールスプログラム",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
