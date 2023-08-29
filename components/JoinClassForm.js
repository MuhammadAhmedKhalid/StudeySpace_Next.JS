import React, { useState } from 'react'

function JoinClassForm({setJoinModal, setJoinModalContent}) {

    const [codeValue, setCodeValue] = useState('');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const handleCodeChange = (e) => {
        setCodeValue(e.target.value)
        setIsButtonEnabled(e.target.value !== '')
    }

    const handleJoinClass = () => {
        if(codeValue === '123'){
            setJoinModal(true);
            setJoinModalContent("Class has been joined successfully.")
            setCodeValue('');
        } else {
            setJoinModal(true);
            setJoinModalContent("Couldn't join this class with that code. Double-check the code or try another one.")
        }
    }

    return (
        <div className='y-axis'>
            <input
                type='text'
                value={codeValue}
                onChange={handleCodeChange}
                className='code-input' 
                placeholder='Enter code'/>
            <button
                disabled={!isButtonEnabled}
                className='bttn' 
                style={{width: '100px', fontSize: '10px', 
                    height: '25px', marginTop: '10px'}}
                onClick={handleJoinClass}
                >
                    Join class
            </button>
        </div>
    )
}

export default JoinClassForm