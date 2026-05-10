# WSS CLASS Landing Page

WSS CLASS 風の営業スクール向けランディングページです。

## 技術スタック

- **フレームワーク**: Next.js 15+ (App Router)
- **言語**: TypeScript 5+
- **スタイリング**: Tailwind CSS v4
- **アイコン**: lucide-react
- **フォント**: Noto Sans JP (Google Fonts)
- **ホスティング**: Vercel

## セットアップ

### 必要条件

- Node.js 18+
- pnpm (推奨) または npm

### インストール

```bash
# リポジトリをクローン
git clone <repository-url>
cd sound

# 依存関係をインストール
pnpm install
```

## 開発

```bash
# 開発サーバーを起動
pnpm dev

# http://localhost:3000 でアクセス
```

## ビルド

```bash
# プロダクションビルド
pnpm build

# ビルド結果をローカルで確認
pnpm start
```

## プロジェクト構成

```
src/
├── app/
│   ├── layout.tsx       # ルートレイアウト
│   ├── page.tsx         # メインページ
│   └── globals.css      # グローバルスタイル
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # 各セクションコンポーネント
│   └── ui/              # 共通UIコンポーネント
├── data/                # 静的データ
└── lib/                 # ユーティリティ、定数
```

## セクション一覧

1. Hero（ファーストビュー）
2. StepToChange
3. TargetAudience（対象者）
4. WhatIsWSS（WSSクラスとは）
5. Endorsements（推薦者の声）
6. Point01（直案件獲得）
7. Point02（サブスク型ビジネス）
8. Point03Curriculum（カリキュラム）
9. LiveContent（LIVE内容）
10. Point04Options（オプションサービス）
11. CTABlock（中間CTA）
12. StudentSuccess（受講生の成功事例）
13. TeamMembers（運営メンバー）
14. Blog（ブログ）
15. Recommended（おすすめ）
16. FAQ（よくある質問）
17. LegalSection（利用規約・プライバシーポリシー）
18. FinalCTA（最終CTA）

## デプロイ

### Vercel へのデプロイ

1. GitHub にリポジトリをプッシュ
2. [Vercel](https://vercel.com) にログイン
3. 「New Project」からリポジトリを選択
4. デプロイ設定は自動検出されます
5. 「Deploy」をクリック

### 環境変数

v1 では環境変数は不要です。

## カスタマイズ

### LINE URL の変更

`src/lib/constants.ts` の `LINE_URL` を本番の LINE 公式アカウント URL に変更してください。

```ts
export const LINE_URL = "https://line.me/R/ti/p/@your-account";
```

### コンテンツの更新

- FAQ: `src/data/faq.ts`
- カリキュラム: `src/data/curriculum.ts`
- 受講生の声: `src/data/students.ts`
- LIVE内容: `src/data/liveContent.ts`
- オプション: `src/data/options.ts`

## ライセンス

Private
