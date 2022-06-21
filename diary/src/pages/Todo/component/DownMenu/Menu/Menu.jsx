import { DownOutlined, BookOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { useSelector ,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './menu.css'
export default function App() {
   
    const menu = (
        <Menu
            style={{ boxShadow: 'none' }}
            items={[
                {
                    label:
                        <div className='downContainer'>
                            <div>
                                <BookOutlined style={{ color: '#ff4d4f' }} />
                                <div>工作</div>
                            </div>
                            <div>{1}</div>
                        </div>,
                    key: '0',
                },
                {
                    type: 'divider',
                },
                {
                    label:
                        <div className='downContainer' >
                            <div>
                                <BookOutlined style={{ color: '#a0d911' }} />
                                <div>个人</div>
                            </div>
                            <div>{1}</div>
                        </div>,
                    key: '1',
                },
                {
                    type: 'divider',
                },
                {
                    label:
                        <div className='downContainer' >
                            <div>
                                <BookOutlined style={{ color: '#fadb14' }} />
                                <div>生活</div>
                            </div>
                            <div>{1}</div>
                        </div>,
                    key: '3',
                },
                {
                    type: 'divider',
                },
            ]}
        />
    );
    return <Dropdown overlay={menu} trigger={['click']}>
        <DownOutlined />
    </Dropdown>
}