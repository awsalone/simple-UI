module.exports = {
  title: 'simple-ui',
  description: 'Just playing around',
  // base: '/mt-blog/',//站点根路径
  // repo: 'https://github.com/txs1992/mt-blog', // 添加 github 链接
  themeConfig: {
    sidebar: [

      {
        title: '组件',
        path: '/vue/',
        collapsable: false,
        children: [ /* ... */
          ['/vue/button', 'Button 按钮'],
          ['/vue/dialog', 'Dialog 对话框'],
          ['/vue/tooltips', 'Tooltips 提示'],
          ['/vue/layout', 'Layout 布局'],
          ['/vue/swipe', 'Swipe 轮播'],
          ['/vue/collapse', 'Collapse 折叠面板']
        ]
      }

    ]
  }
}