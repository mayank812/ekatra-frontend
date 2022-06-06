import React from 'react';
    

const ButtonOutlined = ({ text, width, borderColor, onClick }) => {
    return (
        <button style={{
            minWidth: width,
            height: 55,
            background: '#FFFFFF',
            border: '2px solid',
            borderColor: borderColor,
            fontSize: 18,
            borderRadius: 10,
            cursor: 'pointer'
        }} onClick={onClick} >{text}</button>
    )
}

export default ButtonOutlined;