// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'GET /api/getUserDetail': {
    status: 1,
    id: '001',
    name: '小小c',
    icon: 'https://lagou-zhaopin-fe.lagou.com/fed/lg-app-fed/792/head.jpeg',
    email: 'kaixin@lagou.com',
    signature: 'hello world',
    title: '买买买',
    tags: [
      {
        key: '0',
        label: '买',
      },
      {
        key: '1',
        label: '再买',
      },
      {
        key: '2',
        label: '接着买~',
      },
    ],
    country: 'China',
    address: '立水桥',
    phone: '0110-20220516',
  },
};
