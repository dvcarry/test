import React from 'react';
import './Menu.css'


const MENU = ['Законодательство', "Судебная практика", "Финансовые консультации", "Комментарии законодательства", "Правовые акты"]

export const Menu = () => {
    return (
        <div className='menu'>
            {
                MENU.map((item, index) => {
                    return (
                        <div className='menu_item' key={item}>
                            + {item} <span className='menu_item_number'>{(index + 3) * 23}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}