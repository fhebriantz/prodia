import React, { useState,useRef  } from 'react';
import Authenticated from '@/Layouts/Authenticated';

import { Head } from '@inertiajs/inertia-react';
import { Card, Col, Divider, Row, Space, Table, Tag} from 'antd';
import { PushpinFilled,CheckCircleOutlined,AimOutlined,FundProjectionScreenOutlined,FieldTimeOutlined,FormOutlined } from '@ant-design/icons';
import LabelIconSummary from '@/Components/Atoms/LabelIconSummary';
import {
 listColor
} from "../Const/colorPalete";
import {
 pemanfaatanMaster,dataTablePemanfaatan
} from "../Const/dummy";
const styleHeader = { 
    color: '#555',
    fontSize: 11
}

import Label from '@/Components/Atoms/Label';
import TableAutoScrollPemanfaatan from '@/Components/Molecules/Pemanfaatan/TableAutoScrollPemanfaatan';
export default function Welcome(props) {
    const tableRef = useRef(null);
    const {title, description} = props
    const column = ['No','Name', 'Potensi Luas', 'Aktivitas Terakhir']
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
                                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                                       <LabelIconSummary
                                            title_first="Target HPL"
                                            title_second="Kekurangan HPL"
                                            item_text_first="14.109 Ha"
                                            item_text_second="12.123 Ha"
                                            bg_color={listColor.a}
                                            icon={
                                                <AimOutlined style={{fontSize:40}}/>
                                            }
                                        />
                                </Col>
                                
                                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                                       <LabelIconSummary
                                            title_first="Potensi HPL"
                                            title_second="Dalam Proses"
                                            item_text_first="13.360 Ha"
                                            item_text_second="13.244 Ha"
                                            bg_color={listColor.b}
                                            icon={
                                                <FormOutlined  style={{fontSize:40}}/>
                                            }
                                        />
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                                       <LabelIconSummary
                                            title_first="HPL Diperoleh"
                                            title_second="Lokasi HPL"
                                            item_text_first="11.642 (49%)"
                                            item_text_second="14"
                                            bg_color={listColor.c}
                                            icon={
                                                <CheckCircleOutlined style={{fontSize:40}}/>
                                            }
                                        />
                                </Col>
                                
                            </Row>
                            <Divider/>
                            <Row gutter={[8,8]}>
                                <Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={16}>
                                    {/* ------------- Yellow Box ------------ */}
                                    <Row className='mb-2' gutter={[8,8]} style={{textAlign:'center', background:listColor.b, padding:5}}>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                            <Row  className='divide-y-2  divide-white-400 lg:divide-x-2  lg:divide-y-0 md:divide-x-2 '>
                                                {pemanfaatanMaster.slice(0, 6).map((el, i) => {
                                                    return  (
                                                    <Col xs={24} sm={24} md={24} lg={4} xl={4} xxl={4}>
                                                        <div className='p-2'>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{el.value}</p>
                                                            <span style={{fontSize:10,color:'#fff'}}>{el.name}</span>
                                                        </div>
                                                    </Col>
                                                    );
                                                })}
                                                
                                            </Row>
                                        </Col>
                                    </Row>

                                    {/* ------------- green Box ------------ */}
                                    <Row className='mb-2' gutter={[8,8]} style={{textAlign:'center', background:listColor.c, padding:5}}>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                            <Row className='divide-y-2  divide-white-400 md:divide-x-2  md:divide-y-0 sm:divide-x-2 sm:divide-y-0'>
                                                {pemanfaatanMaster.slice(11, 13).map((el, i) => {
                                                    return  (
                                                    <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                                        <div className='p-2'>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{el.value}</p>
                                                            <span style={{fontSize:10,color:'#fff'}}>{el.name}</span>
                                                        </div>
                                                    </Col>
                                                    );
                                                })}
                                            </Row>
                                        </Col>
                                    </Row>
                                    
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                                    <TableAutoScrollPemanfaatan 
                                        source={dataTablePemanfaatan} 
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