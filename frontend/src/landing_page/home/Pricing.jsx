import React from 'react';

function Pricing() {
  return ( <>
   <div className="container mb-5">
    <div className="row">
      <div className="col-4">
        <h1 className='mb-3'>Unbeatable pricing</h1>
        <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
        <a href=""  style={{textDecoration : "none"}}>See price <i class="fa-solid fa-arrow-right"></i> </a>
      </div>
      <div className="col-2"></div>
      <div className="col-6">
        <div className="row text-center">
          <div className="col border p-2 ">
            <h1>$0</h1>
            <p>free equity deliver <br /> and mucual funds</p>
          </div>
          <div className="col border p-2">
            <h1>$20</h1>
            <p>intraday and F&Q</p>
          </div>
        </div>
      </div>
    </div>
   </div>
  </>  );
}

export default Pricing ;