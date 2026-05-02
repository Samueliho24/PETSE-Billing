import React, { useState } from 'react';
import { 
    Card, 
    Table, 
    Input, 
    Button, 
    Row, 
    Col, 
    Typography, 
    Space, 
    InputNumber, 
    Tag, 
    Divider 
} from 'antd';
import { 
    PlusOutlined, 
    DeleteOutlined, 
    FileTextOutlined, 
    SearchOutlined,
    UserOutlined 
} from '@ant-design/icons';

const { Title, Text } = Typography;

const BillingPanel = () => {
    // Estado para las líneas de la factura [cite: 22, 29]
    const [dataSource, setDataSource] = useState([
        { key: '1', descripcion: '', cantidad: 1, precio: 0, impuesto: 16, total: 0 }
    ]);

    const addRow = () => {
        const newData = {
            key: Date.now().toString(),
            descripcion: '',
            cantidad: 1,
            precio: 0,
            impuesto: 16,
            total: 0,
        };
        setDataSource([...dataSource, newData]);
    };

    const deleteRow = (key) => {
        setDataSource(dataSource.filter((item) => item.key !== key));
    };

    // Definición de columnas para la tabla dinámica 
    const columns = [
        {
            title: 'Descripción',
            dataIndex: 'descripcion',
            render: () => <Input placeholder="Nombre del servicio o producto" variant="borderless" />,
        },
        {
            title: 'Cant.',
            dataIndex: 'cantidad',
            width: 100,
            render: () => <InputNumber min={1} defaultValue={1} />,
        },
        {
            title: 'Precio Unit.',
            dataIndex: 'precio',
            width: 150,
            render: () => <InputNumber prefix="$" placeholder="0.00" style={{ width: '100%' }} />,
        },
        {
            title: 'Impuesto %',
            dataIndex: 'impuesto',
            width: 120,
            render: () => <Tag color="blue">16% IVA</Tag>,
        },
        {
            title: 'Total',
            dataIndex: 'total',
            width: 150,
            align: 'right',
            render: () => <Text strong>0.00</Text>,
        },
        {
            title: '',
            key: 'action',
            width: 50,
            render: (_, record) => (
                <Button 
                    type="text" 
                    danger 
                    icon={<DeleteOutlined />} 
                    onClick={() => deleteRow(record.key)} 
                />
            ),
        },
    ];

    return (
        <div style={{ padding: '24px', background: '#f5f7fa', minHeight: '100vh' }}>
            {/* Cabecera [cite: 9] */}

            <Row gap={24} gutter={[24, 24]}>
                {/* Cuerpo Principal: Datos y Tabla [cite: 11, 13] */}
                <Col xs={24} lg={18}>
                    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                        {/* Datos del Cliente [cite: 12] */}
                        <Card title={<><UserOutlined /> Datos del Cliente</>} size="small" variant="info">
                            <Row gutter={16}>
                                <Col span={8}>
                                    <Text type="secondary" size="small">Cédula / RIF</Text>
                                    <Input placeholder="V-00000000" style={{ marginTop: 5 }} />
                                </Col>
                                <Col span={8}>
                                    <Text type="secondary">Nombre Completo</Text>
                                    <Input placeholder="Ej. Juan Pérez" style={{ marginTop: 5 }} />
                                </Col>
                                <Col span={8}>
                                    <Text type="secondary">Teléfono</Text>
                                    <Input placeholder="0414-0000000" style={{ marginTop: 5 }} />
                                </Col>
                            </Row>
                        </Card>

                        {/* Tabla Interactiva [cite: 14, 22] */}
                        <Card bodyStyle={{ padding: 0 }}>
                            <Table 
                                dataSource={dataSource} 
                                columns={columns} 
                                pagination={false}
                                footer={() => (
                                    <Button type="dashed" onClick={addRow} block icon={<PlusOutlined />}>
                                        Añadir concepto
                                    </Button>
                                )}
                            />
                        </Card>
                    </Space>
                </Col>

                {/* Panel Lateral: Totales y Acciones [cite: 15, 30] */}
                <Col xs={24} lg={6}>
                    <Card shadow="sm">
                        <Tag color="processing" style={{ padding: '4px 12px', fontSize: '14px', alignItems: 'center'}}>
                            Tasa: 1 USD = 55.00 Bs.
                        </Tag>
                        <Divider />
                        <div style={{ marginBottom: 16 }}>
                            <Row justify="space-between">
                                <Text type="secondary">Subtotal</Text>
                                <Text>0.00</Text>
                            </Row>
                            <Row justify="space-between" style={{ marginTop: 8 }}>
                                <Text type="secondary">IVA (16%)</Text>
                                <Text>0.00</Text>
                            </Row>
                        </div>
                        
                        <div style={{ background: '#fafafa', padding: '16px', borderRadius: '8px' }}>
                            <Text strong style={{ fontSize: '12px', color: '#8c8c8c' }}>TOTAL A PAGAR</Text>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                <Title level={2} style={{ margin: 0, color: '#1677ff' }}>0.00</Title>
                                <Text strong>Bs.</Text>
                            </div>
                            <Divider style={{ margin: '12px 0' }} />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Text type="secondary">Equivalente:</Text>
                                <Text strong>$ 0.00</Text>
                            </div>
                        </div>

                        <Button 
                            type="primary" 
                            size="large" 
                            block 
                            icon={<FileTextOutlined />} 
                            style={{ marginTop: 24, height: '50px', borderRadius: '8px', fontWeight: 'bold' }}
                        >
                            Emitir Comprobante
                        </Button>
                        
                        <div style={{ textAlign: 'center', marginTop: 16 }}>
                            <Text type="secondary" style={{ fontSize: '11px' }}>ESTADO: BORRADOR | REG: ---</Text>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default BillingPanel;