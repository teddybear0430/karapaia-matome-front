export const siteConfig = {
  siteName: 'カラパイアまとめ',
  siteUrl: 'https://karapaia-matome-front.vercel.app',
  description: 'カラパイアの更新情報を提供しているまとめサイトです。',
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
];
