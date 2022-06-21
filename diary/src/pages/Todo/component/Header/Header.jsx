import { MoreOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import action from '../../../../store/action';

function Header() {
    const {checkboxShow} = action()
    const show = useSelector(state => state.todo.switch.checkboxShow)
    const dispatch = useDispatch()
    const menu = (
        <Menu
            items={[
                {
                    label: <div onClick={()=>dispatch({type:checkboxShow})}>{show ? '取消' : '删除'}</div>,
                    key: '3',
                },
            ]}
        />
    );
    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    <MoreOutlined style={{ fontSize: '1.5rem', padding: '1rem' }} />
                </Space>
            </a>
        </Dropdown>
    )
}

export default Header;