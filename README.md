# space-apps-kushimoto.github.io

このリポジトリは Space Apps Kushimoto の公式サイトのリポジトリです。

https://space-apps-kushimoto.github.io/

サイトは [Astro](https://astro.build/) で作っています。`master` に push すると、GitHub Actions がサイトを組み立てて GitHub Pages に公開します（[.github/workflows/deploy.yml](.github/workflows/deploy.yml)）。

過去の年のサイトは、年ごとのブランチ（`2024`、`2025` など）に残しています。

## 毎年の更新

開催日・会場・ボタンのリンク・ライブ配信・スポンサー・主催者などは、[src/data/event.ts](src/data/event.ts) にまとめています。基本的にはこのファイルを書き換えるだけで、トップページとフッターに反映されます。

| 変えたいもの | 場所 |
|---|---|
| 開催年・日程・会場 | `src/data/event.ts` の `event` |
| 参加登録・開催要項・connpass のボタン | `src/data/event.ts` の `actions`（準備中のときは `ready: false`） |
| ライブ配信 | `src/data/event.ts` の `streams` |
| スポンサー | `src/data/event.ts` の `sponsors`（ロゴ画像は `public/img/sponsor/` に置く） |
| 主催・共催・協賛・後援・事務局 | `src/data/event.ts` の `organizers` |
| 開催要項などの PDF・画像 | `public/img/` |
| 開催概要・アクセス・行動規範・お問い合わせ | `src/pages/<ページ名>/index.md` |

## お知らせ（ブログ）の書き方

1. `src/content/posts/` に、`YYYY-MM-DD-名前.md` という名前でファイルを作ります。
2. ファイルの先頭に、次の形式で情報を書きます。

   ```markdown
   ---
   title: 記事のタイトル
   date: 2026-09-01 00:00:00
   author: 名前
   ---

   ここから本文（Markdown）
   ```

3. 記事の URL は `/年/月/日/名前.html` になります（日付は `date` の値を使います）。

GitHub 上で編集する場合は、リポジトリをフォークして上記のファイルを作り、プルリクエストを送ってください。

## ローカルで確認する

### 準備（初回だけ）

- Node.js 22.12 以上が必要です。
- 次のコマンドで、必要な部品を入れます。

```bash
npm install
```

### 表示する

```bash
npm run dev
```

ターミナルに表示される `Local` の URL（通常は `http://localhost:4321/`）をブラウザで開きます。ファイルを保存すると、表示が自動で更新されます。止めるときは `Ctrl + C` を押します。

- ポート `4321` が使用中のときは、`4322` など別の番号になります。毎回 `Local` の行を確認してください。
- VS Code では、F5 で起動と同時に既定のブラウザで開けます（[.vscode/launch.json](.vscode/launch.json)）。
- VS Code の中で見る場合は、コマンドパレット（`Ctrl + Shift + P`）→「ブラウザー: 統合ブラウザーを開く」で上の URL を開きます。
- `.astro` ファイルを編集するときは、VS Code の拡張機能「Astro」（`astro-build.astro-vscode`）を入れると便利です。

### 公開前の確認

```bash
npm run build
```

```bash
npm run preview
```

`npm run build` で公開用のファイルが `dist/` にでき、`npm run preview` でそれを表示できます。

## フォルダ構成

```
public/            そのまま公開されるファイル（画像・PDF・favicon）
src/content/posts/ お知らせ記事（Markdown）
src/data/event.ts  年ごとに変わる開催情報
src/pages/         各ページ
src/layouts/       ページの共通レイアウト
src/components/    ヘッダー・フッター
src/styles/        共通のスタイル（色などの基本値）
```

## デザインについて

目の明暗への順応の負担を減らすため、サイト全体を暗めの紺で統一し、真っ黒・真っ白の面を使わないようにしています。色の基本値は [src/styles/global.css](src/styles/global.css) の先頭にまとめています。
