import React from 'react'
import '../styles/home.css'

function ClassRectangleTemplate({classes}) {

  return (
    <div className='boundary'  
      style={{marginBottom: '225px', marginLeft: '25px'}}>
        {
            classes.map((item, index) => (
              <div className='rectangle-box' key={index}>
                <div className='x-axis' 
                  style={{background: 'white', justifyContent: 'left', marginLeft: '15px'}}>
                  <div className='nested-s-box'>
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
                  <h2 style={{marginLeft: '10px', marginTop: '10px'}}>{item.name}</h2>
                </div>
              </div>
            ))
        }
    </div>
  )
}

export default ClassRectangleTemplate