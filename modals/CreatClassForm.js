import React, { useState } from 'react'
import Modal from 'react-modal';

function CreatClassForm({createModalOpen, setCreateModal, setCodeModal}) {

  const [formData, setFormData] = useState({
      className: '',
      classDesc: ''
  });

  const { className, classDesc } = formData;

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleCreateCloseModal = () => {
      setCreateModal(false);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      handleCreateCloseModal()
      setCodeModal(true)
      console.log(formData);
      setFormData({className: '', classDesc: ''})
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
          isOpen={createModalOpen}
          onRequestClose={handleCreateCloseModal}
          style={customStyles}
      >
          <h2 style={{fontWeight: 'bold', marginBottom: '25px'}}>Create your class</h2>
          <form onSubmit={handleSubmit}>
              <input 
                  autoFocus
                  required 
                  className='input' 
                  placeholder='Class name'
                  value={className}
                  onChange={handleChange}
                  name="className"
              />
              <textarea 
                  rows='4'
                  required 
                  className='input' 
                  placeholder='Description'
                  value={classDesc}
                  onChange={handleChange}
                  name="classDesc"
              />
              <button 
                  type='submit'
                  className='bttn' 
                  style={{width: '75px', fontSize: '14px', 
                          height: '35px', marginTop: '10px'}}
                  >
                      Ok
              </button>
          </form>
      </Modal>
    </div>
  )
}

export default CreatClassForm