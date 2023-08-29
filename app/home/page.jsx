'use client';

import React, { useState, useEffect, useRef } from 'react'
import '../../styles/home.css'
import JoinCreateClassBttn from '@components/JoinCreateClassBttn';
import ClassBoxTemplate from '@components/ClassBoxTemplate';
import JoinCreateClass from '@components/JoinCreateClass';
import ClassRectangleTemplate from '@components/ClassRectangleTemplate';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AnimatedBlock from '@components/AnimatedBlock';

function Home() {

    const isMobile = window.innerWidth <= 768;

    const [classes, setClasses] = useState([
        {name: 'ISA'}, 
        {name: 'PP'},
        {name: 'Data Warehouse'},
    ]);

    const [joinCreateBttn, setJoinCreateBttn] = useState(false)
    const [isBlockVisible, setBlockVisible] = useState(false);
    const [isBlurred, setIsBlurred] = useState(false);
    const [joinModalOpen, setJoinModal] = useState(false);
    const [joinModalContent, setJoinModalContent] = useState('');

    const blockRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (blockRef.current && !blockRef.current.contains(event.target)) {
            setBlockVisible(false);
            setIsBlurred(false)
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    const handleClick = () => {
        setBlockVisible(!isBlockVisible);
        setIsBlurred(true)
    }

    return (
        <> 
            {
                !joinCreateBttn && 
                <div className={`App ${isBlurred ? 'blurred' : ''}`}>
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
                            <div className='icon-style' onClick={handleClick}>
                                <MoreVertIcon/>
                            </div>
                        }
                    </div>
                </div>
            }
            {joinCreateBttn && <JoinCreateClass setJoinCreateBttn={setJoinCreateBttn} setJoinModal={setJoinModal} 
                setJoinModalContent={setJoinModalContent}/>}
            {isBlockVisible && <AnimatedBlock isBlockVisible={isBlockVisible} blockRef={blockRef}/>}
        </>
    )
}

export default Home