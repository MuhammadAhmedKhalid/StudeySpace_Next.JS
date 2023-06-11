'use client';

import { useRouter } from 'next/navigation';
import '../styles/home.css'

export default function Home() {

    const router = useRouter();

    return (
        <div className='bg'>
            <div className='center'>
            <h1>Study Space</h1>
            <p>Streamline education with our interactive platform for teachers and students, 
                enabling effortless classroom management, online quizzes, and assignment submissions.</p>
            <button className='rounded-button' onClick={() => router.push('/contact-us')}>
                Contact Us
            </button>
            </div>
        </div>
    )
}