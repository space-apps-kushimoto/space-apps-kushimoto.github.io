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
  dateLabel: '2025年10月4日(土) - 10月5日(日)',
  venue: '和歌山県立潮岬青少年の家',
  address: '和歌山県東牟婁郡串本町潮岬669',
};

export type LinkButton = {
  label: string;
  note?: string;
  href: string;
  // 準備中のときは false にすると、押せない表示になる
  ready: boolean;
};

export const actions: LinkButton[] = [
  {
    label: '参加登録フォーム',
    note: 'NASA サイトの Kushimoto ロケーションへの登録は当日行います',
    href: 'https://forms.gle/wPLLpBYjvxETbCXj9',
    ready: true,
  },
  {
    label: '開催要項 Ver2.0',
    note: 'PDF',
    href: '/img/KaisaiYoukou_NASA_Space_Apps_Challenge_KUSHIMOTO2025v2.0.pdf',
    ready: true,
  },
  {
    label: '最新情報は connpass で',
    href: 'https://spaceappsjapan.connpass.com/event/368500/',
    ready: true,
  },
];

export const streams = [
  {
    title: 'オープニング・チームアピール・ゲスト講演',
    when: '2025/10/4 10:30〜',
    url: 'https://www.youtube.com/watch?v=xQHlWzBWDps',
  },
  {
    title: '成果発表・審査・表彰',
    when: '2025/10/5 12:30〜',
    url: 'https://www.youtube.com/watch?v=V7uMUIwIZoY',
  },
];

export type Sponsor = { name: string; image: string; url: string };

// image は public/img/sponsor/ 以下のファイル名
export const sponsors: { platinum: Sponsor[]; gold: Sponsor[]; silver: Sponsor[] } = {
  platinum: [
    { name: '一般財団法人 雑賀技術研究所', image: 'logoSaika.png', url: 'https://www.saika.or.jp/' },
    { name: '常石由良ドック株式会社', image: 'logoTsuneishiYura.png', url: 'https://www.tsuneishi.co.jp/yura/' },
  ],
  gold: [
    { name: '株式会社 ビジュアル・テクノロジー研究所', image: 'VTL.png', url: 'http://vtl.co.jp' },
    { name: '株式会社 組込AI研究所', image: 'embedai.png', url: 'https://embed-ai.com' },
    { name: '株式会社 KEGキャリアアカデミー', image: 'logoKEGCareerAcademy.png', url: 'https://k-e-g.co.jp/' },
  ],
  silver: [
    { name: '和歌山県情報化推進協議会', image: 'logoWIDA.jpg', url: 'https://wida.jp' },
    { name: '大洋テクノレックス株式会社', image: 'logoTaiyoTechnolex.jpg', url: 'https://www.taiyo-tx.com' },
    { name: 'ワム・システム・デザイン株式会社', image: 'logoWomSystemDesign.png', url: 'https://www.womnet.com/' },
  ],
};

export const organizers = [
  { role: '主催', names: ['NASA Space Apps Challenge KUSHIMOTO 実行委員会'] },
  { role: '共催', names: ['和歌山県宇宙教育研究会'] },
  {
    role: '協賛',
    names: [
      '一般財団法人雑賀技術研究所',
      '常石由良ドック株式会社',
      '株式会社ビジュアル・テクノロジー研究所',
      '株式会社組込AI研究所',
      '株式会社KEGキャリアアカデミー',
      '和歌山情報化推進協議会',
      '大洋テクノレックス株式会社',
      'ワム・システム・デザイン株式会社',
    ],
  },
  {
    role: '後援',
    names: ['和歌山県', '串本町', '和歌山放送', 'テレビ和歌山', '紀伊民報', '熊野新聞', 'スペースワン株式会社'],
  },
  { role: '事務局', names: ['特定非営利活動法人 和歌山IT教育機構'] },
];

export const nav = [
  { label: 'ホーム', href: '/' },
  { label: 'お知らせ', href: '/posts/' },
  { label: '開催概要', href: '/schedule/' },
  { label: 'アクセス', href: '/access/' },
  { label: '行動規範', href: '/code-of-conduct/' },
];
