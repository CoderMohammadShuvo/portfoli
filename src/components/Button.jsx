import React from 'react'

const Button = ({name, isBeam=false, containerClass}) => {
    return (
        <div className={`btn $${containerClass}`}>
            {isBeam &&  (
                <span className="relative flex h-3 w-3">
                    <span className='btn-ping'></span>
                    <span className='bts-ping_dot'></span>
                </span>
            )}
            {name}</div>
    )
}
export default Button
