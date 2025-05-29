import React, { useState } from 'react'
import data from './data'
import './accordian.css'

const Accordian = () => {
    // console.log(data)
    const [selected, setselected] = useState(null)
    function handelsingleSelection(getElementById) {
        setselected(getElementById === selected ? null : getElementById)
    }

    return (
        <>
            <div className='accordian'>
                {
                    data && data.length > 0 ? data.map(dataItem => <div key={dataItem.id} className='item'>
                        <div onClick={() => handelsingleSelection(dataItem.id)} className='title'>
                            <h2>{dataItem.question} </h2> {selected === dataItem.id ? <div className='sign'>-</div> : <div className='sign'>+</div>}
                        </div>
                        <div className={`content ${selected === dataItem.id ? 'show' : ''}`}>
                            {dataItem.answer}
                        </div>
                    </div>) : <div>No data found</div>
                }


            </div>
        </>
    )
}

export default Accordian