import React, { useState, useContext } from 'react';
import { Layout, Typography, Input, Divider} from 'antd';
import { QuestionCircleOutlined, UserOutlined, NotificationFilled, SearchOutlined } from '@ant-design/icons';
import { appContext } from '../context/appContext';
import UserSection from './UserSection';

const Header = () => {
    const { Title } = Typography;
    const { titleSection } = useContext(appContext);

    return (
        <Layout.Header className="header-container">
            <Title level={3} className="main-title">{titleSection}</Title>
            <Input 
                prefix={<SearchOutlined />} 
                className="search-bar" 
                placeholder="Buscar estudiante o factura" 
            />
            <UserSection />
        </Layout.Header>
    );
};

export default Header;
