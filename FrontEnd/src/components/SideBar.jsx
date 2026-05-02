import React, { useContext } from 'react';
import { Layout, Menu, Button } from 'antd';
import {HomeOutlined,FileTextOutlined,TeamOutlined,BarChartOutlined,SettingOutlined,LogoutOutlined} from '@ant-design/icons';
import './../stylePages.scss'; 
import { appContext } from '../context/appContext';
import { routerContext } from '../context/routerContext';


const Sidebar = () => {
    const { theme } = useContext(appContext);
    const { view, setView } = useContext(routerContext);

    return (
        <Layout.Sider
            className="sidebar-container"
            theme={theme} // Mantiene el tono institucional oscuro [cite: 5]
        >
            <div className="logo-section">
                <div className="logo-placeholder">P</div>
                <span className="logo-text">Sistema PETSE</span>
            </div>
            
            <Button className={`button-menu ${view === "Home" ? "selected" : ""}`} onClick={() => setView("Home")} type='text' icon={<HomeOutlined className="icon"/>}>INICIO</Button>
            <Button className={`button-menu ${view === "BillingPanel" ? "selected" : ""}`} onClick={() => setView("BillingPanel")} type='text' icon={<FileTextOutlined className="icon"/>}>FACTURACIÓN</Button>
            <Button className={`button-menu ${view === "Students" ? "selected" : ""}`} onClick={() => setView("Students")} type='text' icon={<TeamOutlined className="icon"/>}>ESTUDIANTES</Button>
            <Button className={`button-menu ${view === "Reports" ? "selected" : ""}`} onClick={() => setView("Reports")} type='text' icon={<BarChartOutlined className="icon"/>}>REPORTES</Button>
            <div className="footer">
                <Button className={`button-menu ${view === "Settings" ? "selected" : ""}`} onClick={() => setView("Settings")} type='text' icon={<SettingOutlined className="icon"/>}>CONFIGURACIÓN</Button>
            </div>
        </Layout.Sider>
    );
};

export default Sidebar;