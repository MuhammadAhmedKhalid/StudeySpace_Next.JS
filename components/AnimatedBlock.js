import React from 'react'
import '../styles/ainmated-block.css'
import AddIcon from '@mui/icons-material/Add';
import { BiHash } from 'react-icons/bi';

function AnimatedBlock({isBlockVisible, blockRef}) {
    return (
        <div
            className={`animated-block ${isBlockVisible ? 'show' : ''}`}
            ref={blockRef}
        >
            <div className='row'>
                <AddIcon className='row-icon'/>
                <h2 className='row-text'>Create new class</h2>
            </div>
            <div className='row'>
                <BiHash size={21} color='#c72e2e' style={{marginRight: '10px'}}/>
                <h2 className='row-text'>Join a class with a code</h2>
            </div>
        </div>
    )
}

export default AnimatedBlock