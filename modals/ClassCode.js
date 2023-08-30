import React, { useState, useRef, useEffect } from 'react'
import Modal from 'react-modal';

function ClassCode({codeModalOpen, setCodeModal}) {

    const [showOverlay, setShowOverlay] = useState(false);

    const textRef = useRef(null);

    useEffect(() => {
        if (showOverlay) {
          const timeout = setTimeout(() => {
            setShowOverlay(false);
          }, 2000);
    
          return () => {
            clearTimeout(timeout);
          };
        }
    }, [showOverlay]);

    const handleCodeCloseModal = () => {
        setCodeModal(false);
    }

    const handleCopy = () => {
        setShowOverlay(true);
    };

    const copyText = () => {
        if (textRef.current) {
            const text = textRef.current.innerText;
            navigator.clipboard.writeText(text);
        }
    }

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
        <div>
            <Modal
                ariaHideApp={false}
                isOpen={codeModalOpen}
                onRequestClose={handleCodeCloseModal}
                style={customStyles}
            >
                <p style={{color: 'black'}}>
                    Your class has been successfully created.<br/>
                    To invite students to join this class, please share the following code with them:<br/>
                    <div className='contain' onClick={handleCopy}>
                        Class Code: <a ref={textRef} onClick={copyText} className='code-link'>#123abc</a><br/>
                        {
                            showOverlay && 
                                <div className="overlay">
                                    Copied
                                </div>}
                    </div>
                    Students can use this code to join your class.
                </p>
                <button 
                    className='bttn' 
                    onClick={handleCodeCloseModal} 
                    style={{width: '75px', fontSize: '14px', 
                            height: '35px', marginTop: '10px'}}
                    >
                        Ok
                </button>
            </Modal>
        </div>
    )
}

export default ClassCode