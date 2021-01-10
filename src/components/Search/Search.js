import React, { useState } from 'react';
import { Filters } from '../Filters/Filters';
import { Key } from '../Key/Key';
import './Search.css'

export const Search = ({ keys, addKey, deleteKey }) => {

    const [text, setText] = useState('')

    const clickHandler = e => {
        console.log('click', e.type)
        if (e.keyCode === 13 || e.type === 'click') {
            if (text.length > 0) {
                addKey(text)
                setText('')
            }
        }

    }

    return (
        <div className='search'>
            <div className='search_div'>
                {
                    keys.map(key => (
                        <Key
                            key={key.text}
                            text={key.text}
                            placeholder={key.placeholder}
                            deleteKey={() => deleteKey(key.text)}
                        />
                    ))
                }
                <input
                    className='search_input'
                    value={text}
                    onChange={e => setText(e.target.value)}
                    onKeyDown={clickHandler}
                />
            </div>
            <button
                className='button'
                onClick={clickHandler}
            >
                Найти
            </button>
            <Filters />
        </div>
    )
}