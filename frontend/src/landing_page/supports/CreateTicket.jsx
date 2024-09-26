import React from 'react';

function CreateTicket() {
  return ( <>
    <div className="container">
      <div className="row mt-5 mb-5">
          <h1 className='fs-4'>To create a ticket, select a relevant topic</h1>
          <div className="col-4 p-5 ">
        <h4 className='text-muted fs-5'> <i class="fa-solid fa-circle-plus"></i> Account Opening</h4>
        <a href=""  className='' style={{textDecoration : "none"}}>Getting started</a> <br />  <br />
        <a href=""  className='' style={{textDecoration : "none"}}>Online </a> <br /> <br />
        <a href="" className=''  style={{textDecoration : "none"}}>Charges </a> <br /> <br />
        <a href=""  className='' style={{textDecoration : "none"}}>Company, Partnership and HUF </a> <br /> <br />
        <a href=""  className='' style={{textDecoration : "none"}}>Non Resident Indian (NRI) </a> <br /> <br />
      
          </div>
          <div className="col-4 p-5">
          <h4 className='text-muted fs-5'> <i class="fa-regular fa-user"></i>  Your Zerodha Account</h4>
        <a href=""  className='' style={{textDecoration : "none"}}>Login credentials</a> <br />  <br />
        <a href=""  className='' style={{textDecoration : "none"}}>Your Profile </a> <br /> <br />
        <a href="" className=''  style={{textDecoration : "none"}}>Account modification and segment addition </a> <br /> <br />
        <a href=""  className='' style={{textDecoration : "none"}}>CMR & DP ID </a> <br /> <br />
        <a href=""  className='' style={{textDecoration : "none"}}>Nomination </a> <br /> <br />
        <a href=""  className='' style={{textDecoration : "none"}}> Transfer and conversion of shares </a> <br /> <br />
        
          </div>
          <div className="col-4 p-5">
          <h4 className='text-muted'> <i class="fa-solid fa-chart-simple"></i> Trading and Markets  </h4>
        <a href=""  className='' style={{textDecoration : "none"}}>Trading FAQs</a> <br />  <br />
        <a href=""  className='' style={{textDecoration : "none"}}>Kite </a> <br /> <br />
        <a href="" className=''  style={{textDecoration : "none"}}>Margins </a> <br /> <br />
        <a href=""  className='' style={{textDecoration : "none"}}>Product and order types </a> <br /> <br />
        <a href=""  className='' style={{textDecoration : "none"}}> Corporate actions </a> <br /> <br />
        <a href=""  className='' style={{textDecoration : "none"}}> Kite features </a> <br /> <br />
            </div>

            <div className="col-4 p-5">
          <h4 className='text-muted'>  <i class="fa-solid fa-book"></i>  Funds</h4>
        <a href=""  className='' style={{textDecoration : "none"}}>Fund withdrawal
</a> <br />  <br />
        <a href=""  className='' style={{textDecoration : "none"}}>Adding funds </a> <br /> <br />
        <a href="" className=''  style={{textDecoration : "none"}}>Margins </a> <br /> <br />
        <a href=""  className='' style={{textDecoration : "none"}}>Adding bank accounts </a> <br /> <br />
        <a href=""  className='' style={{textDecoration : "none"}}> eMandates </a> <br /> <br />
            </div>

            <div className="col-4 p-5">
          <h4 className='text-muted'> <i class="fa-brands fa-algolia"></i> Console  </h4>
        <a href=""  className='' style={{textDecoration : "none"}}>IPO</a> <br />  <br />
        <a href=""  className='' style={{textDecoration : "none"}}> Portfolio </a> <br /> <br />
        <a href="" className=''  style={{textDecoration : "none"}}> Funds statement </a> <br /> <br />
        <a href=""  className='' style={{textDecoration : "none"}}> Profile </a> <br /> <br />
        <a href=""  className='' style={{textDecoration : "none"}}> Reports </a> <br /> <br />
        <a href=""  className='' style={{textDecoration : "none"}}> Referral program </a> <br /> <br />
       
            </div>

            <div className="col-4 p-5">
          <h4 className='text-muted'> <i class="fa-solid fa-coins"></i> Coin </h4>
        <a href=""   style={{textDecoration : "none"}}>Trading FAQs</a> <br /> 
        <a href=""   style={{textDecoration : "none"}}>Kite </a> <br /> 
        <a href=""   style={{textDecoration : "none"}}>Margins </a> <br /> 
        <a href=""   style={{textDecoration : "none"}}>Product and order types </a> <br /> 
        <a href=""   style={{textDecoration : "none"}}> Corporate actions </a> <br /> 
        <a href=""   style={{textDecoration : "none"}}> Kite features </a> <br /> 
            </div>

      </div>
    </div>
  </> );
}

export default CreateTicket;