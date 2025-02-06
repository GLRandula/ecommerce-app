import { getBannersData } from '@/app/lib/getData';
import React from 'react'
import Container from './Container';

const Banner = async () => {

  const banners = await getBannersData();
  console.log(banners);

  return (
    <div>
      <Container>
        Banner
      </Container>
    </div>
  )
}

export default Banner
