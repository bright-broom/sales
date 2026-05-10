export interface StudentSuccess {
  id: string;
  name: string;
  role: string;
  title: string;
  summary: string;
  achievement: string;
  imageSrc?: string;
}

export const studentSuccessData: StudentSuccess[] = [
  {
    id: "student-1",
    name: "鈴木さん",
    role: "Webデザイナー",
    title: "入会2ヶ月で56万円の直案件を獲得",
    summary:
      "営業が苦手で、クラウドソーシング頼みだった私が、WSSクラスで学んだ提案術を実践したところ、2ヶ月目で56万円の直案件を獲得できました。",
    achievement: "2ヶ月で56万円受注",
  },
  {
    id: "student-2",
    name: "高野さん",
    role: "SNS運用コンサルタント",
    title: "サブスク型ビジネスで年商3,000万円達成",
    summary:
      "単発案件ばかりで収入が安定しなかった状態から、サブスク型の提案方法を学び、継続クライアントを増やすことで年商3,000万円を達成しました。",
    achievement: "年商3,000万円達成",
  },
  {
    id: "student-3",
    name: "田中さん",
    role: "動画クリエイター",
    title: "営業ゼロから月5件の新規獲得体制を構築",
    summary:
      "技術には自信があったものの営業経験ゼロでした。WSSクラスのアポ取得ノウハウを実践し、今では毎月安定して5件以上の新規案件を獲得しています。",
    achievement: "月5件の新規獲得",
  },
  {
    id: "student-4",
    name: "山本さん",
    role: "フリーランスエンジニア",
    title: "単価を2倍にしながら継続率90%を実現",
    summary:
      "価格競争に巻き込まれていた状態から、価値提案の方法を学び直し、単価を2倍に上げながらもクライアント継続率90%を維持できるようになりました。",
    achievement: "単価2倍・継続率90%",
  },
  {
    id: "student-5",
    name: "佐藤さん",
    role: "起業家",
    title: "副業から独立、法人化まで1年で達成",
    summary:
      "会社員をしながら副業でスタートし、WSSクラスで学んだ営業スキルとビジネス設計で、1年後には独立・法人化を実現しました。",
    achievement: "1年で法人化達成",
  },
];
