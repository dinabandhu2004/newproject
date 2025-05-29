import React, { useState } from 'react'
import data from './data'

const Accordian = () => {
    console.log(data)
    const [selected, setselected] = useState(null)
    function handelsingleSelection(getElementById){
         setselected(getElementById === selected? null:getElementById)
         console.log(selected)
        //  setselected([...selected,getElementById])
    } 
    console.log(selected)

    return (
        <>
            <div className='accordian'>
                {
                    data && data.length > 0 ? data.map(dataItem => <div className='item'>
                        <div onClick={()=>handelsingleSelection(dataItem.id)} className='title'>
                            <h3>{dataItem.question}</h3> <span>+</span>
                        </div>
                        { selected===dataItem.id?<div className='content'>{dataItem.answer}</div>:null}
                    </div>) : <div>No data found</div>
                }


            </div>
        </>
    )
}

export default Accordian