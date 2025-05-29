import React, { useState, useEffect } from 'react'
import data from './data'
import './accordian.css'

const Accordian = () => {
    const [selected, setselected] = useState(null)
    const [enablemultiselction, setenablemultiselection] = useState(false)
    const [multiple, setmultiple] = useState([])
    const [enbtxt, setenbtxt] = useState('Enable Multi Selection')

    function handelsingleSelection(getElementById) {
        setselected(getElementById === selected ? null : getElementById)
    }

    function handelmultiselection(getElementById) {
        let copymultiple = [...multiple]
        const findIndexOfcurrentId = copymultiple.indexOf(getElementById)
        if (findIndexOfcurrentId == -1) copymultiple.push(getElementById)
        else copymultiple.splice(findIndexOfcurrentId, 1)
        setmultiple(copymultiple)
    }
    useEffect(() => {
        setenbtxt(enablemultiselction ? 'Disable Multi Selection' : 'Enable Multi Selection')
    }, [enablemultiselction])


    return (
        <>
            <div className='accordian'>
                <button onClick={() => setenablemultiselection(!enablemultiselction)}>{enbtxt}</button>
                {
                    data && data.length > 0 ? data.map(dataItem => <div key={dataItem.id} className='item'>
                        <div onClick={enablemultiselction ? () => handelmultiselection(dataItem.id) : () => handelsingleSelection(dataItem.id)} className='title'>
                            <h2>{dataItem.question} </h2>  {
                                enablemultiselction
                                    ? multiple.includes(dataItem.id)
                                        ? <div className='sign'>-</div>
                                        : <div className='sign'>+</div>
                                    : selected === dataItem.id
                                        ? <div className='sign'>-</div>
                                        : <div className='sign'>+</div>
                            }
                        </div>
                        {enablemultiselction ? <div className={`content ${multiple.indexOf(dataItem.id) !== -1 ? 'show' : ''}`}>{dataItem.answer}</div> : <div className={`content ${selected === dataItem.id ? 'show' : ''}`}>
                            {dataItem.answer}
                        </div>}
                    </div>) : <div>No data found</div>
                }


            </div>
        </>
    )
}

export default Accordian