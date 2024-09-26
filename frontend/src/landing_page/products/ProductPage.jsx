import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';


function ProductPage() {
  return ( <>
  <Hero/>
  <LeftSection
   imageUrl = "/media/images/kite.png"
   ProductName = "Kite"
    productDescription = "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
     tryDemo = "#"
     learnMore  = "#"
     googlePlay = "#"
     appStore = "#"
  />

<RightSection
 imgaeUrl="/media/images/console.png"
 productName="Console"
 productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
 leanMore="#"

/>
    <LeftSection
   imageUrl = "/media/images/coin.png"
   ProductName = "Coin"
    productDescription = "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices "
     tryDemo = "#"
     learnMore  = "#"
     googlePlay = "#"
     appStore = "#"
  />

<RightSection
 imgaeUrl="/media/images/kiteconnect.png"
 productName="Kite Connect API"
 productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase"
 leanMore="#"

/>
    <LeftSection
   imageUrl = "/media/images/varsity.png"
   ProductName = "Varsity mobile"
    productDescription = "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
     tryDemo = "#"
     learnMore  = "#"
     googlePlay = "#"
     appStore = "#"
  />
  <Universe/>
  </> );
}

export default ProductPage;