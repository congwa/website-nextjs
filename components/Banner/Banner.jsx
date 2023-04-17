

import { bannerListReq } from '@/services/index';
import BannerClient from './BannerClient';
const Banner = async () => {
  const bannerList = await bannerListReq()
  
  return <>
    <BannerClient list={bannerList}></BannerClient>
  </>
}
export default Banner