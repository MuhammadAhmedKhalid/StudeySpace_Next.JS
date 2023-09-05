'use client';

import React, { useState, useEffect, useRef } from 'react'
import '../../styles/home.css'
import JoinCreateClassBttn from '@components/JoinCreateClassBttn';
import ClassBoxTemplate from '@components/ClassBoxTemplate';
import JoinCreateClass from '@components/JoinCreateClass';
import ClassRectangleTemplate from '@components/ClassRectangleTemplate';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AnimatedBlock from '@components/AnimatedBlock';
import JoinClass from '@modals/JoinClass';
import CreatClassForm from '@modals/CreatClassForm';
import ClassCode from '@modals/ClassCode';
import ClassDetials from '@components/ClassDetials';

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
    const [createModalOpen, setCreateModal] = useState(false);
    const [codeModalOpen, setCodeModal] = useState(false);
    const [classDetails, setShowClassDetails] = useState(false);
    const [classInfo, setInfo] = useState();

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
                            <h1 className='bg heading'>{!classDetails&&(classes.length === 0 ? "No classes joined yet.":"Your classes")}</h1>
                            {
                                classes.length !== 0 && 
                                !classDetails ? 
                                (!isMobile ? 
                                <ClassBoxTemplate classes={classes} setShowClassDetails={setShowClassDetails} setInfo={setInfo}/> : 
                                <ClassRectangleTemplate classes={classes} setShowClassDetails={setShowClassDetails} setInfo={setInfo}/>) :
                                <ClassDetials classInfo={classInfo} setShowClassDetails={setShowClassDetails}/>
                            }
                        </div>
                        {
                            !classDetails &&
                            (!isMobile ? <JoinCreateClassBttn setJoinCreateBttn={setJoinCreateBttn}/>
                            : 
                            <div className='icon-style' onClick={handleClick}>
                                <MoreVertIcon/>
                            </div>)
                        }
                    </div>
                </div>
            }
            {joinCreateBttn && <JoinCreateClass setJoinCreateBttn={setJoinCreateBttn} setJoinModal={setJoinModal} 
                setJoinModalContent={setJoinModalContent} setCreateModal={setCreateModal}/>}
            {isBlockVisible && <AnimatedBlock isBlockVisible={isBlockVisible} blockRef={blockRef} setCreateModal={setCreateModal}
                setJoinModal={setJoinModal} setJoinModalContent={setJoinModalContent}/>}
            {joinModalOpen && <JoinClass joinModalOpen={joinModalOpen} joinModalContent={joinModalContent} setJoinModal={setJoinModal}/>}
            {createModalOpen && <CreatClassForm createModalOpen={createModalOpen} setCreateModal={setCreateModal} setCodeModal={setCodeModal}/>}
            {codeModalOpen && <ClassCode codeModalOpen={codeModalOpen} setCodeModal={setCodeModal}/>}
        </>
    )
}

export default Home