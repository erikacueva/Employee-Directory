import React from 'react'

const Button = ({color, text, onClick}) => {
    return (
        <button style={{backgroundColor: color}} className='btn'>Add</button>
    )
}

Button.defaultProps = {
    color: 'blue',
}

// Button.propTypes = {
//     onClick: propTypes.func,
// }

export default Button
