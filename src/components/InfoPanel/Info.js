import React from 'react'
import { useSelector } from 'react-redux'
import './info.css'

function Info() {
    const dataState = useSelector(state => state.data)
    const data = Object.values(dataState)
    return (
        <div id='info'>
            <img id='picture' src={data[0]?.image} alt={data[0]?.title}></img>
            <div id='title'>{data[0]?.title}</div>
            <div id='subtitle'>{data[0]?.subtitle}</div>
            <div id='tags'>{data[0]?.tags.map(t => {
                return <li key={data.tags?.indexOf(t)}>{t}</li>
            })}</div>
        </div>
    )
}

export default Info