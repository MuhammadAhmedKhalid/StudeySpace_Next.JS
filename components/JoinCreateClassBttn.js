import React from 'react'
import '../styles/home.css'
import GroupAddIcon from '@mui/icons-material/GroupAdd';

function JoinCreateClassBttn({ joinCreateBttn, setJoinCreateBttn }) {

  const handleClick = () => {
    setJoinCreateBttn(true)
  }

  return (
    <button className='bttn' style={{backgroundColor: 'faf9f7'}} onClick={handleClick}>
        <GroupAddIcon style={{height: '20px', width: '20px', marginRight: '7.5px'}}/>
        Join or create class
    </button>
  )
}

export default JoinCreateClassBttn