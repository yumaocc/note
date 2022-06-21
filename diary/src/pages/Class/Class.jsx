import React from 'react'
import Headline from '../../component/Nav/Headline'
import List from '../../component/List/List'
import Footer from '../../component/Footer/Footer'
import './class.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
export default function Class() {
    const {list} = useSelector(state => state.switch)
    const { state } = useLocation()
    const [show ,setShow] = useState(true)
    return (
        <div className='classHeadline' style={{ backgroundColor: state.background }} onClick={()=>setShow(!show)}>
            {show && <div className='head'></div>}
           <Headline title={state.title} length={`${state.data.length}条笔记`} />
             <List data={state.data} checkedShow={false} />
            <footer>
                <Footer name='note' />
            </footer>
        </div>
    )
}
