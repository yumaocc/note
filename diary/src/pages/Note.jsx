import React from 'react'
import Header from '../component/Header/Header'
import Headline from '../component/Nav/Headline'
import Search from '../component/Nav/Search'
import Delete from '../component/Delete/Delete'
import AddBtn from '../component/AddBtn/AddBtn'
import { useSelector } from 'react-redux'
import List from '../component/List/List'
import Footer from '../component/Footer/Footer'
import './note.css'
export default function Note() {
    const { header, headline, footer, search, deleteShow, checkedShow, addBtn, list } = useSelector((state) => state.switch)//获取所有组件的状态
    const data = useSelector((state) => state.note.data)//获取列表数据
    return (
        <main>
            {header && <header > <Header /> </header>}

            <nav>
                {headline && <Headline title='全部笔记' length={`${data.length}条笔记`} />}
                {search && <Search />}
            </nav>

            <article>
                {list && <List data={data} checkedShow={checkedShow} />}
                {addBtn && <section> <AddBtn name='note'/> </section>}
            </article>

            {footer && <footer> <Footer name='note' /> </footer>}
            {deleteShow && <Delete />}
        </main>
    )
}



