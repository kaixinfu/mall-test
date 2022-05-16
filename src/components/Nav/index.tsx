import React, { useEffect } from 'react';
import { Badge, TabBar } from 'antd-mobile';
import { history } from 'umi';
interface BasicLayoutProps {
  pathname: string;
}

const menus = [
  {
    title: '首页',
    link: '/',
    icon: 'shouye',
  },
  {
    title: '购物车',
    link: '/cart',
    icon: 'gouwuche',
  },
  {
    title: '订单列表',
    link: '/orders',
    icon: 'dingdanliebiao',
  },
  {
    title: '我的',
    link: '/user',
    icon: 'wode',
  },
];

const Nav: React.FC<BasicLayoutProps> = ({ pathname }) => {
  return (
    <TabBar tintColor="#00b38a">
      {menus.map((item) => (
        <TabBar.Item
          key={item.title}
          title={item.title}
          onPress={() => history.push(item.link)}
          selected={pathname === item.link}
          icon={<i className={'iconfont icon-' + item.icon} />}
          selectedIcon={<i className={'lagou iconfont icon-' + item.icon} />}
        />
      ))}
    </TabBar>
  );
};

export default Nav;
