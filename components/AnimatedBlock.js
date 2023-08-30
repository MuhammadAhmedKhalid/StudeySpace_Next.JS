import React, { useState } from 'react'
import '../styles/ainmated-block.css'
import AddIcon from '@mui/icons-material/Add';
import { BiHash } from 'react-icons/bi';
import JoinClassForm from './JoinClassForm';

function AnimatedBlock({isBlockVisible, blockRef, setCreateModal, setJoinModal, setJoinModalContent}) {

    const [joinModal, setJoin] = useState(false)

    const handleCreateClass = () => {
        setCreateModal(true)
    }

    return (
        <>
            <div
                className={`animated-block ${isBlockVisible ? 'show' : ''}`}
                ref={blockRef}
            >
                <div className='row' onClick={handleCreateClass}>
                    <AddIcon className='row-icon'/>
                    <h2 className='row-text'>Create a class</h2>
                </div>
                <div className='y-axis row' onClick={()=>setJoin(true)}>
                    <div style={{display: 'flex'}}>
                        <BiHash size={21} color='#c72e2e' style={{marginRight: '10px'}}/>
                        <h2 className='row-text'>Join a class with a code</h2>
                    </div>
                    <JoinClassForm setJoinModal={setJoinModal} setJoinModalContent={setJoinModalContent}/>
                </div>
            </div>
        </>
    )
}

export default AnimatedBlock