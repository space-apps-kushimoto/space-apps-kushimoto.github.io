// 年ごとに変わる開催情報。毎年の更新は基本的にこのファイルだけで済むようにする。

export const site = {
  title: 'Space Apps Challenge Kushimoto',
  tagline: 'NASA 主催の世界同時ハッカソン',
  description:
    'NASA が主催する世界同時ハッカソン「Space Apps Challenge」の和歌山県串本町会場の公式サイトです。',
  ogImage: '/img/ogp.jpg',
  email: 'spaceappskushimoto@gmail.com',
};

export const event = {
  // トップのタイトルに表示する開催年
  year: 2026,
  dateLabel: '2026年11月14日(土) - 11月15日(日)',
  // 海外からの参加者向けの英語表記（トップページで日本語と併記する）
  dateLabelEn: 'Sat, Nov 14 – Sun, Nov 15, 2026',
  // スケジュールの時間帯。日程の横に書き添える
  timezone: 'JST（UTC+9）',
  timezoneEn: 'Japan Standard Time (UTC+9)',
  venue: 'オンライン開催（Discord）',
  venueEn: 'Online (Discord)',
};

// 会場の Discord サーバー「NASA SpaceApps串本」（サーバーID: 1388925599996706908）
// inviteUrl に招待 URL（https://discord.gg/...）を入れると、トップのボタンが押せるようになる
export const discord = {
  name: 'NASA SpaceApps串本',
  inviteUrl: 'https://discord.gg/TFBT533JwD',
};

export type LinkButton = {
  label: string;
  labelEn: string;
  note?: string;
  noteEn?: string;
  href: string;
  // 準備中のときは false にすると、押せない表示になる
  ready: boolean;
};

// 1つ目のボタンが目立つ色（赤）になる。note は1つ目のボタンの下に注記として表示される。
export const actions: LinkButton[] = [
  {
    label: '参加する',
    labelEn: 'Join',
    note: '参加登録は、Discord に参加してから回答していただきます',
    noteEn: 'To register, please join our Discord server first, then complete the registration form there.',
    href: discord.inviteUrl,
    ready: discord.inviteUrl !== '',
  },
  {
    label: '開催要項',
    labelEn: 'Event Guidelines',
    href: '',
    ready: false,
  },
  {
    label: 'connpass',
    labelEn: 'connpass',
    href: '',
    ready: false,
  },
];

// ライブ配信。空のあいだは「決まり次第お知らせします」と表示する。
// 例: { title: 'オープニング・チームアピール・ゲスト講演', when: '2026/11/14 10:30〜', url: 'https://www.youtube.com/watch?v=...' }
export const streams: { title: string; when: string; url: string }[] = [];

// トップの数字。NASA 発表の 2025 年の実績
// https://www.spaceappschallenge.org/about/results-and-metrics/
export const stats = [
  { value: '167', unit: 'の国と地域', note: '2025年の参加国・地域' },
  { value: '114,094', unit: '人', note: '2025年の世界の登録参加者' },
  { value: '551', unit: '会場', note: '2025年の世界のローカル会場' },
  { value: '8', unit: '年目', note: '串本での通算開催' },
];

export type Sponsor = { name: string; image: string; url: string };

export type SponsorGroup = {
  // グループの見出し（例: 'プラチナスポンサー'）。不要なら省略する
  label?: string;
  // ロゴの大きさ
  size: 'large' | 'medium' | 'small';
  list: Sponsor[];
};

// トップの「スポンサー」欄。image は public/img/sponsor/ 以下のファイル名。
// 2026年はオンライン開催のためスポンサーは募集せず、運営スタッフとして協力いただく2社を掲載。
// （区分付きで募集する年の例:
//   { label: 'プラチナスポンサー', size: 'large', list: [...] },
//   { label: 'ゴールドスポンサー', size: 'medium', list: [...] },
//   { label: 'シルバースポンサー', size: 'small', list: [...] }）
export const sponsors: SponsorGroup[] = [
  {
    size: 'medium',
    list: [
      { name: '株式会社 ビジュアル・テクノロジー研究所', image: 'VTL.png', url: 'http://vtl.co.jp' },
      { name: '株式会社 組込AI研究所', image: 'embedai.png', url: 'https://embed-ai.com' },
    ],
  },
];

// フッターの主催者等。hidden: true の行は表示しない
export const organizers: { role: string; names: string[]; hidden?: boolean }[] = [
  { role: '主催', names: ['NASA Space Apps Challenge KUSHIMOTO 実行委員会'] },
  { role: '共催', names: ['和歌山県宇宙教育研究会'] },
  {
    role: '運営協力',
    names: ['株式会社ビジュアル・テクノロジー研究所', '株式会社組込AI研究所'],
  },
  {
    role: '後援',
    // 2026年は後援なしのため非表示。後援をもらえたら names を更新し、hidden を消す
    hidden: true,
    names: ['和歌山県', '串本町', '和歌山放送', 'テレビ和歌山', '紀伊民報', '熊野新聞', 'スペースワン株式会社'],
  },
  { role: '事務局', names: ['和歌山県立桐蔭高等学校・中学校科学部OB会'] },
];

export const nav = [
  { label: 'ホーム', href: '/' },
  { label: 'お知らせ', href: '/posts/' },
  { label: '開催概要', href: '/schedule/' },
  { label: '行動規範', href: '/code-of-conduct/' },
];
