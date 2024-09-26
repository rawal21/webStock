import React from 'react';

function Hero() {
  return ( <>
    <div className="container text-center mt-5 p-5 border-bottom " >
       <h1>Technology</h1>
       <h4 className='text-muted fs-5 mt-3'>Sleek, modern, and intuitive trading platforms</h4>
       <p className='mt-3'>Check out our   <a href=""  style={{textDecoration : "none"}}> investment offerings <i class="fa-solid fa-arrow-right"></i> </a></p>
    </div>
  </> );
}

export default Hero;