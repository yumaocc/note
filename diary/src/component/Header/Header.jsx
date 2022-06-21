import { MoreOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import action from '../../store/action';
//页面最顶部那三个点
export default function App () {
  const {header ,headline ,checkedShow ,footer ,deleteShow ,search ,sort ,layout ,addBtn} = action()
  const selector = useSelector((state)=>state.switch.layout)
  const dispatch = useDispatch()
  const menu = (
    <Menu
      items={[
        {
          label: <div onClick={()=>dispatch({type:layout})}>{selector ?'宫格视图' : '列表视图' }</div>,
          key: '0',
        },
        {
          type: 'divider',
        },
        {
          label: <div onClick={()=>{
            dispatch({type:header})
            dispatch({type:headline})
            dispatch({type:footer})
            dispatch({type:deleteShow})
            dispatch({type:search})
            dispatch({type:checkedShow})
            dispatch({type:addBtn})
          }}>批量删除</div>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: <div onClick={()=>dispatch({type:sort})}>排序方式</div>,
          key: '3',
        },
        {
          type: 'divider',
        },
        {
          label: <div>设置</div>,
          key: '4',
        },
      ]}
    />
  );
  
  return (
    <Dropdown   overlay={menu} trigger={['click']}>
      <MoreOutlined  style={{ fontSize: '1.5rem' ,marginTop:"1rem"}} />
    </Dropdown>
  )

}