import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { useState } from 'react';


export default function App (props) {
    const { name, setName } = props
    const menu = (
        <Menu
            items={[
                {
                    label: <div onClick={() => setName({
                        name: '个人',
                        color: '#d9f7be'
                    })}>个人</div>,
                    key: '0',
                },
                {
                    label: <div onClick={() => setName({
                        name: '生活',
                        color: '#ffffb8'
                    })}>生活</div>,
                    key: '1',
                },
                {
                    type: 'divider',
                },
                {
                    label: <div onClick={() => setName({
                        name: '工作',
                        color: '#ffccc7'
                    })}>工作</div>,
                    key: '3',
                },
            ]}
        />
    );
    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    {name.name}
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    )
}