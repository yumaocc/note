import React from 'react'
import { CaretDownOutlined } from '@ant-design/icons';
import './headline.css'
import { useState } from 'react';
import ClassFy from '../ClassFy/ClassFy';
import { useDispatch } from 'react-redux';
import action from '../../store/action';
//标题
export default function Nav(props) {
  const { header, search, list, addBtn } = action()
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const { title, length } = props
  const [animation, setAnimation] = useState(false)
  return (
    <>
      <div className={show ? 'headline headline1' : 'headline'} onClick={() => {
        setAnimation(!animation)
        setShow(!show)
        dispatch({ type: header })
        dispatch({ type: search })
        dispatch({ type: list })
        dispatch({ type: addBtn })
      }}>
        <div className='title'>
          <h2>{title}</h2>
          <CaretDownOutlined className={animation ? 'headline_icon1' : 'headline_icon2'} />
        </div>
        <div className='length'>{length}</div>
      </div>
      {
        show && <ClassFy />
      }
    </>
  )
}
