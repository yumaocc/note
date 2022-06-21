import React from 'react'
import { CaretDownOutlined } from '@ant-design/icons';
import './nav.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
export default function Nav() {
    const navigate = useNavigate()
    const [icon ,setIcon] = useState(true)
    const handleClick = () => {
        setIcon(!icon)
    }
    const todoLength = useSelector(state => state.todo.data.length)
    useEffect(()=>{
        icon ? navigate('/todo/list') : navigate('/todo/nav')
    },[icon])
    return (
        <div>
            <div className='Nav_title' onClick={handleClick}>
                <h2>全部待办</h2>
                <CaretDownOutlined className={icon ? 'Nav_title_icon1' : 'Nav_title_icon1 Nav_title_icon2' }/>
            </div>
            <span className='subtitle'>{`${todoLength}条待办`}</span>
        </div>
    )
}
