import React from 'react'
import '../styles/ainmated-block.css'

function AnimatedBlock({isBlockVisible, blockRef}) {
    return (
        <div
            className={`animated-block ${isBlockVisible ? 'show' : ''}`}
            ref={blockRef}
        />
    )
}

export default AnimatedBlock