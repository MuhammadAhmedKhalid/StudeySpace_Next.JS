'use client';

import React, { useState } from 'react'
import '../../styles/home.css'
import JoinCreateClassBttn from '@components/JoinCreateClassBttn';
import ClassBoxTemplate from '@components/ClassBoxTemplate';

function Home() {

    const [classes, setClasses] = useState([
        {name: 'ISA'}, 
        {name: 'PP'},
        {name: 'Data Warehouse'},
    ]);

    return (
        <> 
            {
                classes.length === 0 ?
                <div className='container'>
                    <div className='x-axis'>
                        <h1 className='bg heading'>No classes joined yet.</h1>
                    </div>
                    <JoinCreateClassBttn/>
                </div>
                :
                <div className='x-axis'>
                    <div className='container'>
                        <h1 className='bg heading'>Your classes</h1>
                        <ClassBoxTemplate classes={classes}/>
                    </div>
                    <JoinCreateClassBttn/>
                </div>
            }
        </>
    )
}

export default Home