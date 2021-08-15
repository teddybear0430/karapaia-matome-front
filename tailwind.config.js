/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  mode: 'all',
  // ビルド生成時の未使用のスタイルを除外し、パフォーマンスの最適化を行える
  purge: ['./src/**/*.{tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: '#0000cc',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
