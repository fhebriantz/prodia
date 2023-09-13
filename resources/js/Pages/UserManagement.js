import React, { useState,useEffect } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Table, Button, Modal, Select,Form, Input,Col, Divider, Row,message,Popconfirm  } from 'antd';
const {Option} = Select
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Head } from '@inertiajs/inertia-react';
import axios from 'axios';
import {
 listColor
} from "../Const/colorPalete";

import {
 role
} from "../Const/dummy";

export default function Welcome(props) {
    
    const {title,data,year,url,token} = props
    const [users, setUsers] = useState([]);
    const [isAddVisible, setIsAddVisible] = useState(false);
    const [dataSelected, setDataSelected] = useState({});
    const [isEditVisible, setIsEditVisible] = useState(false);
   
    const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
        <span>
            <Button type="link" icon={<EditOutlined />} onClick={() => [setIsEditVisible(true), setDataSelected(record)]}/>

            <Popconfirm
                title="Hapus User"
                description="Apakah anda yakin ingin menghapus user ini?"
                onConfirm={() => [handleDelete(record)]}
                onCancel={null}
                okText="Yes"
                cancelText="No"
            >
                <Button icon={<DeleteOutlined />}/>
            </Popconfirm>
        </span>
        ),
    },
    ];
    useEffect(() => {
        axios.get(`${url}/users`)
        .then(({ data }) => {
            setUsers(data)
        })
    }, [])
    const handleDelete = async (record) => {
        let data = {
            id: record?.id
        }
        let res = await axios.post(`${url}/users/delete`, data)
        setUsers(res.data)
    }
    const AddUser = () => {
        const [form] = Form.useForm();

        const handleAddOk = () => {
            form.validateFields().then(async (values) => {
                try {
                    let data = {
                        name: values?.name,
                        email: values?.email,
                        role: values?.role,
                        password: values?.password
                    }
                    let res = await axios.post(`${url}/users/add`, data)
                    setUsers(res.data)
                    setIsAddVisible(false);
                    message.success('User Berhasil Ditambahkan');
                } catch (error) {
                    console.log(error)
                }
            });
        };

        const handleAddCancel = () => {
            setIsAddVisible(false);
        };
        return (
            <Modal
                title="Add Form"
                visible={isAddVisible}
                onOk={handleAddOk}
                onCancel={handleAddCancel}
            >
            <Form form={form} layout="vertical">
                <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter a name' }]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please enter an email' }, { type: 'email', message: 'Please enter a valid email' }]}
                >
                    <Input/>
                </Form.Item>
                
                <Form.Item
                label="Role"
                name="role"
                rules={[{ required: true, message: 'Please enter a role' }]}
                >
                    <Select style={{ width: 120, textAlign:'left'}}>
                        {role.map((el,i)=>{
                            return <Option key={i} value={el}>{el}</Option>
                        })}
                    </Select>
                </Form.Item>

                
                <Form.Item
                label="New Password"
                name="password"
                rules={[{ required: true, message: 'Please enter a password' }]}
                >
                    <Input.Password placeholder="Please enter a password"/>
                </Form.Item>

                
            </Form>
            </Modal>
        );
    };

    const EditUser = () => {
        const [form] = Form.useForm();

        const handleEditOk = () => {
            form.validateFields().then(async (values) => {
                    try {
                    let data = {
                        id: dataSelected?.id,
                        name: values?.name,
                        email: values?.email,
                        role: values?.role,
                        password: values?.password
                    }
                    let res = await axios.post(`${url}/users/update`, data)
                    setUsers(res.data)
                        setIsEditVisible(false);
                    } catch (error) { 
                        setIsEditVisible(false);
                    }
                });
        };

        const handleEditCancel = () => {
            setIsEditVisible(false);
        };
        return (
            <Modal
            title="Edit From"
            visible={isEditVisible}
            onOk={handleEditOk}
            onCancel={handleEditCancel}
            >
            <Form form={form} layout="vertical">
                <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter a name' }]}
                initialValue={dataSelected?.name}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                label="Email"
                name="email"
                initialValue={dataSelected?.email}
                rules={[{ required: true, message: 'Please enter an email' }, { type: 'email', message: 'Please enter a valid email' }]}
                >
                    <Input/>
                </Form.Item>
                
                <Form.Item
                label="Role"
                name="role"
                rules={[{ required: true, message: 'Please enter a role' }]}
                initialValue={dataSelected?.role}
                >
                    <Select style={{ width: 120, textAlign:'left'}}>
                        {role.map((el,i)=>{
                            return <Option selected={dataSelected?.role == el ? true : false} key={i} value={el}>{el}</Option>
                        })}
                    </Select>
                </Form.Item>

                
                <Form.Item
                label="New Password"
                name="password"
                rules={[{ min:6 }]}
                >
                    <Input.Password placeholder="Leave blank if there are no changes"/>
                </Form.Item>

                
            </Form>
            </Modal>
        );
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={false}
        >
        <div>
            <Head title={title} />
            <div className="py-3">
                <div className="max-w-full mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className='max-full p-2'>
                            <Row gutter={[8,8]}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <div>
                                        <Button className='mb-2' style={{background:listColor.d}}  icon={<PlusOutlined />} onClick={() => setIsAddVisible(true)}>
                                            Add User
                                        </Button>
                                        <Table scroll={{ x: '100%' }} dataSource={users} columns={columns} />
                                        <AddUser />
                                        <EditUser />
                                    </div>
                                </Col>
                                
                            </Row>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>

        </Authenticated>
    )
}