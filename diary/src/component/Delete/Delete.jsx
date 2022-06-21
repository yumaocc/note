import React from 'react'
import { CloseOutlined, DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import action from '../../store/action';
import './Delete.css'
import { useState } from 'react';
export default function Delete() {
    const dispatch = useDispatch()
    const { del, header, headline, checkedShow, footer, deleteShow, search ,anyCheckboxTrue ,anyCheckboxFalse} = action()
    const [text ,setText] = useState(true)
    const selector = useSelector((state) => {
        let length = 0
        state.note.data.map(e => e.done === true ? length++ : '')
        return length
    })
    const anyCheckboxDone = () => {
        if(text) {
            dispatch({type:anyCheckboxTrue})//全选
        } else {
            dispatch({type:anyCheckboxFalse})//全部取消
        }
        setText(!text)
    }
    return (
        <div className='delete'>
            <div className='nav'>
                <h1 className='head'><CloseOutlined onClick={() => {
                    dispatch({ type: header })
                    dispatch({ type: headline })
                    dispatch({ type: footer })
                    dispatch({ type: deleteShow })
                    dispatch({ type: search })
                    dispatch({ type: checkedShow })
                }} /></h1>
                <h1 className='title'>{selector > 0 ? `已选择${selector}项` : '未选择'}</h1>
            </div>
            <div className='footer'>
                <div className='deleteIcon'>
                    <DeleteOutlined className='icon' />
                    <div className='text' onClick={() => {
                        dispatch({ type: del })
                        message.success('删除成功', 2);
                    }}>删除</div>
                </div>
                <div className='deleteIcon'>
                    <CheckCircleOutlined className='icon' />
                    <div className='text' onClick={anyCheckboxDone}>{text ? '全选' : '全部取消'}</div>
                </div>
            </div>
        </div>
    )
}
