import React from 'react'
import './list.css'
import { Radio, Button, } from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import action from '../../../../store/action'
export default function List() {
    
    const { todoDel } = action()
    const dispatch = useDispatch()
    const [checked, setChecked] = useState(false)
    const { checkbox ,data } = useSelector(state => {
        return {
            checkbox: state.todo.switch.checkboxShow ,
            data : state.todo.data
        }
    })
    const [del, setDel] = useState(false)//删除线
    const onChange = () => {

    }
    return (
        <div className='todo_list'>
            {data.map(e => {
                return (
                    <div key={e.id} className='todo_list-container'>
                        <div style={{ display: "flex" }}>
                            <Radio onChange={() => setDel(true)} className='todo_list_radio'></Radio>
                            <div className={del ? 'todo_list_text' : ''}>{e.content}</div>
                        </div>
                        {checkbox ? <Button
                        className='delBtn'
                            danger
                            onClick={() => dispatch({
                                type: todoDel,
                                id: e.id
                            })}
                        >删除</Button> : ''}
                    </div>
                )
            })}
        </div>
    )
}
