import React from 'react';
import SearchInput from './SearchInput/index';
import Carousel from './Carousel/index';
import NavTable from './NavTable/index';
import Arc from '@/components/Arc';
import Recommend from './Recommend';

export default () => {
  return (
    <>
      <SearchInput />
      <Carousel />
      <Arc />
      <NavTable />
      <Recommend />
    </>
  );
};
