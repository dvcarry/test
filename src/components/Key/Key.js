import React from 'react';
import './Key.css'

export const Key = ({ text, placeholder, deleteKey }) => {
    
    let classes = ['key']
    if (placeholder) {
        classes.push('i')
    }
    
    return (
        <div className={classes.join(' ')}>
            <span className='key_text'>{text}</span>            
            <span
                className='delete'
                onClick={deleteKey}
            >
                &#215;
            </span>
            {
                placeholder ? <div className='text'>{placeholder}</div> : null
            }
            
        </div>

    )
}