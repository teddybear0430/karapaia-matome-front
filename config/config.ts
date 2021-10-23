export const siteConfig = {
  siteName: 'カラパイアまとめ',
  siteUrl: 'https://karapaia-matome-front.vercel.app',
  description: 'カラパイアの更新情報を提供しているまとめサイトです。',
  maxPostCount: 70,
} as const;

export const options = [
  {
    label: '新しい順',
    value: 'desc',
  },
  {
    label: '古い順',
    value: 'asc',
  },
  {
    label: 'コメントが多い順',
    value: 'commentDesc',
  },
  {
    label: 'コメントが少ない順',
    value: 'commentAsc',
  },
  {
    label: '読んだ記事',
    value: 'sortReaded',
  },
  {
    label: '読んでいない記事',
    value: 'sortNotReaded',
  },
];
