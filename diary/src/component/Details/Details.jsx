import React from 'react'
import { useState } from 'react'
import { Input } from 'antd';
import { ArrowLeftOutlined, CheckOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DownMenu from '../DownMenu/DownMenu'
import action from '../../store/action';
import { useDate } from '../../Hooks/index'
import './details.css'
const { TextArea } = Input;
export default function Details() {
    const { revise } = action()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { state } = useLocation()
    const [title, setTitle] = useState(state.headline)
    const [value, setValue] = useState(state.content)
    const [name, setName] = useState(state.classFy)
    return (
        <div className='details'>
            <div className='detailIcon'>
                <ArrowLeftOutlined className='detailIcon_left' onClick={() => navigate('/')} />
                <CheckOutlined onClick={() => {
                    dispatch({ type: revise, data: { headline: title, content: value, id: state.id, date: useDate(), classFy: name } })
                    navigate('/')
                }} />
            </div>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            <div className='detailDate'>
                <div>{state.date}</div>
                <DownMenu name={name} setName={setName} />
            </div>
            <TextArea rows={20} value={value} onChange={(e) => setValue(e.target.value)} maxLength={6} />
        </div>
    )
}
