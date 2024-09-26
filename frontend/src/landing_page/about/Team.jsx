import React from 'react';

function Team() {
  return ( <>
     <div className="container mt-5">
      <div className="row p-5">
      <h1 className='text-center'>People</h1>
        <div className="col-6 ps-4 text-center ">
         <img src="/media/images/nithinKamath.jpg" alt="" style={{borderRadius : "100%" , width : "50%"}} className='mx-auto' />
         
          <h5  >Nithin Kamath</h5>
          <p  >Founder & CEO</p>

        </div>
        <div className="col-6 p-5">
            <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            </p>

            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            Playing basketball is his zen.
            
        </div>
      </div>
     </div>
  </>  );
}

export default Team;