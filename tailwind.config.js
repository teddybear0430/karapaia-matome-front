/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  mode: 'all',
  // ビルド生成時の未使用のスタイルを除外し、パフォーマンスの最適化を行える
  purge: {
    content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
    options: {
      safelist: ['dark'],
    },
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: '#0000cc',
        gray: '#666',
        darkmodeBlue: '#6366F1',
        darkmodeWhite: '#E5E7EB',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
