import React from 'react'
import Modal from 'react-modal';

function JoinClass({joinModalOpen, joinModalContent, setJoinModal}) {

    const handleJoinCloseModal = () => {
        setJoinModal(false);
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
        <Modal
            ariaHideApp={false}
            isOpen={joinModalOpen}
            onRequestClose={handleJoinCloseModal}
            style={customStyles}>
            <p style={{color: 'black'}}>{joinModalContent}</p>
            <button 
                className='bttn' 
                onClick={handleJoinCloseModal} 
                style={{width: '75px', fontSize: '14px', height: '35px', marginTop: '10px'}}>
                Ok
            </button>
        </Modal>
    )
}

export default JoinClass