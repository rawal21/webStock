import React from 'react';

function LeftSection({ imageUrl, ProductName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
  return (<>
    <div className="container mt-5">
      <div className="row p-2">
        <div className="col-6 p-4 ">
          <img src={imageUrl} alt="" />
        </div>
        <div className="col-6 p-4 ">
          <h1>{ProductName}</h1>
          <p>{productDescription}</p>
          <div>
          <a href={tryDemo} style={{textDecoration:"none"}}>tryDemo <i class="fa-solid fa-arrow-right"></i></a>
          <a href={learnMore} style={{marginLeft : "50px" , textDecoration:"none"}}>learnMore <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className='mt-3'>
          <a href={googlePlay}>
            <img src="/media/images/googlePlayBadge.svg" alt="" />
          </a>
          <a href={appStore}>
            <img src="/media/images/appstoreBadge.svg" alt="" style={{marginLeft:"50px"}} />
          </a>
          </div>
        </div>
      </div>
    </div>
  </>);
}

export default LeftSection;