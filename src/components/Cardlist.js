import React from 'react'
import Card from './Card'

export default function Cardlist({items}) {
    return (
        <div className='card-container'>
            {items.map((item)=>{
                return <Card key={item.char_id} item={item}/>
            })}
        </div>
    )
}
