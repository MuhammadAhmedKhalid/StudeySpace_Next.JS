import ContactForm from '@components/ContactForm'

function ContactUs() {
  return (
    <>
      <div className='bg-color'>
        <div className="container">
          <div className="left-portion y-axis">
            <h1 className='blue-color'>CONTACT US</h1>
              <p className='blue-color p-alignment'>
                We value your feedback and are committed to providing excellent support. If you have any questions, suggestions, or need assistance, 
                please don't hesitate to reach out to us. Our dedicated support team is here to help you make the most of our web application. 
                We appreciate your interest in our platform and look forward to assisting you!
              </p>
          </div>
          <div className='right-portion'>
            <ContactForm/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs