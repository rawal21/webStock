import React from 'react';

function Brockrage() {
  return ( <>
    <div className="container">
      <div className="row">
        <h1 className='mb-3 fs-4'>Charges explained</h1>
        <div className="col-6">
          <h3 className='fs-6 text-muted'>Securities/Commodities transaction tax</h3>
          <p className='text-muted text-small' style={{fontSize :"14px"}}>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.

When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
  <br />
  <h3 className='fs-6 text-muted'>Transaction/Turnover Charges</h3>
          <p className='text-muted text-small' style={{fontSize :"14px"}}>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.

BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017) 

BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>

<br />

<h3 className='fs-6 text-muted'>Call & trade</h3>
          <p className='text-muted text-small' style={{fontSize :"14px"}}>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>

<br />
<h3 className='fs-6 text-muted'>Stamp charges</h3>
          <p className='text-muted text-small' style={{fontSize :"14px"}}>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
        </div>
        <div className="col-6">
        <h3 className='fs-6 text-muted'>GST</h3>
          <p className='text-muted text-small' style={{fontSize :"14px"}}>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
           
          <h3 className='fs-6 text-muted'>SEBI Charges</h3>
          <p className='text-muted text-small' style={{fontSize :"14px"}}>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>

          <h3 className='fs-6 text-muted'>DP (Depository participant) charges</h3>
          <p className='text-muted text-small' style={{fontSize :"14px"}}>₹13 + GST per scrip (irrespective of quantity), on the day, is debited from the trading account when stocks are sold. This is charged by the depository (CDSL) and depository participant (Zerodha).</p>
            
          <h3 className='fs-6 text-muted'>AMC (Account maintenance charges)</h3>
          <p className='text-muted text-small' style={{fontSize :"14px"}}>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here</p>

          <h3 className='fs-6 text-muted'>Corporate action order charges</h3>
          <p className='text-muted text-small' style={{fontSize :"14px"}}>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
        </div>
      </div>
    </div>
  </> );
}

export default Brockrage;