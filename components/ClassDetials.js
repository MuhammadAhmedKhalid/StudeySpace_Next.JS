import React from 'react'
import '../styles/home.css'
import '../styles/form.css'
import '../styles/create-class.css'

function ClassDetials({classInfo, setShowClassDetails}) {

    const handleClick = () => {
        setShowClassDetails(false)
    }

    return (
        <>
            <div className='x-axis'>
                <div className='container'>
                    <button className='bg heading' style={{color: 'black', fontSize: '10px'}} onClick={handleClick}>{"< "}Back</button>
                </div>
            </div>
        </>
    )
}

export default ClassDetials