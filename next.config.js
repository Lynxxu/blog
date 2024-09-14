/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config')

module.exports = {
  output: 'export',
  i18n,
  images: {
    unoptimized: true,
  },
}
