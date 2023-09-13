import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';

import { Head } from '@inertiajs/inertia-react';
import { Card, Col, Divider, Row, Space, Table, Tag} from 'antd';
import { PushpinFilled,CheckCircleOutlined,AimOutlined,FundProjectionScreenOutlined,FieldTimeOutlined,FormOutlined } from '@ant-design/icons';
import LabelIconSummary from '@/Components/Atoms/LabelIconSummary';
import {
 listColor
} from "../Const/colorPalete";
import {
 perolehanMaster,dataTablePerolehan
} from "../Const/dummy";
const styleHeader = { 
    color: '#555',
    fontSize: 11
}

import isometric from '../../../public/image/isometric_file.jpg'
import Label from '@/Components/Atoms/Label';
import ExpandibleTable from '@/Components/ExpandibleTable';
export default function Welcome(props) {
    
    const {title, description} = props
   
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
                                <Col xs={24} sm={24} md={24} lg={8} xl={10}>
                                       <img src={isometric} style={{height:'auto', width:'100%'}}></img>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={16} xl={14} className='p-2'>
                                       <p style={{fontSize : 18, color: '#555'}} className="mt-4">Adapun Dasar Layanan Informasi Publik mengacu pada :</p>
                                       <Divider style={{borderWidth:1, background: "#599B6B"}}/>
                                       
                                       <table class='text-sm'>
                                            <tr >
                                                <td>1.</td>
                                                <td><a href='https://dashboard.banktanah.id/assets/upload/konten/PERATURAN_PRESIDEN_REPUBLIK_INDONESIA_NOMOR_113_TAHUN_2O21.pdf'>PERATURAN PRESIDEN REPUBLIK INDONESIA NOMOR 113 TAHUN 2O21</a></td>
                                            </tr>
                                            <tr >
                                                <td>2.</td>
                                                <td><a href='https://dashboard.banktanah.id/assets/upload/konten/PERATURAN_PEMERINTAH_REPUBLIK_INDONESIA_NOMOR_64_TAHUN_2O21.pdf'>PERATURAN PEMERINTAH REPUBLIK INDONESIA NOMOR 64 TAHUN 2O21</a></td>
                                            </tr>
                                        </table>
                                       </Col>
                                       
                                        {/* <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                            <ExpandibleTable/>
                                        </Col> */}
                            </Row>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>

        </Authenticated>
    )
}