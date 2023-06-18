'use client';

import '../styles/landing-page.css'
import { useRouter } from 'next/navigation';

function LandingPageContent() {

    const router = useRouter();

    return (
        <>
            <h1 className='blue-color'>STUDY SPACE</h1>
            <p className='blue-color p-alignment'>
                Streamline education with our interactive platform for teachers and students.
                Connect, collaborate, and learn with ease through our web application that empowers teachers
                to create virtual classrooms, assign quizzes, and share assignments while enabling students to join,
                attempt quizzes, and submit assignments seamlessly.
            </p>
            <button className='rounded-button' onClick={() => router.push('/contact-us')} style={{marginTop: '20px'}}>
                Contact Us
            </button>
        </>
    )
}

export default LandingPageContent