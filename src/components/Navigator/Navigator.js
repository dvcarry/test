import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigator.css'

export const Navigator = () => {
    return (
        <div className='center'>
            <NavLink to='/i' className='btn'>
                Кнопка I по разделу из Граждаского кодекса РФ
            </NavLink>

            <NavLink to='/kp' className='btn'>
                Карточка поиска с запросом "место преступления"
            </NavLink>
        </div>
    )
}