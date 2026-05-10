export interface OptionService {
  id: string;
  number: number;
  name: string;
  subtitle: string;
  description: string;
  conditions: {
    label: string;
    value: string;
  }[];
  isPaid: boolean;
}

export const optionsData: OptionService[] = [
  {
    id: "smasta",
    number: 1,
    name: "代理店制度（スマスタ）",
    subtitle: "生徒限定・加入金不要",
    description:
      "WSS CLASS受講生限定で利用できる代理店制度。加入金不要で、学んだスキルをすぐに収益化できる環境を提供します。実践の場として最適です。",
    conditions: [
      { label: "対象", value: "WSS CLASS受講生限定" },
      { label: "加入金", value: "不要" },
      { label: "利用料", value: "無料" },
    ],
    isPaid: false,
  },
  {
    id: "bscore",
    number: 2,
    name: "ビースコア（B-SCORE）",
    subtitle: "営業力診断ツール",
    description:
      "自分の営業スキルを可視化できる診断ツール。強みと弱みを把握し、効率的なスキルアップ計画を立てることができます。",
    conditions: [
      { label: "対象", value: "WSS CLASS受講生" },
      { label: "利用料", value: "有料（月額制）" },
    ],
    isPaid: true,
  },
  {
    id: "kuchikore",
    number: 3,
    name: "クチコレ",
    subtitle: "口コミ・紹介管理システム",
    description:
      "クライアントからの口コミや紹介を効率的に管理・促進するシステム。紹介営業を仕組み化し、新規獲得コストを削減できます。",
    conditions: [
      { label: "対象", value: "WSS CLASS受講生" },
      { label: "利用料", value: "有料（月額制）" },
    ],
    isPaid: true,
  },
  {
    id: "aponavi",
    number: 4,
    name: "アポナビ",
    subtitle: "アポイント管理・効率化ツール",
    description:
      "商談のアポイント管理を効率化するツール。スケジュール調整からリマインド、商談記録まで一元管理できます。",
    conditions: [
      { label: "対象", value: "WSS CLASS受講生" },
      { label: "利用料", value: "有料（月額制）" },
    ],
    isPaid: true,
  },
];
