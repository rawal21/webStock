import React from 'react';

function RightSection({imgaeUrl , productName , productDescription , leanMore}) {
  return ( 
   <>
     <div className="container ">
      <div className="row p-2">
      
        <div className="col-6 p-5 mt-5">
          <h1 className='pt-5'>{productName}</h1>
          <p  className='fs-5 text-muted pt-2'>{productDescription} </p>
          <div>
          <a href={leanMore} style={{textDecoration:"none"}}>LearnMore <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          </div>
          <div className="col-6">
          <img src={imgaeUrl} alt="" />
        </div>
          </div>
          </div>
   </>
   );
}

export default RightSection;