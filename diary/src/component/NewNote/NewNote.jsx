import React from 'react'
import { useState } from 'react'
import { Input, message } from 'antd';
import { ArrowLeftOutlined, CheckOutlined, BookOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DownMenu from '../DownMenu/DownMenu'
import action from '../../store/action';
import { useDate } from '../../Hooks/index'
import '../Details/details.css'
import './NewNote.css'
const { TextArea } = Input;
export default function Details() {
    const { addNote } = action()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [title, setTitle] = useState()
    const [values, setValues] = useState()
    const [name, setName] = useState({
        name: '未分类',
        color: '#ffffff'
    })
    const handleClick = () => {
        console.log(name)
        if (values === undefined) {
            message.error('内容不能为空');
            return
        } else {
            dispatch({ type: addNote, data: { headline: title, content: values, id: Date.now(), date: useDate(), classFy: name } })
            navigate('/')
        }
    }
    return (
        <div className='details'>
            <div className='detailIcon'>
                <ArrowLeftOutlined className='detailIcon_left' onClick={() => navigate('/')} />
                <CheckOutlined onClick={handleClick} />
            </div>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='标题' />
            <div className='detailDate'>
                <div>{useDate()}</div>
                <div className='icon'>
                    <BookOutlined /> <DownMenu setName={setName} name={name} />
                </div>
            </div>
            <TextArea rows={20} value={values} onChange={(e) => setValues(e.target.value)} maxLength={4} placeholder='记录美好的一天吧' />
        </div>
    )
}
