import '../../styles/about.css'

function AboutUs() {
  return (
    <>
      <div className='bg-color'>
        <div className="container">
          <div className="left-portion y-axis">
            <h1 className='blue-color'>LET'S LEARN</h1>
            <h1 className='blue-color'>FROM ONLINE</h1>
              <p className='blue-color p-align'>
                Welcome to Study Space! We are passionate about revolutionizing education through innovative technology. 
                Our web application is designed to empower teachers and students by providing a seamless digital learning experience. 
                With our platform, teachers can effortlessly create virtual classrooms, assign quizzes, and share assignments, 
                while students can join these rooms, attempt quizzes, and submit assignments with ease. We believe in the power of collaboration, 
                knowledge sharing, and personalized learning. Our mission is to make education accessible, engaging, and effective for learners 
                of all ages. Join us on this exciting journey of transforming education and unlocking the full potential of every student. 
                Together, let's shape the future of learning!
              </p>
          </div>
          <div className='square right-portion y-axis'>
            <img alt='fb_icon' src='/images/about_bg.png' style={{marginBottom: '30px'}}/>
            <p>Empowering teachers with innovative tools to enhance student</p>
            <p style={{marginBottom: '40px'}}>success and educational outcomes.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs