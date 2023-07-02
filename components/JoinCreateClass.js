'use client';

import React, { useState } from 'react'
import '../styles/home.css'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupsIcon from '@mui/icons-material/Groups';
import Modal from 'react-modal';

function JoinCreateClass({  setJoinCreateBttn }) {

    const [codeValue, setCodeValue] = useState('');
    const [modalContent, setModalContent] = useState('');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setJoinCreateBttn(false)
    }

    const handleCodeChange = (e) => {
        setCodeValue(e.target.value)
        setIsButtonEnabled(e.target.value !== '')
    }

    const handleJoinClass = () => {
        if(codeValue === '123'){
            console.log('success')
            setIsOpen(true);
            setModalContent("Class has been joined successfully.")
        } else {
            console.log('error')
            setIsOpen(true);
            setModalContent("Couldn't join this class with that code. Double-check the code or try another one.")
        }
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const customStyles = {
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        content: {
            background: '#fff',
            padding: '2rem',
            borderRadius: '4px',
            width: 'fit-content',
            margin: 'auto',
            height: 'fit-content', 
          },
      };

    return (
        <>
            <div className='x-axis'>
                <div className='container'>
                    <button className='bg heading' style={{color: 'black', fontSize: '10px'}} onClick={handleClick}>{"< "}Back</button>
                    <h1 className='bg heading' style={{marginTop: '110px'}}>Join or create class</h1>
                </div>
            </div>
            <div className='bg box x-axis boundary' style={{marginTop: '140px'}}>
                <div className="square-box">
                    <div className="nested-box">
                    <p className='nested-box-content'>
                        <GroupsIcon style={{height: '30px', width: '30px'}}/>
                    </p>
                    </div>
                    <h2>Create a class</h2>
                    <button 
                        className='bttn' 
                        style={{width: '120px', fontSize: '12px', 
                            height: '30px', marginTop: '17.5px'}}
                        >
                            <GroupAddIcon style={{height: '16px', width: '16px', marginRight: '7.5px'}}/>
                            Create class
                    </button>
                </div>
                <div className="square-box">
                    <div className="nested-box" style={{height: '50px', width: '50px'}}>
                    <p className='nested-box-content'>
                        <GroupsIcon style={{height: '25px', width: '25px'}}/>
                    </p>
                    </div>
                    <h2 style={{fontSize: '14px'}}>Join a class with a code</h2>
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
            </div>
            <Modal
                isOpen={isOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <p style={{color: 'black'}}>{modalContent}</p>
                <button 
                    className='bttn' 
                    onClick={handleCloseModal} 
                    style={{width: '75px', fontSize: '14px', 
                            height: '35px', marginTop: '10px'}}
                    >
                        Ok
                </button>
            </Modal>
        </>
    )
}

export default JoinCreateClass