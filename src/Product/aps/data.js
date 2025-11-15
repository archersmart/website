import azureLogo from '../assets/logo/azure-svgrepo-com.svg';
import suseLogo from '../assets/logo/suse-svgrepo-com.svg';
import jomooLogo from '../assets/logo/JOMOO-BXegpgze.png';
import bamaLogo from '../assets/logo/BAMA_TEA-GpeuIlCr.png';
import igarashiLogo from '../assets/logo/igarashi.png';

export const header = [
  {
    title: '首页',
    children: [],
  },
  {
    title: '产品',
    children: [
      {
        title: '云凤蝶',
        desc: '移动建站平台',
        img: 'https://gw.alipayobjects.com/zos/rmsportal/fLPzRmwAurHkPDVfHHiQ.svg',
        link: '/products/aps',
        top: '2px',
      },
    ],
  },
  {
    title: '客户案例',
    children: [],
  },
];
export const banner = [
  {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/cTyLQiaRrpzxFAuWwoDQ.svg',
    imgMobile:
      'https://gw.alipayobjects.com/zos/rmsportal/ksMYqrCyhwQNdBKReFIU.svg',
    className: 'seeconf-wrap',
    children: [
      {
        children:
          '释放数据的生产力，一个语义驱动、权限安全的企业知识图谱平台，让企业拥有自己的AI搜索与智能助手。',
        className: 'seeconf-en-name',
      },
      { children: 'ArcherSmart.AI', className: 'seeconf-title', tag: 'h1' },
      { children: '线下零售与智能生产的AI引擎', className: 'seeconf-cn-name' },
      {
        children: '了解详细',
        className: 'banner-button',
        tag: 'button',
        link: 'https://seeconf.alipay.com/',
      },
    ],
  },
];
export const page1 = {
  title: '客户价值与反馈',
  children: [
    {
      title: '搜索效率提升4倍',
      content: '日均查询 14 次，文档查找时间显著缩短。',
      src: 'https://gw.alipayobjects.com/zos/rmsportal/KtRzkMmxBuWCVjPbBgRY.svg',
      color: '#EB2F96',
      shadowColor: 'rgba(166, 55, 112, 0.08)',
      link: 'https://ant.design/docs/spec/values-cn',
    },
    {
      title: '活跃度显著领先',
      content: '月活率达 40%，远超行业平均水平（2-3倍）。',
      src: 'https://gw.alipayobjects.com/zos/rmsportal/qIcZMXoztWjrnxzCNTHv.svg',
      color: '#1890FF',
      shadowColor: 'rgba(15, 93, 166, 0.08)',
      link: 'https://ant.design/docs/spec/colors-cn',
    },
    {
      title: '业务价值可量化',
      content: '提升知识利用率，直接转化为人效提升与收入增长。',
      src: 'https://gw.alipayobjects.com/zos/rmsportal/eLtHtrKjXfabZfRchvVT.svg',
      color: '#AB33F7',
      shadowColor: 'rgba(112, 73, 166, 0.08)',
      link: 'https://antv.alipay.com/zh-cn/vis/index.html',
    },
    {
      title: '准确率高达 98%',
      content: '结合知识图谱与语义搜索，极大提升查询准确率。',
      src: 'https://gw.alipayobjects.com/zos/rmsportal/eLtHtrKjXfabZfRchvVT.svg',
      color: '#AB33F7',
      shadowColor: 'rgba(112, 73, 166, 0.08)',
      link: 'https://antv.alipay.com/zh-cn/vis/index.html',
    },
  ],
};

export const page3 = {
  title: '大家都喜爱的产品',
  children: [
    {
      img: 'https://gw.alipayobjects.com/zos/rmsportal/iVOzVyhyQkQDhRsuyBXC.svg',
      imgMobile: 'https://gw.alipayobjects.com/zos/rmsportal/HxEfljPlykWElfhidpxR.svg',
      src: 'https://gw.alipayobjects.com/os/rmsportal/gCFHQneMNZMMYEdlHxqK.mp4',
    },
    {
      img: 'https://gw.alipayobjects.com/zos/rmsportal/iVOzVyhyQkQDhRsuyBXC.svg',
      imgMobile: 'https://gw.alipayobjects.com/zos/rmsportal/HxEfljPlykWElfhidpxR.svg',
      src: 'https://gw.alipayobjects.com/os/rmsportal/gCFHQneMNZMMYEdlHxqK.mp4',
    },
  ],
};

export const page4 = {
  title: '客户与生态合作伙伴',
  children: [
    azureLogo,
    suseLogo,
    jomooLogo,
    bamaLogo,
    igarashiLogo,
  ],
};

export const footer = [
  {
    title: '蚂蚁科技',
    children: [
      { title: '蚂蚁金服开放平台', link: 'https://open.alipay.com' },
      { title: 'ArcherSmart AI', link: 'https://xcloud.alipay.com' },
      { title: '蚂蚁金融云', link: 'https://www.cloud.alipay.com' },
    ],
  },
  {
    title: '相关会议',
    children: [
      { title: 'ATEC', link: 'https://atec.antfin.com' },
      { title: 'SEE Conf', link: 'https://seeconf.alipay.com' },
    ],
  },
  {
    title: '联系我们',
    children: [
      { title: '蚂蚁金服体验科技专栏', link: 'https://zhuanlan.zhihu.com/xtech' },
      { title: '蚂蚁金服体验科技官微', link: 'https://weibo.com/p/1005056420205486' },
      { title: 'AntV 官微', link: 'https://weibo.com/antv2017' },
      { title: 'Ant Design 专栏', link: 'https://zhuanlan.zhihu.com/antdesign' },
    ],
  },
  {
    title: 'ArcherSmart AI',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/wdarlDDcdCaVoCprCRwB.svg',
    children: [
      { title: 'Ant Design', desc: '蚂蚁 UI 体系', link: 'https://ant.design' },
      { title: 'AntV', desc: '蚂蚁数据可视化方案', link: 'https://antv.alipay.com' },
      // { title: 'AntG', desc: '蚂蚁互动图形技术', link: 'http://antg.alipay.net' },
      { title: 'Egg', desc: '企业级 Node Web 开发框架', link: 'https://eggjs.org' },
      { title: '云凤蝶', desc: '移动建站平台', link: 'https://fengdie.alipay-eco.com/intro' },
    ],
  },
];

// 图处预加载；
if (typeof document !== 'undefined') {
  const div = document.createElement('div');
  div.style.display = 'none';
  document.body.appendChild(div);
  [
    'https://gw.alipayobjects.com/zos/rmsportal/KtRzkMmxBuWCVjPbBgRY.svg',
    'https://gw.alipayobjects.com/zos/rmsportal/qIcZMXoztWjrnxzCNTHv.svg',
    'https://gw.alipayobjects.com/zos/rmsportal/eLtHtrKjXfabZfRchvVT.svg',
    'https://gw.alipayobjects.com/zos/rmsportal/iVOzVyhyQkQDhRsuyBXC.svg',
    'https://gw.alipayobjects.com/zos/rmsportal/HxEfljPlykWElfhidpxR.svg',
    'https://gw.alipayobjects.com/zos/rmsportal/wdarlDDcdCaVoCprCRwB.svg',
  ].concat(page4.children).forEach((src) => {
    const img = new Image();
    img.src = src;
    div.appendChild(img);
  });
}
