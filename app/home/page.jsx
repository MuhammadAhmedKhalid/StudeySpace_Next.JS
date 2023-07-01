'use client';

import React, { useState } from 'react'
import '../../styles/home.css'
import JoinCreateClassBttn from '@components/JoinCreateClassBttn';
import ClassBoxTemplate from '@components/ClassBoxTemplate';
import JoinCreateClass from '@components/JoinCreateClass';

function Home() {

    const [classes, setClasses] = useState([
        {name: 'ISA'}, 
        {name: 'PP'},
        {name: 'Data Warehouse'},
    ]);

    const [joinCreateBttn, setJoinCreateBttn] = useState(false)

    return (
        <> 
            {
                !joinCreateBttn && 
                <div className='x-axis'>
                    <div className='container'>
                        <h1 className='bg heading'>{classes.length === 0 ? "No classes joined yet.":"Your classes"}</h1>
                        {classes.length !== 0 && <ClassBoxTemplate classes={classes}/>}
                    </div>
                    <JoinCreateClassBttn joinCreateBttn={joinCreateBttn} setJoinCreateBttn={setJoinCreateBttn}/>
                </div>
            }
            {joinCreateBttn && <JoinCreateClass setJoinCreateBttn={setJoinCreateBttn}/>}
        </>
    )
}

export default Home