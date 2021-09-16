module.exports = {
  lang: 'zh-CN',
  title: '页面的标题',
  description: '页面的描述',
  themeConfig: {
    logo: '/images/logo.png',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '导航列表',
        children: [
          '/company/alibaba.md',
          '/company/tencent.md',
        ],
      },
      {
        text: 'Github',
        link: 'https://github.com/chinaBerg/fe-interview-questions',
      },
    ],
  },
}