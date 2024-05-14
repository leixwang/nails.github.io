import { withMermaid } from "vitepress-plugin-mermaid";
import mathjax3 from 'markdown-it-mathjax3';

const customElements = [
  'mjx-container',
  'mjx-assistive-mml',
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
];

export default withMermaid({
  // your existing vitepress config...
  title: 'FTA nails',
  description: 'FTA Nails 工作文档',
	lastUpdated: true,
	markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-light',
    },
		lineNumbers: true,
    config: (md) => {
      md.use(mathjax3);
    },
	},
	themeConfig: {
		sidebar: [
      {
        text: '工作文档',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '整体架构', link: '/nails/' },
          { text: '电商平台', link: '/nails/shop' },
          { text: '广告平台', link: '/nails/ad' },
          { text: '快递物流', link: '/nails/express' },
          { text: '常用工具', link: '/nails/tools' },
        ]
      },
    ],
		
		footer: {
			license: {
				text: 'MIT License',
				link: 'https://opensource.org/licenses/MIT'
			},
			copyright: `Copyright © 2022-${new Date().getFullYear()} Richard Wang`
		},
		lastUpdatedText: 'Updated Date',
		docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    }
	},
  mermaid: {

  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
});
