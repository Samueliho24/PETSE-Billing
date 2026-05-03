import React from "react";
import { Button, Card, Table, Tooltip } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./../stylePages.scss";

const Student = () =>{
    const dataSource = [
        {
            key: '1',
            identification: '123456789',
            name: 'Pedro',
            age: 20,
            phone: '123456789',
            address: 'Calle 123',
    }];

    const columns = [
        {
            title: 'Cedula',
            dataIndex: 'identification',
            key: 'identification',
            width: 100,
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
            width: 150,
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Edad',
            dataIndex: 'age',
            key: 'age',
            width: 50,
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Telefono',
            dataIndex: 'phone',
            key: 'phone',
            width: 150,
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Dirección',
            dataIndex: 'address',
            key: 'address',
            width: 200,
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Acciones',
            key: 'actions',
            width: 50,
            render: (_, record) => (
                <>
                <div className="buttons-panel">
                    <Tooltip className="tooltip" title="Visualizar">
                        <Button shape="circle" type="default" icon={<EyeOutlined />} onClick={() => console.log('Visualizar', record.key)} />
                    </Tooltip>
                    <Tooltip className="tooltip" title="Editar">
                        <Button shape="circle" type="default" icon={<EditOutlined />} onClick={() => console.log('Editar', record.key)} />
                    </Tooltip>
                    <Tooltip className="tooltip" title="Eliminar">
                        <Button shape="circle" type="default" icon={<DeleteOutlined />} onClick={() => console.log('Eliminar', record.key)} />
                    </Tooltip>
                </div>
                </>
            ),
        }
    ];

    return (
        <div className="student-container">
            <Card className="student-table-card" size="small" variant="info">
                <Table className="table" dataSource={dataSource} columns={columns} pagination={15} />
            </Card>
        </div>
    );
}

export default Student;