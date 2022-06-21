import React from 'react'
import { PlusOutlined } from '@ant-design/icons';
import './addBtn.css'
import { useNavigate } from 'react-router-dom';
export default function AddBtn(props) {
  const {name } = props
    const navigate = useNavigate()
    const handleClick = () => {
      if(name === 'note') {
        navigate('/newNote')
      } else if(name === 'todo'){
        console.log(111)
      }
    }
  return (
    <div className='addBtn' onClick={handleClick}>
      +
    </div>
  )
}
