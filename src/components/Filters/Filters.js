import React, { useState } from 'react';
import { Filter } from './Filter';
import './Filters.css'


const filters = ['Название документа','Номер документа','Принявший орган','Вид документа','Тематика','Судья', 'ИНН', 'Когда получен', 'Судебные акты', 'Категория судебного спора']


export const Filters = () => {

    return (
        <div className='filters'>
            
            <div className='filters_heading'>
                <h3>Фильтры</h3>
            </div>
            {
                filters.map(item => <Filter key={item} name={item} />)
            }

        </div>
    )
}