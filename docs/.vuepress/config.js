module.exports = {
  title: 'va-theme-chalk',
  description: 'A library for basic classes',
  themeConfig: {
    smoothScroll: true,
    displayAllHeaders: true,
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '文档', link: '/doc/' },
    ],
    sidebar: {
      '/guide/': [''],
      '/doc/': ['']
    }
  }
}
