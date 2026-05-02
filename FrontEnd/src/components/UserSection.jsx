import React from 'react';
import { Avatar } from 'antd';
import { appContext } from '../context/appContext';
import { UserOutlined } from '@ant-design/icons';

const UserSection = () => {
    const { userData } = React.useContext(appContext);
    return (
        <div className="user-section">
            <Avatar size="large" icon={<UserOutlined />} />
            <span>{userData.name}</span>
        </div>
    );
}

export default UserSection;