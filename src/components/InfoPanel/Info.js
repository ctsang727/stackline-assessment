import React from 'react'
import { useSelector } from 'react-redux'
import './info.css'

function Info() {
    const testState = useSelector(state => state.data)
    const test2 = Object.values(testState)
    return (
        <div id='info'>
            <img id='picture' src={test2[0]?.image}></img>
            <div id='title'>{test2[0]?.title}</div>
            <div id='subtitle'>{test2[0]?.subtitle}</div>
            <div id='tags'>{test2[0]?.tags.map(t => {
                return <li>{t}</li>
            })}</div>
        </div>
    )
}

export default Info