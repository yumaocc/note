import React from 'react'
import Footer from '../../component/Footer/Footer'
import Header from './component/Header/Header'
import Nav from './component/Nav/Nav'
import {Outlet} from 'react-router-dom'
import AddBtn from '../../component/AddBtn/AddBtn'
import Input from './component/Input/Input'
import './todo.css'
import { useState } from 'react'
export default function Todo() {
    const [inputShow ,setInputShow] = useState(false)
  return (
    <main className='main'>
        <header className='header'> <Header /></header>
        <nav className='nav'><Nav /></nav>
        <section className='content'><Outlet ></Outlet></section>
        <section className='input'> <Input /></section>
        <footer> <Footer name='todo'/></footer>
       
    </main>
  )
}
