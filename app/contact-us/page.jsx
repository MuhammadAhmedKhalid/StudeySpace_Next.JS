'use client';

import ContactForm from '@components/ContactForm'
import ContactContent from '@components/ContactContent';

function ContactUs() {

  const isMobile = window.innerWidth <= 768;

  return (
    <>
      {
        isMobile ? 
        <>
          <div className='bg-color container y-axis'>
            <ContactContent/>
          </div>
          <ContactForm/>
        </>
        :
        <div className='bg-color'>
          <div className="container">
            <div className="left-portion y-axis">
              <ContactContent/>
            </div>
            <div className='right-portion'>
              <ContactForm/>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default ContactUs