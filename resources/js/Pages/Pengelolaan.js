import React, { useState,useRef } from 'react';
import Authenticated from '@/Layouts/Authenticated';

import { Head } from '@inertiajs/inertia-react';
import { Button,Card, Select,DatePicker,Col, Divider, Row, Space, Table, Tag,Tooltip} from 'antd';
import { PushpinFilled,CheckCircleOutlined,AimOutlined,FundProjectionScreenOutlined,FieldTimeOutlined,FormOutlined } from '@ant-design/icons';
import LabelIconSummary from '@/Components/Atoms/LabelIconSummary';

const {Option} = Select
import {
 listColor
} from "../Const/colorPalete";
import {
 pengelolaanMaster,dataTablePengelolaan,years
} from "../Const/dummy";
const styleHeader = { 
    color: '#555',
    fontSize: 11
}

import Label from '@/Components/Atoms/Label';
import TableAutoScrollPengelolaan from '@/Components/Molecules/Pengelolaan/TableAutoScrollPengelolaan';
export default function Welcome(props) {
    const tableRef = useRef(null);
    const {title,data,year,url} = props
    const [selectedYear, setSelectedYear] = useState(year)
    const handleYearChange = (value) => {
        setSelectedYear(value);
        window.location.href = `${url}/segment/pengelolaan/${value}`
      };
    function addCommas(numberString) {
        if(numberString!=null){
        if(numberString.toString().length > 1){
            const parts = numberString.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return `${parts.join(",")}`;
        }else{
            return numberString
        }
        }else{
        return numberString
        }
    }
    console.log(data)
    const column = ['No','Kode Lokasi', 'Kota', 'Provinsi', 'Nama Proyek', 'Luas Pengembangan', 'Tipe Proyek', 'Biaya (Rp)', 'Tanggal Mulai', 'Tanggal Selesai']
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
                        <div className='max-full pt-2  px-2'>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <p style={{fontSize:18, fontWeight:600}}>{title}</p>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <div className='text-right'>
                                        <Select defaultValue={selectedYear} style={{ width: 120, textAlign:'left'}} onChange={handleYearChange}>
                                            {years.map((el)=>{
                                                return <Option value={el}>{el}</Option>
                                            })}
                                        </Select>
                                    </div>
                                </Col>
                            </Row>
                            
                        </div>
                        <div className='max-full p-2'>
                            <Row gutter={[8,8]}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                    <Row gutter={[8,8]}>
                                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                            <LabelIconSummary
                                                    title_first="Luas Pengembangan"
                                                    title_second="Biaya Pengembangan"
                                                    item_text_first={data.luas_pengembangan?`${addCommas(data?.luas_pengembangan)} Ha`:'0'}
                                                    item_text_second={data.biaya_pengembangan?`Rp ${addCommas(parseFloat(data?.biaya_pengembangan).toFixed(0))}`:'0'}
                                                    bg_color={listColor.c}
                                                    icon={
                                                        <CheckCircleOutlined style={{fontSize:30}}/>
                                                    }
                                                />
                                        </Col>
                                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                            <LabelIconSummary
                                                    title_first="Target Luas"
                                                    title_second="Target to Go"
                                                    item_text_first={data.target?`${addCommas(data?.target)} Ha`:'0'}
                                                    item_text_second={data.target_to_go?`${addCommas(data?.target_to_go)} Ha`:'0'}
                                                    bg_color={listColor.a}
                                                    icon={
                                                        <AimOutlined style={{fontSize:30}}/>
                                                    }
                                                />
                                        </Col>
                                        
                                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                            <LabelIconSummary
                                                    title_first="Lokasi"
                                                    title_second="Proyek"
                                                    item_text_first={data.jumlah_lokasi?`${addCommas(data?.jumlah_lokasi)}`:'0'}
                                                    item_text_second={data.jumlah_proyek?`${addCommas(data?.jumlah_proyek)}`:'0'}
                                                    bg_color={listColor.b}
                                                    icon={
                                                        <FormOutlined  style={{fontSize:30}}/>
                                                    }
                                                />
                                        </Col>
                                        
                                    </Row>
                                    
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                    <TableAutoScrollPengelolaan 
                                        source={data?.proyeks} 
                                        column={column}
                                        height={370}
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