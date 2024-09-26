import React from 'react';

function Awards () {
  return ( 
    <>
    <div className='container p-5 mt-5'>
      <div className="row">
        <div className="col-6 p-5">
      <img src="/media/images/largestBroker.svg" alt="" />
        </div>
        <div className="col-6 p-5">
        <h1>Largest stock Broker in india</h1>
        <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in</p>
        <div className="row">
          <div className="col-6 ">
            <ul>
              <li>
                <p>Futures and opstion</p>
              </li>
              <li>
                <p> Commdity and derivartives</p>
              </li>
              <li>
                <p>Currncy derivartives</p>
              </li>
            </ul>
          </div>
          <div className="col-6">
          <ul>
              <li>
                <p>Stock anD IPO</p>
              </li>
              <li>
                <p>Direct mutaul funds</p>
              </li>
              <li>
                <p>Bonds and Govt. Securities </p>
              </li>
            </ul>
          </div>
          <img src="/media/images/pressLogos.png" alt="" style={{width : "80%"}} />
        </div>
        </div>
      </div>
    </div>
    </>
   );
}

export default Awards ;