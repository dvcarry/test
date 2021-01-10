import React from 'react';
import './Result.css'

const random = number => Math.floor(Math.random() * (number) + 1)

export const Result = ({ heading, text, keys }) => {

    let newText = text

    if (keys.length > 0) {
        newText = keys.map((item, index) => {
            
            const randonPlace = random(text.length)
            
            let classes = ['result_key']
            if (item.placeholder) {
                classes.push('ikey')
            }

            return (
                <span key={index}>
                    <span>{text.substr(0, randonPlace)}</span>
                    <span className={classes.join(' ')}>{' ' + item.text + ' '}</span>
                    <span>{text.substr(randonPlace)}</span>
                </span>
            )
        })
    }

    // const newText = keys.map(item => {
    //     const randonPlace = random(text.length)
    //     let classes = ['result_key']
    //     if (item.placeholder) {
    //         classes.push('ikey')
    //     }
    //     return (
    //         <>
    //             <span>{text.substr(0, randonPlace)}</span>
    //             <span className={classes.join(' ')}>{' ' + item.text + ' '}</span>
    //             <span>{text.substr(randonPlace)}</span>
    //         </>
    //     )
    // })

    return (
        <div className='result'>            
            <div className='result_heading'>{heading}</div>
            <div className='result_subheading'>Федеральный закон от 15.10.2020</div>
            <div className='result_text'>
                {newText}
            </div>
        </div>
    )
}