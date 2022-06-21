import { DownOutlined, BookOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { useSelector ,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './menu.css'
import action from '../../store/action';
export default function App() {
    const {header ,search ,list ,addBtn} = action()
    const dispatch = useDispatch()
    const { selfData, jobData, lifeData } = useSelector(state => {
        return {
            selfData: state.note.selfData,
            jobData: state.note.jobData,
            lifeData: state.note.lifeData
        }
    })
    const navigate = useNavigate()
    const handleClick = (data) =>{
        navigate('/classfy', { state: data })
        dispatch({ type: header })
        dispatch({ type: search })
        dispatch({ type: list })
        dispatch({ type: addBtn })
    }
    const menu = (
        <Menu
            style={{ boxShadow: 'none' }}
            items={[
                {
                    label:
                        <div className='downContainer' onClick={() => handleClick(jobData)}>
                            <div>
                                <BookOutlined style={{ color: '#ff4d4f' }} />
                                <div>工作</div>
                            </div>
                            <div>{jobData.data.length}</div>
                        </div>,
                    key: '0',
                },
                {
                    type: 'divider',
                },
                {
                    label:
                        <div className='downContainer' onClick={() => handleClick(selfData)}>
                            <div>
                                <BookOutlined style={{ color: '#a0d911' }} />
                                <div>个人</div>
                            </div>
                            <div>{selfData.data.length}</div>
                        </div>,
                    key: '1',
                },
                {
                    type: 'divider',
                },
                {
                    label:
                        <div className='downContainer' onClick={() =>handleClick(lifeData)}>
                            <div>
                                <BookOutlined style={{ color: '#fadb14' }} />
                                <div>生活</div>
                            </div>
                            <div>{lifeData.data.length}</div>
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