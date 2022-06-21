import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import Todo from '../pages/Todo/Todo'
import Note from '../pages/Note'
import Details from '../component/Details/Details'
import NewNote from '../component/NewNote/NewNote'
import Class from '../pages/Class/Class'
import DownMenu from '../pages/Todo/component/DownMenu/DownMenu'
import List from '../pages/Todo/component/List/List'
export default function index() {
  return (
    <Routes>
        <Route path='/' element={<Note />}></Route>
        <Route path='/todo' element={<Todo />}>
          <Route path='nav' element={<DownMenu />}></Route>
          <Route path='list' element={<List />}></Route>
        </Route>
        <Route path='/details' element={<Details />}></Route>
        <Route path='/newnote' element={<NewNote />}></Route>
        <Route path='/classfy' element={<Class />}></Route>
    </Routes>
  )
}
