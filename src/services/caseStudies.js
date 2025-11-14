import azureLogo from '../assets/logo/azure-svgrepo-com.svg';
import suseLogo from '../assets/logo/suse-svgrepo-com.svg';
import jomooLogo from '../assets/logo/JOMOO-BXegpgze.png';
import bamaLogo from '../assets/logo/BAMA_TEA-GpeuIlCr.png';
import igarashiLogo from '../assets/logo/igarashi.png';

const list = [
  { id: 'azure', title: 'Azure 云协作案例', logo: azureLogo },
  { id: 'suse', title: 'SUSE 运维优化案例', logo: suseLogo },
  { id: 'jomoo', title: 'JOMOO 制造升级案例', logo: jomooLogo },
  { id: 'bama', title: 'BAMA 茶叶零售案例', logo: bamaLogo },
  { id: 'igarashi', title: '五十岚供应链案例', logo: igarashiLogo },
];

export function getCaseStudies() {
  return list;
}

export function getCaseStudyById(id) {
  const base = {
    background: '客户在数字化过程中面临数据整合与协同问题。',
    solution: '采用语义搜索与知识图谱实现跨系统协同。',
    outcome: '检索效率提升 60%，一线人员学习成本下降。',
  };
  const item = list.find(i => i.id === id);
  if (!item) return null;
  return { ...item, ...base };
}