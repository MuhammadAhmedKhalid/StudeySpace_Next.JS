import React from 'react'

function JoinCreateClass({  setJoinCreateBttn }) {

    const handleClick = () => {
        setJoinCreateBttn(false)
    }

    return (
        <div className='x-axis'>
            <div className='container'>
                <button className='bg heading' style={{color: 'black', fontSize: '10px'}} onClick={handleClick}>{"< "}Back</button>
                <h1 className='bg heading' style={{marginTop: '110px'}}>Join or create class</h1>
            </div>
        </div>
    )
}

export default JoinCreateClass