import React from 'react'
import '../styles/home.css'

function ClassBoxTemplate({classes, setShowClassDetails, setInfo}) {

    const showDeatils = (details) => {
        setShowClassDetails(true);
        setInfo(details);
        console.log(details)
    }

    return (
        <div className='bg box x-axis boundary'>
            {
                classes.map((item, index) => (
                    <div className="square-box" key={index} onClick={()=>showDeatils(item)}>
                        <div className="nested-box">
                            <p className='nested-box-content'>
                            {
                                item.name.split(" ").length > 1 ?
                                item.name.split(" ").slice(0, 1)[0][0] + 
                                item.name.split(" ").slice(1, 2)[0][0]
                                :
                                item.name[0] + item.name[1]
                            }
                            </p>
                        </div>
                        <h2>{item.name}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default ClassBoxTemplate