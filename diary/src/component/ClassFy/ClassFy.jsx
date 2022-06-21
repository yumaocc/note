import React from 'react'
import './classFy.css'
import { DatabaseOutlined, BookOutlined, DeleteOutlined, TagOutlined, FolderOutlined } from '@ant-design/icons';
import Menu from './Menu'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import action  from '../../store/action';
export default function ClassFy() {
    const dispatch = useDispatch()
    const {header ,search ,list ,addBtn} = action()
    const { notClassData, noteData } = useSelector(state => {
        return {
            notClassData: state.note.notClassData,
            noteData: state.note.data
        }
    })//获取数据
    const navigate = useNavigate()
    const content = [
        {
            title: '全部笔记',
            icon: <DatabaseOutlined className='icon' />,
            number: noteData.length,
            address: '/'
        }, {
            title: '未分类',
            icon: <BookOutlined className='icon' />,
            number: notClassData.data.length,
            address: '/classfy'
        },
        {
            title: '我的收藏',
            icon: <TagOutlined className='icon' />,
            number: 0,
        },
        {
            title: '最近删除',
            icon: <DeleteOutlined className='icon' />,
            number: 0,
        },

    ]

    const handleClick = (address) => {
            if (address === '/') {
                navigate(address)
            } else  if(address === '/classfy'){
                navigate(address, { state: notClassData })
            } else {
                return 
            }
        dispatch({ type: header })
        dispatch({ type: search })
        dispatch({ type: list })
        dispatch({ type: addBtn })
    }
    return (
        <div className='classFyContainer'>
            <div className='classFy'>
                <div className='box1'>
                    {content.map(e => {
                        return (
                            <div key={e.title} className='content' onClick={() => handleClick(e.address)}>
                                {e.icon}
                                <div className='text'>
                                    <div>{e.title}</div>
                                    <div className='num'>{e.number}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='box2'>
                    <div className='content'>
                        <div className='icon_text'>
                            <FolderOutlined style={{ fontSize: "25" }} />
                            <span>我的笔记</span>
                        </div>
                        <Menu />
                    </div>
                </div>
            </div>
            <div className='footer'></div>
        </div>
    )
}
