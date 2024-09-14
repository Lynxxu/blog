module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'zh', 'ja'],
    },
    localePath: typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
  }