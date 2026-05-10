export interface CurriculumLesson {
  title: string;
  description?: string;
}

export interface CurriculumStep {
  step: number;
  title: string;
  description: string;
  lessons: CurriculumLesson[];
}

export const curriculumData: CurriculumStep[] = [
  {
    step: 1,
    title: "マインド設計",
    description: "営業で成果を出すための土台となるマインドセットを構築します",
    lessons: [
      { title: "営業に対する苦手意識の克服" },
      { title: "成功者のマインドセット" },
      { title: "目標設定と行動計画の立て方" },
      { title: "モチベーション維持の方法" },
      { title: "失敗を恐れない思考法" },
    ],
  },
  {
    step: 2,
    title: "営業準備編・提案資料準備",
    description: "効果的な提案を行うための準備と資料作成スキルを習得します",
    lessons: [
      { title: "ターゲット顧客の選定方法" },
      { title: "顧客リサーチの進め方" },
      { title: "提案資料の構成と作り方" },
      { title: "料金設定と見積もりの考え方" },
      { title: "ポートフォリオの効果的な見せ方" },
    ],
  },
  {
    step: 3,
    title: "アポ取得",
    description: "見込み客とのアポイントを効率的に獲得する方法を学びます",
    lessons: [
      { title: "アポ取得の基本戦略" },
      { title: "効果的なアプローチ文の書き方" },
      { title: "SNSを活用したリード獲得" },
      { title: "紹介を生み出す仕組みづくり" },
      { title: "電話・メールでのアポ取得術" },
    ],
  },
  {
    step: 4,
    title: "営業実践",
    description: "実際の商談で成約率を高めるテクニックを身につけます",
    lessons: [
      { title: "初回商談の進め方" },
      { title: "ヒアリングの技術" },
      { title: "課題発見とソリューション提案" },
      { title: "価格交渉とクロージング" },
      { title: "オンライン商談のコツ" },
    ],
  },
  {
    step: 5,
    title: "Webディレクション",
    description: "案件獲得後のプロジェクト進行と顧客管理を学びます",
    lessons: [
      { title: "プロジェクト管理の基本" },
      { title: "クライアントとのコミュニケーション" },
      { title: "外注パートナーとの連携" },
      { title: "トラブル対応と品質管理" },
      { title: "継続案件につなげる納品方法" },
    ],
  },
  {
    step: 6,
    title: "SNS運用・その他講義",
    description: "集客とブランディングに役立つSNS運用と応用スキルを習得します",
    lessons: [
      { title: "Instagram運用の基本と応用" },
      { title: "X（Twitter）での発信戦略" },
      { title: "YouTube/TikTokの活用法" },
      { title: "パーソナルブランディング" },
      { title: "コンテンツマーケティング入門" },
    ],
  },
];
