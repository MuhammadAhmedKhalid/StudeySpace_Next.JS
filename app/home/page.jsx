'use client';

import React, { useState } from 'react'
import '../../styles/home.css'
import JoinCreateClassBttn from '@components/JoinCreateClassBttn';

function Home() {

    const [classes, setClasses] = useState([]);

    return (
        <> 
            {
                classes.length === 0 ?
                <div className='x-axis'>
                    <div className='container'>
                        <h1 className='bg heading'>No classes joined yet.</h1>
                    </div>
                    <JoinCreateClassBttn/>
                </div>
                :
                <div className='x-axis'>
                    <div className='container'>
                        <h1 className='bg heading'>Classes list</h1>
                    </div>
                    <JoinCreateClassBttn/>
                </div>
            }
        </>
    )
}

export default Home