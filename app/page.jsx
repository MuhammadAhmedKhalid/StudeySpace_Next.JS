'use client';

import { useRouter } from 'next/navigation';
import '../styles/home.css'

export default function Home() {

    const router = useRouter();

    return (
        <div className='container'>
            <div className='left-portion y-axis'>
                <h1 className='blue-color' style={{marginBottom: '10px', marginTop: '20px'}}>STUDY SPACE</h1>
                <p className='blue-color p-alignment'>
                    Streamline education with our interactive platform for teachers and students.
                    Connect, collaborate, and learn with ease through our web application that empowers teachers
                    to create virtual classrooms, assign quizzes, and share assignments while enabling students to join,
                    attempt quizzes, and submit assignments seamlessly.
                </p>
                {/* <p className='blue-color'>Connect, collaborate, and learn with ease through our web application that empowers teachers</p>
                <p className='blue-color'>to create virtual classrooms, assign quizzes, and share assignments while enabling students to join,</p>
                <p className='blue-color'>attempt quizzes, and submit assignments seamlessly.</p> */}
                <button className='rounded-button' onClick={() => router.push('/contact-us')} style={{marginTop: '20px'}}>
                    Contact Us
                </button>
            </div>
            <div className='square right-portion'>
                <img alt='home_bg' src='/images/home_bg.png' />
            </div>
        </div>
    )
}