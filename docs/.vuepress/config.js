module.exports = {
  lang: 'zh-CN',
  title: '前端八股文',
  description: '前端八股文 前端面试题 面试题 面试经验 前端面经 阿里巴巴面试题 腾讯面试题 字节跳动面试题 百度面试题 美团面试题',
  themeConfig: {
    logo: '/images/logo.png',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '大纲',
        link: '/overview.md',
      },
      {
        text: '面试八股文',
        children: [
          '/category/Html.md',
          '/category/Vue.md',
        ],
      },
      {
        text: '大厂面试题',
        children: [
          '/company/alibaba.md',
          '/company/tencent.md',
        ],
      },
      {
        text: '加群讨论',
        link: '/organization.md',
      },
      {
        text: 'Github',
        link: 'https://github.com/chinaBerg/fe-interview-questions',
      },
    ],
  },
}