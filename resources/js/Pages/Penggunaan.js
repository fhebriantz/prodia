import React, { useState,useRef  } from 'react';
import Authenticated from '@/Layouts/Authenticated';

import { Head } from '@inertiajs/inertia-react';
import { Card, Col, Divider, Row , Table, Tag} from 'antd';
import { PushpinFilled,CheckCircleOutlined,AimOutlined,FundProjectionScreenOutlined,FieldTimeOutlined,FormOutlined } from '@ant-design/icons';
import LabelIconSummary from '@/Components/Atoms/LabelIconSummary';
import {
 linechart, speedometer,columntable,population,datatable, piechart,stackedbarchartvertical, dataTablePenggunaan, barchart,donnutChart, inprogress,done,todo
} from "../Const/dummy";
const styleHeader = { 
    color: '#555',
    fontSize: 11
}

import Label from '@/Components/Atoms/Label';
import TableAutoScrollPenggunaan from '@/Components/Molecules/Penggunaan/TableAutoScrollPenggunaan';
import CardProgressGaugeChart from '@/Components/Atoms/CardProgressGaugeChart';
export default function Welcome(props) {
    const tableRef = useRef(null);
    const {title, description} = props
    const column = ['Task','AssignedTo', 'Priority', 'Status', 'Complete']
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
                                
                                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                    <Card style={{textAlign:'center'}} size='small'  title="Completed Tasks">
                                        <p style={{fontSize:32, fontWeight:600, color:'#DA542E'}}>256</p>
                                    </Card>
                                </Col>
                                
                                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                    <Card  style={{textAlign:'center'}}  size='small' title="Tasks In Progress">
                                        <p style={{fontSize:32, fontWeight:600, color:'#FFB848'}}>256</p>
                                    </Card>
                                </Col>
                                
                                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                    <Card style={{textAlign:'center'}}  size='small'  title="Not Started Tasks">
                                        <p style={{fontSize:32, fontWeight:600, color:'#28B779'}}>256</p>
                                    </Card>
                                </Col>
                                
                                
                            </Row>
                            <Divider/>
                            <Row gutter={[8,8]}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                    <TableAutoScrollPenggunaan 
                                        source={dataTablePenggunaan} 
                                        column={column}
                                        height={300}
                                    />
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