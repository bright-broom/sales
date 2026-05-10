// LINE 公式アカウントURL
export const LINE_URL = "https://line.me/R/ti/p/@xxx"; // TODO: 本番URLに差し替え

// ナビゲーションリンク
export const NAV_LINKS = [
  { href: "#blog", label: "ブログ" },
  { href: "#about", label: "WSSクラスとは" },
  { href: "#features", label: "特長" },
  { href: "#students", label: "受講生の声" },
  { href: "#team", label: "講師・推薦者紹介" },
  { href: "#faq", label: "よくある質問" },
] as const;

// 外部リンク
export const EXTERNAL_LINKS = {
  login: "https://example.com/login", // TODO: 本番URLに差し替え
  terms: "#terms",
  privacy: "#privacy",
  tokushoho: "#tokushoho",
  company: "#company",
} as const;

// 統計データ
export const STATS = {
  students: "1,500",
  videos: "500",
} as const;
