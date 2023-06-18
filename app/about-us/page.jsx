'use client';

import AboutContent from "@components/AboutContent";

function AboutUs() {

  const isMobile = window.innerWidth <= 768;
  
  return (
    <>
      {
        isMobile ?
        <div className="container y-axis" style={{marginTop: '25px'}}>
          <AboutContent/>
        </div>
        :
        <div className="container">
          <div className="left-portion y-axis">
            <AboutContent/>
          </div>
          <div className='square right-portion y-axis'>
            <img alt='fb_icon' src='/images/about_bg.png' style={{marginBottom: '30px'}}/>
            <p>Empowering teachers with innovative tools to enhance student</p>
            <p style={{marginBottom: '40px'}}>success and educational outcomes.</p>
          </div>
        </div>
      }
    </>
  )
}

export default AboutUs