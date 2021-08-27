/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  mode: 'all',
  // ビルド生成時の未使用のスタイルを除外し、パフォーマンスの最適化を行える
  purge: {
    content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: '#0000cc',
        gray: '#666',
        bodyDark: '#191717'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
