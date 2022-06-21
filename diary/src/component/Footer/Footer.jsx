import { ProfileOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './footer.css'
export default function Footer(props) {
    const { name } = props
    const navigate = useNavigate()
    const handleClick = (index) => {
        if (index === 1) {
            navigate('/')
        } else if (index === 2) {
            navigate('/todo/list')
        }
    }
    return (
        <div className="footer">
            <div
                onClick={() => handleClick(1)}>
                <ProfileOutlined className={name == 'note' ? 'footerIcon active' : 'footerIcon'} />
                <div >笔记</div>
            </div>
            <div
                onClick={() => handleClick(2)}>
                <CheckCircleOutlined className={name == 'todo' ? 'footerIcon active' : 'footerIcon'} />
                <div >待办</div>
            </div>
        </div>
    )
}