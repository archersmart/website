export default function getProductById(id) {
  const db = {
    1: {
      id: '1',
      name: '智能识别引擎',
      images: [],
      specs: ['多模型并行', '毫秒级响应'],
      features: ['图片识别', '语义搜索'],
    },
    2: {
      id: '2',
      name: '零售数据平台',
      images: [],
      specs: ['万级门店', '实时报表'],
      features: ['数据采集', '可视化'],
    },
  };
  return db[id] || null;
}