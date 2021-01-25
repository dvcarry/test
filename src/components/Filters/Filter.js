import React, { useState } from 'react';
import './Filter.css'

export const Filter = ({ name }) => {

    const [open, setOpen] = useState(false)

    return (
        <div className='filter'>
            <div className='filter_heading' onClick={() => setOpen(!open)}>
                {name}  +
            </div>
            <div className='filter_items' hidden={!open}>
                <input type='text' />
                <div className='filter_inputs'>
                    <p className='filter_item'><label><input name="isGoing" type="checkbox" />Пункт 1</label></p>
                    <p className='filter_item'><label><input name="isGoing" type="checkbox" />Пункт 2</label></p>
                    <p className='filter_item'><label><input name="isGoing" type="checkbox" />Пункт 3</label></p>
                    <p className='filter_item'><label><input name="isGoing" type="checkbox" />Пункт 4</label></p>
                    <p className='filter_item'><label><input name="isGoing" type="checkbox" />Пункт 5</label></p>
                    <p className='filter_item'><label><input name="isGoing" type="checkbox" />Пункт 6</label></p>
                    <p className='filter_item'><label><input name="isGoing" type="checkbox" />Пункт 7</label></p>
                    <p className='filter_item'><label><input name="isGoing" type="checkbox" />Пункт 8</label></p>
                    <p className='filter_item'><label><input name="isGoing" type="checkbox" />Пункт 9</label></p>
                    <p className='filter_item'><label><input name="isGoing" type="checkbox" />Пункт 10</label></p>
                    <p className='filter_item'><label><input name="isGoing" type="checkbox" />Пункт 11</label></p>
                    <p className='filter_item'><label><input name="isGoing" type="checkbox" />Пункт 12</label></p>
                    <p className='filter_item'><label><input name="isGoing" type="checkbox" />Пункт 13</label></p>
                    <p className='filter_item'><label><input name="isGoing" type="checkbox" />Пункт 14</label></p>
                    <p className='filter_item'><label><input name="isGoing" type="checkbox" />Пункт 15</label></p>
                    <p className='filter_item'><label><input name="isGoing" type="checkbox" />Пункт 16</label></p>
                    <p className='filter_item'><label><input name="isGoing" type="checkbox" />Пункт 17</label></p>
                    <p className='filter_item'><label><input name="isGoing" type="checkbox" />Пункт 18</label></p>
                    <p className='filter_item'><label><input name="isGoing" type="checkbox" />Пункт 19</label></p>
                    <p className='filter_item'><label><input name="isGoing" type="checkbox" />Пункт 20</label></p>
                </div>
            </div>
        </div>
    )
}