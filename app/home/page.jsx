'use client';

import React, { useState } from 'react'
import '../../styles/home.css'

function Home() {

    const [classes, setClasses] = useState([]);

    return (
        <> 
            {
                classes.length === 0 ?
                <div className='container'>
                    <h1 className='bg heading'>No classes joined yet.</h1>
                </div>
                :
                <div className='container'>
                    <h1 className='bg heading'>Classes List</h1>
                </div>
            }
        </>
    )
}

export default Home