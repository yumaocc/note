import { List, Checkbox, Card } from 'antd';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import action from '../../store/action'
import './list.css'


export default function App(props) {
    const { layout } = useSelector(state => state.switch)
    const { data, checkedShow } = props
    const navigate = useNavigate()
    const { checkedChange } = action()
    const dispatch = useDispatch()

    const onChange = (id) => {
        dispatch({ type: checkedChange, id })
    }
    return <div className='cardContainer'>
        {data.map(item => {
            return (
                <Card
                    onClick={(e)=> e.target.type !== 'checkbox' && navigate('/details',{state:item})}
                    className={layout ? 'card1' : 'card2'}
                    key={item.id}
                    style={{
                        marginTop: 16,
                        backgroundColor: item.classFy.color
                    }}
                    type="inner"
                    title={item.headline}
                    extra={checkedShow && <Checkbox checked={item.done} onChange={() => onChange(item.id)} />}
                >
                    {`${item.date}  |  ${item.content}`}
                </Card>
            )
        })}
    </div>
}