export interface LiveCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const liveContentData: LiveCategory[] = [
  {
    id: "business-strategy",
    title: "経営・事業戦略",
    description: "ビジネスモデル構築から事業拡大まで、経営視点でのノウハウを学べます",
    icon: "briefcase",
  },
  {
    id: "sales-strategy",
    title: "営業・セールス戦略",
    description: "実践的な営業テクニックから戦略的なセールス設計まで幅広くカバー",
    icon: "target",
  },
  {
    id: "communication",
    title: "ビジネスコミュニケーション",
    description: "クライアントとの関係構築、交渉術、プレゼンテーションスキルを向上",
    icon: "messages-square",
  },
  {
    id: "mindset",
    title: "マインドセット",
    description: "成功者の思考法、メンタル管理、目標達成のための心構えを習得",
    icon: "brain",
  },
  {
    id: "sns",
    title: "SNS・Instagram運用",
    description: "フォロワー獲得からマネタイズまで、SNSを活用した集客方法を解説",
    icon: "instagram",
  },
  {
    id: "efficiency",
    title: "業務効率化",
    description: "時間管理、ツール活用、仕組み化で生産性を最大化する方法を学びます",
    icon: "zap",
  },
  {
    id: "web-direction",
    title: "Webディレクション・制作",
    description: "Web制作の進行管理、クライアント対応、品質管理のノウハウを習得",
    icon: "layout",
  },
  {
    id: "design",
    title: "デザイン・クリエイティブ",
    description: "デザイン思考、クリエイティブ制作、ブランディングの基礎を学べます",
    icon: "palette",
  },
];
