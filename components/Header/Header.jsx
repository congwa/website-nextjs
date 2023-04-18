import React, { Suspense } from "react";

import HeaderClient from './HeaderClient';
import { menuListReq } from '@/services/index';
const Header = async () => {
  const menu = await menuListReq()
  return <><HeaderClient menu={menu}></HeaderClient></>
};

export default Header;
