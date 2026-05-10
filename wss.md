# WSS CLASS風 ランディングページ 要件定義書

> このドキュメントはプロジェクトのルート直下に配置し、Claude Code（Anti-Gravity / IDE 拡張）が常時参照する**唯一の真実 (Single Source of Truth)** です。実装時は本ドキュメントを最優先のインストラクションとして扱ってください。

---

## 1. プロジェクト概要

### 1.1 目的
[`https://wss-class.com/`](https://wss-class.com/) を参考にした、**営業スクール用の高コンバージョン縦長ランディングページ (LP)** を構築する。最終的に Vercel 本番環境へ公開し、SNS や広告から流入したユーザーを **LINE 公式アカウントへの個別相談誘導** にコンバートさせる。

### 1.2 ゴール
- スクロール完走率を高めるストーリーテリング型構成
- モバイルファーストで Lighthouse スコア **Performance / Accessibility / SEO すべて 90 以上**
- LINE CTA への到達率を最大化（ファーストビュー / 中間 / 最終 CTA の 3 段階配置）
- Git push のみでデプロイが完結するシンプルな運用フロー

### 1.3 ターゲットユーザー
- 営業に苦手意識のあるクリエイター（デザイナー / コーダー / 動画編集者）
- フリーランス・副業の Web 制作 / SNS 運用者
- サブスク型で安定収益を作りたい個人事業主
- 起業・法人化を目指す事業オーナー候補

---

## 2. 技術スタック

| カテゴリ | 採用技術 | 理由 |
|---|---|---|
| フレームワーク | **Next.js 15+ (App Router)** | SSG/ISR で LP に最適、Vercel と相性最高 |
| 言語 | **TypeScript 5+** | 型安全 / IDE 補完 / 保守性 |
| スタイリング | **Tailwind CSS v4** | ユーティリティ駆動、デザイントークン統一が容易 |
| アイコン | **lucide-react** | 軽量、Tree-shaking 対応 |
| フォント | **Noto Sans JP (Google Fonts)** | 日本語の可読性 |
| ホスティング | **Vercel** | Next.js 公式、無料枠で十分、Git 連携が簡単 |
| バージョン管理 | **GitHub** | Vercel と Git 連携、自動デプロイのトリガー |
| パッケージ管理 | **pnpm** (または npm) | 高速、ディスク効率 |
| Linter / Formatter | **ESLint + Prettier** | コード品質統一 |

### 2.1 採用しないもの（明示）
- 状態管理ライブラリ（Redux, Zustand 等）：LP に不要
- バックエンド / DB：LINE 誘導が CTA なので不要
- CMS：コンテンツ更新は Git ベースで運用
- アニメーションライブラリ（Framer Motion 等）：v1 では Tailwind の `transition` で十分

---

## 3. プロジェクト構成

```
.
├── REQUIREMENTS.md              # 本ドキュメント
├── README.md                    # セットアップ手順
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── public/
│   ├── images/                  # ロゴ・写真・OG画像など
│   └── favicon.ico
└── src/
    ├── app/
    │   ├── layout.tsx           # ルートレイアウト（フォント・metadata）
    │   ├── page.tsx             # トップページ（各 Section を組み立て）
    │   ├── globals.css          # Tailwind ディレクティブ
    │   └── opengraph-image.tsx  # OG 画像（任意）
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx
    │   │   └── Footer.tsx
    │   ├── sections/
    │   │   ├── Hero.tsx
    │   │   ├── StepToChange.tsx
    │   │   ├── TargetAudience.tsx
    │   │   ├── WhatIsWSS.tsx
    │   │   ├── Endorsements.tsx
    │   │   ├── Point01.tsx
    │   │   ├── Point02.tsx
    │   │   ├── Point03Curriculum.tsx
    │   │   ├── LiveContent.tsx
    │   │   ├── Point04Options.tsx
    │   │   ├── CTABlock.tsx
    │   │   ├── StudentSuccess.tsx
    │   │   ├── TeamMembers.tsx
    │   │   ├── Blog.tsx
    │   │   ├── Recommended.tsx
    │   │   ├── FAQ.tsx
    │   │   ├── LegalSection.tsx
    │   │   └── FinalCTA.tsx
    │   └── ui/                  # 汎用 UI（Button, Accordion など）
    ├── lib/
    │   └── constants.ts         # 外部リンク・LINE URL 等の定数
    └── data/                    # セクションごとの静的データ
        ├── faq.ts
        ├── students.ts
        ├── curriculum.ts
        ├── liveContent.ts
        └── options.ts
```

---

## 4. 機能要件（セクション仕様）

ページは縦 1 枚構成で、上から順に以下のセクションを配置する。

### 4.1 Header（ヘッダー）
- スティッキー、白背景 + 背景ぼかし
- ロゴ「WSS CLASS」（黒 + アンバー）
- ナビ（PC のみ）：ブログ / WSSクラスとは / 特長 / 受講生の声 / 講師・推薦者紹介 / よくある質問
- CTA ボタン：LINE 緑 (`#06C755`) で「個別相談はこちら」
- モバイル：ハンバーガーメニュー → ドロップダウン

### 4.2 Hero（ファーストビュー）
- ダーク背景（slate-900 グラデ + 装飾グリッド + ボケライト）
- メインコピー：「営業の悩みを『仕組み』で解決する 実践型セールスプログラム」
- 「仕組み」部分にアンバー下線
- 統計バッジ 2 枚：**1,500 人突破** / **500 本以上**
- 主 CTA：LINE 緑ボタン「個別相談の案内を LINE で受け取る」
- 注釈：返品交換 / 公式 LINE
- 右側：講師写真イメージ + フローティングカード（金本氏 / 溝口氏）
  - v1 はプレースホルダーで OK、後で実画像に差替

### 4.3 STEP TO CHANGE
- 白背景、中央寄せ
- 上付きラベル「STEP TO CHANGE」
- 見出し「今日の一歩が、明日の大きな変化につながる」
- 説明文（営業スキルが武器になる）
- アンバーグラデ枠の引用ブロック「営業スキルという**一生の武器**を手に入れて〜」
- LINE CTA

### 4.4 このような方に向いています
- 灰色背景
- 4 カード（アイコン + キャッチ）
  1. 営業に苦手意識がある
  2. 成果が安定せず、再現性に悩んでいる
  3. 営業を「感覚」ではなく「仕組み」で身につけたい
  4. 選択肢を広げたい 会社員・経営者・独立検討中の方
- 注釈：「とにかく安く学びたい方〜には向いていません」

### 4.5 WSSクラスとは？
- 白背景
- 3 カード構成（番号バッジ 01/02/03）
  1. 完全な営業初心者でも安心して学べる
  2. 疑問を定期 LIVE で "すぐ" 解決 安心の学習体制
  3. 総合的なビジネススキルが身につく

### 4.6 推薦者の声
- 黒背景 + ドットパターン
- 2 カード
  - 箕輪 厚介（幻冬舎 編集者）
  - 西崎 康平（トゥモローゲート株式会社 代表取締役）

### 4.7 POINT 01：未経験から直案件獲得を
- 共通の `<PointSection>` コンポーネントで実装
- 「POINT 01」赤バッジ
- Reason 1〜3（基礎から段階的に / スキルを武器に / 実践さながら）
- ケーススタディ：鈴木さん（2ヶ月で 56 万円受注）

### 4.8 POINT 02：サブスク型ビジネス提案
- Reason 1〜3（月額サブスク設計 / 安定収益モデル / 提案からクロージング）
- ケーススタディ：高野さん（年商 3,000 万円達成）

### 4.9 POINT 03：安心して学べる（カリキュラム）
- 「500 本以上」の大型統計バナー
- **Step 1〜6 のアコーディオン**
  - Step 1：マインド設計
  - Step 2：営業準備編・提案資料準備
  - Step 3：アポ取得
  - Step 4：営業実践
  - Step 5：Web ディレクション
  - Step 6：SNS 運用・その他講義
- データは `src/data/curriculum.ts` に分離

### 4.10 LIVE 内容ジャンル
- 8 カテゴリのグリッド表示
  - 経営・事業戦略 / 営業・セールス戦略 / ビジネスコミュニケーション / マインドセット / SNS・Instagram 運用 / 業務効率化 / Web ディレクション・制作 / デザイン・クリエイティブ
- データは `src/data/liveContent.ts` に分離

### 4.11 POINT 04：オプションサービス
- 4 カード（2 列グリッド）
  - Option 1：代理店制度（スマスタ）— 生徒限定 / 加入金不要
  - Option 2：ビースコア（B-SCORE）— 有料
  - Option 3：クチコレ — 有料
  - Option 4：アポナビ — 有料
- 各カードに加入条件ボックス

### 4.12 CTA Block（中間×2）
- ダークグラデ背景
- 3 つのターゲット文言 + LINE CTA

### 4.13 受講生の成功事例
- 5 件のカード（タイトル / リード文 / 続きはこちら）
- データは `src/data/students.ts` に分離

### 4.14 運営メンバー・講師
- メイン 2 名（金本相太 / 溝口勇児）+ サブ 3 名（宮本慶太 / こゆ太 / ジェニー）

### 4.15 ブログ・お知らせ
- 8 件のカード（カテゴリタグ / タイトル / 日付）
- v1 はモックデータ、将来 microCMS や MDX 化を検討

### 4.16 こんな方におすすめ
- 4 カード（タグ + タイトル + 説明）

### 4.17 FAQ
- 7 問のアコーディオン
- データは `src/data/faq.ts` に分離

### 4.18 利用規約 / プライバシーポリシー
- 折りたたみブロック × 2
- 利用規約 17 条 / プライバシーポリシー 10 章

### 4.19 Final CTA（最終CTA）
- 赤〜オレンジ〜アンバーのグラデ背景
- ドットパターン
- 「今、行動しないと **1年後も同じ状況** かもしれません」

### 4.20 Footer
- 黒背景
- ロゴ + LINE CTA + ログインリンク
- 法的リンク 4 つ（利用規約 / プライバシー / 特商法 / 運営会社）
- コピーライト：© 2026 WS Inc.

---

## 5. デザイン要件

### 5.1 カラーパレット（Tailwind config に登録）

```ts
// tailwind.config.ts colors 拡張例
colors: {
  brand: {
    line: '#06C755',         // LINE CTA
    accent: '#FBBF24',       // amber-400 ベースの強調
    danger: '#DC2626',       // POINT バッジの赤
  }
}
```

| 用途 | カラー |
|---|---|
| プライマリ背景（明） | `white` / `slate-50` |
| プライマリ背景（暗） | `slate-900` / `slate-800` |
| アクセント（黄） | `amber-400` (#FBBF24) |
| アクセント（赤） | `red-600` |
| CTA（LINE 緑） | `#06C755` |
| 本文 | `slate-700` / `slate-900` |
| 補助テキスト | `slate-500` / `slate-400` |

### 5.2 タイポグラフィ
- 日本語：**Noto Sans JP** (400 / 500 / 700 / 800 / 900)
- 数値・ラテン：そのまま Noto Sans JP に統一（軽量化のため）
- 見出し：`font-black` (900) を多用、強い視覚的階層
- 本文：`font-medium` 〜 `font-bold`
- 行間：日本語は `leading-relaxed` 推奨

### 5.3 レイアウト
- 最大幅：`max-w-6xl` または `max-w-7xl` を中央寄せ
- セクション間 padding：`py-20 lg:py-28`
- カード：`rounded-2xl` 〜 `rounded-3xl`、`border border-slate-100` または影

### 5.4 レスポンシブ
- モバイルファースト
- ブレークポイント：`sm` (640px) / `md` (768px) / `lg` (1024px)
- ナビは `lg` 以上で展開、それ未満はハンバーガー

### 5.5 アクセシビリティ
- 全 CTA に `aria-label` を必要に応じて付与
- アコーディオンは `<button>` で実装、キーボード操作可能
- 画像には `alt` 必須
- カラーコントラスト比 WCAG AA 以上

---

## 6. 非機能要件

### 6.1 パフォーマンス
- Lighthouse Performance **90+**
- 画像は `next/image` を必須使用
- フォントは `next/font/google` で最適化読み込み
- 不要な JS バンドルを避ける（Client Component は必要箇所のみ）

### 6.2 SEO
- `app/layout.tsx` の `metadata` で title / description / OG / Twitter Card を設定
- 構造化データ（`Organization` / `Course`）を JSON-LD で埋め込み（v2 で OK）
- セマンティック HTML（`<header>` / `<main>` / `<section>` / `<article>` / `<footer>`）

### 6.3 ブラウザサポート
- Chrome / Safari / Edge / Firefox の最新 2 バージョン
- iOS Safari 16+ / Android Chrome 最新

### 6.4 セキュリティ
- 外部リンク（LINE 等）は `rel="noopener noreferrer"`
- 環境変数で扱う秘匿情報は v1 では発生しない想定

---

## 7. デプロイ要件

### 7.1 Vercel 連携手順
1. GitHub リポジトリを作成し、ローカルから push
2. Vercel ダッシュボードで「New Project」→ GitHub 連携
3. リポジトリを選択、フレームワークは自動検知（Next.js）
4. 環境変数：v1 は不要
5. Deploy 押下 → 数分で本番 URL 発行

### 7.2 ブランチ戦略
- `main`：本番（Vercel が自動デプロイ）
- `develop`：開発統合（Preview Deploy 自動生成）
- `feature/*`：機能ブランチ

### 7.3 ドメイン
- v1：Vercel の `*.vercel.app` で OK
- v2 以降：独自ドメインを Vercel に紐付け

---

## 8. 開発タスク（Claude Code 向けステップ）

### Phase 1：プロジェクト初期化
- [ ] `pnpm create next-app@latest` で App Router + TS + Tailwind を選択して初期化
- [ ] `lucide-react` をインストール
- [ ] Prettier / ESLint の設定
- [ ] `tailwind.config.ts` に brand カラーを追加
- [ ] `app/layout.tsx` で Noto Sans JP を読み込み、metadata を設定

### Phase 2：共通基盤
- [ ] `components/layout/Header.tsx` を作成（モバイルメニュー含む）
- [ ] `components/layout/Footer.tsx` を作成
- [ ] `components/ui/` に Accordion / Button などの共通 UI を抽出
- [ ] `lib/constants.ts` に LINE URL 等を定義

### Phase 3：データ層
- [ ] `data/faq.ts` / `data/students.ts` / `data/curriculum.ts` / `data/liveContent.ts` / `data/options.ts` を作成
- [ ] 全データに TypeScript の型定義を付与

### Phase 4：セクション実装
- [ ] Hero
- [ ] StepToChange
- [ ] TargetAudience
- [ ] WhatIsWSS
- [ ] Endorsements
- [ ] Point01 / Point02（共通 PointSection コンポーネントで実装）
- [ ] Point03Curriculum（アコーディオン）
- [ ] LiveContent
- [ ] Point04Options
- [ ] CTABlock（再利用）
- [ ] StudentSuccess
- [ ] TeamMembers
- [ ] Blog
- [ ] Recommended
- [ ] FAQ
- [ ] LegalSection
- [ ] FinalCTA

### Phase 5：仕上げ
- [ ] 画像プレースホルダーを実画像に差替（必要時）
- [ ] OG 画像生成（`app/opengraph-image.tsx`）
- [ ] Lighthouse 計測 → 90 点未満項目を改善
- [ ] レスポンシブを iPhone SE / iPhone 15 Pro / iPad / デスクトップで目視確認

### Phase 6：デプロイ
- [ ] GitHub リポジトリ作成 & push
- [ ] Vercel 連携 & 本番デプロイ
- [ ] 本番 URL で全 CTA リンク・スクロール挙動を確認

---

## 9. 完了条件 (Definition of Done)

以下を全て満たした時点で v1 完了とする。

- [ ] 全 21 セクションが実装され、上から下までスクロールで自然に閲覧できる
- [ ] モバイル / タブレット / デスクトップで崩れがない
- [ ] LINE CTA ボタンが Hero / 中間 ×2 / Final CTA / Header / Footer の合計 6 箇所以上に配置されている
- [ ] FAQ・カリキュラム・利用規約・プライバシーポリシーがアコーディオン操作で開閉する
- [ ] Lighthouse Performance / Accessibility / Best Practices / SEO がすべて 90+
- [ ] Vercel 本番 URL で公開され、Git push で自動デプロイされる
- [ ] `README.md` にセットアップ・開発・デプロイ手順が記載されている
- [ ] TypeScript の型エラー / ESLint エラーがゼロ

---

## 10. 注意事項・コンテンツ著作権

- 参考元 [`https://wss-class.com/`](https://wss-class.com/) のテキスト・画像をそのまま流用しないこと
- 文言は **構造とトーンを参考に、自身のサービス内容に合わせて書き換える**
- 推薦者・受講生の写真や名前は、許諾を得たもののみ掲載
- ロゴ・ブランド名は自身のものに置き換える

---

## 11. 拡張案 (v2 以降)

- 微アニメーション（Framer Motion / Motion One）の導入
- ブログを MDX または microCMS で運用化
- Cookie 同意バナー（GDPR / 改正個人情報保護法対応）
- A/B テスト基盤（Vercel Edge Config + GA4 イベント）
- 多言語対応（i18n）

---

**最終更新**：プロジェクト開始時
**メンテナ**：（あなたの名前）