import React from 'react';

function Hero() {
  return ( <>
    <div className="container mt-5">
  
   <div className="row mb-5 p-5 border-bottom">
   <h1 className='text-center'>Charges</h1>
        <p className='text-small text-muted  text-center mt-2'>List of all charges and taxes</p>
   </div>
   

      <div className="row text-center mt-5">
        <div className="col-4 p-5 ">
      <img src="/media/images/pricing0.svg" alt=""   style={{width : "45%"}}/>
      <h1 className='fs-4'>Free equity delivery</h1>
      <p className='text-small text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 p-5">
         <img src="/media/images/intradayTrades.svg" alt="" style={{width : "45%"}} />
         <h1 className='fs-4'>Intraday and F&O trades</h1>
         <p className='text-small text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 p-5">
      <img src="/media/images/pricing0.svg" alt="" style={{width : "45%"}} />
      <h1  className='fs-4'>Free direct MF</h1>
      <p className='text-small text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
      <h1></h1>
        </div>
      </div>
    </div>
  </> );
}

export default Hero;