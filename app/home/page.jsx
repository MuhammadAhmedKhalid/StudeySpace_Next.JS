'use client';

import React, { useState } from 'react'
import '../../styles/home.css'
import JoinCreateClassBttn from '@components/JoinCreateClassBttn';
import ClassBoxTemplate from '@components/ClassBoxTemplate';
import JoinCreateClass from '@components/JoinCreateClass';
import ClassRectangleTemplate from '@components/ClassRectangleTemplate';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Home() {

    const isMobile = window.innerWidth <= 768;

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
                        {
                            classes.length !== 0 && 
                            (!isMobile ? <ClassBoxTemplate classes={classes}/> : <ClassRectangleTemplate classes={classes}/>)
                        }
                    </div>
                    {
                        !isMobile ? <JoinCreateClassBttn joinCreateBttn={joinCreateBttn} setJoinCreateBttn={setJoinCreateBttn}/>
                        : 
                        <div className='icon-style'>
                            <MoreVertIcon/>
                        </div>
                    }
                </div>
            }
            {joinCreateBttn && <JoinCreateClass setJoinCreateBttn={setJoinCreateBttn}/>}
        </>
    )
}

export default Home