import React, { useState } from 'react';
import './AdvancedSearch.css'

export const AdvancedSearch = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='AdvancedSearch'>
            <div
                onClick={() => setOpen(!open)}
            >
                Расширенный поиск	&#9660;
            </div>
            {
                open 
                ? (
                    <div className='filters_items'>
                    <ul>
                        <li>По норме</li>
                        <li>По тематике</li>
                        <li>По дате документа</li>
                        <li>По принявшему органу</li>
                        <li>По номеру</li>
                        <li>По судье</li>
                        <li>По статусу</li>
                    </ul>
                </div>
                )
                : null
            }


        </div>
    )
}