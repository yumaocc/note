import { Button, Drawer, Radio, Space ,Input} from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import action from '../../../../store/action';
import './input.css'
function App () {
    const dispatch = useDispatch()
    const {todoAdd} = action()
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('bottom');
    const [value ,setValue] = useState('')
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const onClick = () => {
    setVisible(false)
    dispatch({
        type:todoAdd,
        data : {
            content : value,
            id : Date.now(),
            done : false
       }})
  }
  return (
    <>
      <Space>
        <Button  onClick={showDrawer} className='input_btn'>添加</Button>
      </Space>
      <Drawer
        title={<Input placeholder='请输入内容' value={value} onChange={e=> setValue(e.target.value)}/>}
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={placement}
      >
       <Button 
       onClick={onClick}>提交</Button>
      </Drawer>
    </>
  );
};

export default App;