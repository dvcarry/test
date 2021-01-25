import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Filters } from '../Filters/Filters';
import { Menu } from '../Menu/Menu';
import { Result } from '../Result/Result';
import { Search } from '../Search/Search';

import './Main.css'


const TEST_RESULT = {
    heading: 'Постановление правительства Министерства транспорта',
    text: 'Конституционный Суд РФ, в частности, указал, что ограничение свободы передвижения, установленное оспариваемым положением постановления Губернатора Московской области от 12 марта 2020 года N 108-ПГ, действующим во взаимосвязи с общей системой конституционно-правового и соответствующего отраслевого регулирования, обусловлено объективной необходимостью.'
}


export const Main = () => {

    const { pathname } = useLocation();

    const [keys, setKeys] = useState([])
    const [filters, setFilters] = useState(false)

    const addKey = key => {
        const newKeys = [...keys, { text: key }]
        setKeys(newKeys)
    }

    const deleteKey = key => {
        const newKeys = keys.filter(item => item.text !== key)
        setKeys(newKeys)
    }

    const deleteLastKey = () => {
        const newKeys = keys.slice(0, -1)
        setKeys(newKeys)
    }

    useEffect(() => {
        if (pathname === '/i') {
            setKeys([{ text: 'раздел i', placeholder: 'Гражданский кодекс РФ || Раздел 1. Основы' }])
        } else if (pathname === '/kp') {
            setKeys([{ text: 'место преступления' }])
        }
    }, [pathname])



    return (
        <div className="App">
            <div className='leftsidebar'>
                <Menu />
            </div>
            <div className='worksection'>
                <div className='upsidebar'>
                    <Search
                        keys={keys}
                        addKey={addKey}
                        deleteKey={deleteKey}
                        deleteLastKey={deleteLastKey}
                    />
                    {/* <Filters /> */}
                </div>

                <div className='grid_section'>

                    <div className='results'>
                        <div className='results_heading'>
                            <div >Российское законодательство (Версия Проф.)</div>
                            {/* <div className='results_tools'>
                            <div className='results_tool'>П</div>
                            <div className='results_tool'>W</div>
                            <div className='results_tool'>...</div>
                        </div> */}
                            <div className='toggle_filters' onClick={() => setFilters(!filters)}>{`${filters ? 'Скрыть' : 'Показать'} фильтры`}</div>
                        </div>

                        {
                            Array(9).fill().map((item, index) => <Result key={index} heading={TEST_RESULT.heading} text={TEST_RESULT.text} keys={keys} />)
                        }
                    </div>
                    {
                        filters ? <Filters /> : null
                    }
                    

                </div>
            </div>
        </div>
    );
}