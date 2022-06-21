import { Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ArrowLeftOutlined } from '@ant-design/icons';
import action from '../../store/action';
import './search.css'
import { useState } from 'react';
import List from '../List/List'
import { useEffect } from 'react';
export default function App () {
    const [show, setShow] = useState(true)
    const [searchData, setSearchDate] = useState()//搜索页面需要展示的数据
    const [value, setValue] = useState()
    let { searchBtn, header, footer, headline } = action()
    const dispatch = useDispatch()
    const { selector, data } = useSelector((state) => {
        return {
            selector: state.switch.searchBtn,
            data: state.note.data
        }
    })

    const onClick = (who) => {
        if (who === 'icon' || show) {
            setShow(!show)
            dispatch({ type: searchBtn })
            dispatch({ type: footer })
            dispatch({ type: header })
            dispatch({ type: headline })
        }
        //如果搜索页面已经显示出来，就取消输入框的点击事件
    }
        useEffect(() => {
                if (value === '') {
                    setSearchDate([])
                } else {
                    let newData = data.filter(e => e.content.includes(value))
                    setSearchDate(newData)
                }
        }, [value])//搜索逻辑
    
    return (
        <div>
            {!selector && <ArrowLeftOutlined className='searchIcon' onClick={() => onClick('icon')} />}
            <Input
                placeholder="搜索笔记"
                value={value}
                className={show ? 'search1' : 'search2'}
                onClick={onClick}
                onChange={(e) => setValue(e.target.value)} />
            {
                !selector && <div className='searchContent'><List data={searchData} /></div>
            }
        </div>
    )
};