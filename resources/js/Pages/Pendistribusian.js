import React, { useState,useRef  } from 'react';
import Authenticated from '@/Layouts/Authenticated';

import { Head } from '@inertiajs/inertia-react';
import { Anchor, Card, Col, Divider,Select , Row, Space, Table, Tag} from 'antd';
import { PushpinFilled,CheckCircleOutlined,AimOutlined,FundProjectionScreenOutlined,FieldTimeOutlined,FormOutlined } from '@ant-design/icons';
import LabelIconSummary from '@/Components/Atoms/LabelIconSummary';
import {
 listColor
} from "../Const/colorPalete";
import {
 pendistribusianMaster,dataTablePendistribusian, years
} from "../Const/dummy";
const styleHeader = { 
    color: '#555',
    fontSize: 11
}

import Label from '@/Components/Atoms/Label';
import TableAutoScrollPendistribusian from '@/Components/Molecules/Pendistribusian/TableAutoScrollPendistribusian';
import CardBarLineChart from '@/Components/Atoms/CardBarLineChart';
import LabelBackground from '@/Components/Atoms/LabelBackground';
export default function Welcome(props) {
    const tableRef = useRef(null);
    
    const {title,data,year,url} = props
    const {Option} = Select
    const [selectedYear, setSelectedYear] = useState(year)
    const handleYearChange = (value) => {
        setSelectedYear(value);
        window.location.href = `${url}/segment/pendistribusian/${value}`
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
    const column = ['No','Kode Lokasi', 'Kota', 'Provinsi','Potensi Luas','Potensi Revenue','Realisasi Luas','Realisasi Revenue']
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
                            <Row  gutter={[8,8]}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                    <Row  gutter={[8,8]} style={{textAlign:'center', padding:5}}>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                            <Row className=''>
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2' style={{ background:listColor.c, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.lokasi? addCommas(parseFloat(data?.lokasi).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>LOKASI</span>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2'  style={{ background:listColor.c, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.potensi_luas? addCommas(parseFloat(data?.potensi_luas).toFixed(2)) + ' Ha':'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>POTENSI LUAS</span>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2'  style={{ background:listColor.c, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.realisasi_luas? addCommas(parseFloat(data?.realisasi_luas).toFixed(2)) + ' Ha':'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>REALISASI LUAS</span>
                                                        </div>
                                                    </Col>
                                                
                                            </Row>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row  gutter={[8,8]} style={{textAlign:'center', padding:5}}>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                            <Row className=''>
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2' style={{ background:listColor.c, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.potensi_revenue?'Rp '+ addCommas(parseFloat(data?.potensi_revenue).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>POTENSI REVENUE</span>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2'  style={{ background:listColor.c, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.realisasi_revenue? 'Rp '+ addCommas(parseFloat(data?.realisasi_revenue).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>REALISASI REVENUE</span>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2'  style={{ background:listColor.b, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.calon_mitra? addCommas(parseFloat(data?.calon_mitra).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>CALON MITRA</span>
                                                        </div>
                                                    </Col>
                                                
                                            </Row>
                                        </Col>
                                    </Row>
                                    <hr/><Row  gutter={[8,8]} style={{textAlign:'center', padding:5}}>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                            <Row className=''>
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2' style={{ background:listColor.b, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.pendapatan_kerjasama? addCommas(parseFloat(data?.pendapatan_kerjasama).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>PENDAPATAN KERJASAMA</span>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2'  style={{ background:listColor.b, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.pendapatan_jasa_management_lainnya? addCommas(parseFloat(data?.pendapatan_jasa_management_lainnya).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>PENDAPATAN JASA MANAGEMENT LAINNYA</span>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2'  style={{ background:listColor.b, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.tanah_komersial? addCommas(parseFloat(data?.tanah_komersial).toFixed(2)) + ' Ha':'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>TANAH KOMERSIAL</span>
                                                        </div>
                                                    </Col>
                                                
                                            </Row>
                                        </Col>
                                    </Row>
                                    <hr/><Row  gutter={[8,8]} style={{textAlign:'center', padding:5}}>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                            <Row className=''>
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2' style={{ background:listColor.b, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.tanah_non_komersial? addCommas(parseFloat(data?.tanah_non_komersial).toFixed(2))+ ' Ha':'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>TANAH NON KOMERSIAL</span>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2'  style={{ background:listColor.d, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.jual_beli? addCommas(parseFloat(data?.jual_beli).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>JUAL - BELI</span>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2'  style={{ background:listColor.d, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.sewa? addCommas(parseFloat(data?.sewa).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>SEWA 3 TAHUN</span>
                                                        </div>
                                                    </Col>
                                                
                                            </Row>
                                        </Col>
                                    </Row>
                                    <hr/><Row  gutter={[8,8]} style={{textAlign:'center', padding:5}}>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                            <Row className=''>
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2' style={{ background:listColor.d, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.reforma? addCommas(parseFloat(data?.reforma).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>REVORMA AGRARIA</span>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2'  style={{ background:listColor.d, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.psn? addCommas(parseFloat(data?.psn).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>PROYEK STRATEGIS NASIONAL</span>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2'  style={{ background:listColor.d, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.kasiba? addCommas(parseFloat(data?.kasiba).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>KAWASAN SIAP BANGUN</span>
                                                        </div>
                                                    </Col>
                                                
                                            </Row>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={12} >
                                    <TableAutoScrollPendistribusian
                                        source={data?.pemanfaatans} 
                                        column={column}
                                        height={500}
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