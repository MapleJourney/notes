const createNavbar = () => [
	{ text: '首页', link: '/', icon: 'Home' },
	{
		text: '参考',
		icon: 'Document',
		children: [
			{ text: 'Vuepress配置', link: 'https://v2.vuepress.vuejs.org/zh/reference/config.html' },
			{ text: 'theme-reco配置', link: 'https://vuepress-theme-reco.recoluan.com/docs/theme/frontmatter-home.html' }
		]
	},
	{
		text: '关于',
		icon: 'UserMultiple',
		link: '/docs/about'
	}
]

export default createNavbar()