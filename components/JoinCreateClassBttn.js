import React from 'react'
import '../styles/home.css'
import GroupAddIcon from '@mui/icons-material/GroupAdd';

function JoinCreateClassBttn({ setJoinCreateBttn }) {

  const handleClick = () => {
    setJoinCreateBttn(true)
  }

  return (
    <button 
        className='bttn' 
        style={{backgroundColor: 'faf9f7', marginTop: '80px', marginRight: '25px'}} 
        onClick={handleClick}
      >
        <GroupAddIcon style={{height: '20px', width: '20px', marginRight: '7.5px'}}/>
        Join or create class
    </button>
  )
}

export default JoinCreateClassBttn