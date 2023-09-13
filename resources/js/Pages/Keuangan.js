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
 keuanganMaster,dataTableKeuangan, years
} from "../Const/dummy";
const styleHeader = { 
    color: '#555',
    fontSize: 11
}

import Label from '@/Components/Atoms/Label';
import TableAutoScrollKeuangan from '@/Components/Molecules/Keuangan/TableAutoScrollKeuangan';
import CardBarLineChart from '@/Components/Atoms/CardBarLineChart';
import LabelBackground from '@/Components/Atoms/LabelBackground';
export default function Welcome(props) {
    const tableRef = useRef(null);
    
    const {title,data,year,url} = props
    const {Option} = Select
    const [selectedYear, setSelectedYear] = useState(year)
    const handleYearChange = (value) => {
        setSelectedYear(value);
        window.location.href = `${url}/segment/keuangan/${value}`
      };
    function addCommas(numberString) {
        if(numberString!=null){
        if(numberString.toString().length > 1){
            const parts = numberString.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return `Rp ${parts.join(",")}`;
        }else{
            return numberString
        }
        }else{
        return numberString
        }
    }
    console.log(data)
    const column = ['No','Month & Year', 'Revenue', 'Growth','Expense','Profit']
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
                                <Col xs={24} sm={24} md={24} lg={24} xl={10}>
                                    <Row  gutter={[8,8]} style={{textAlign:'center', padding:5}}>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                            <Row className=''>
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2' style={{ background:listColor.c, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.pendapatan_komersial? addCommas(parseFloat(data?.pendapatan_komersial).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>Pendapatan Komersial</span>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2'  style={{ background:listColor.c, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.pendapatan_usaha_lainnya? addCommas(parseFloat(data?.pendapatan_usaha_lainnya).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>Pendapatan Usaha Lainnya</span>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2'  style={{ background:listColor.b, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.income_revenue? addCommas(parseFloat(data?.income_revenue).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>PENDAPATAN</span>
                                                        </div>
                                                    </Col>
                                                
                                            </Row>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row  gutter={[8,8]} style={{textAlign:'center',  padding:5}}>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                            <Row className=''>
                                                
                                                    <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                                        <div className='p-2' style={{ background:listColor.a, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.beban_pokok_usaha_lainnya? addCommas(parseFloat(data?.beban_pokok_usaha_lainnya).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>Beban Pokok Usaha Lainnya</span>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                                        <div className='p-2' style={{ background:listColor.b, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.beban_pokok_usaha_lainnya? addCommas(parseFloat(data?.beban_pokok_usaha_lainnya).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>HARGA POKOK PENJUALAN</span>
                                                        </div>
                                                    </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row  gutter={[8,8]} style={{textAlign:'center', padding:5}}>
                                        <Col  xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className="">
                                            <Row className=''>
                                                    <Col  xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2' style={{ background:listColor.a, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.biaya_personalia? addCommas(parseFloat(data?.biaya_personalia).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>Biaya Personalia</span>
                                                        </div>
                                                    </Col>
                                                    <Col  xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2' style={{ background:listColor.a, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.biaya_sewa? addCommas(parseFloat(data?.biaya_sewa).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>Biaya Sewa</span>
                                                        </div>
                                                    </Col>
                                                    <Col  xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2' style={{ background:listColor.a, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.biaya_kantor? addCommas(parseFloat(data?.biaya_kantor).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>Biaya Kantor</span>
                                                        </div>
                                                    </Col>
                                            </Row>
                                            <Row className=''>
                                                    <Col  xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2' style={{ background:listColor.a, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.biaya_umum_dan_administrasi? addCommas(parseFloat(data?.biaya_umum_dan_administrasi).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>Biaya Umum dan Admininstrasi</span>
                                                        </div>
                                                    </Col>
                                                    <Col  xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2' style={{ background:listColor.a, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.biaya_umum_lainnya? addCommas(parseFloat(data?.biaya_umum_lainnya).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>Biaya Umum Lainnya</span>
                                                        </div>
                                                    </Col>
                                                    <Col  xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2' style={{ background:listColor.a, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.biaya_perjalanan_dinas? addCommas(parseFloat(data?.biaya_perjalanan_dinas).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>Biaya Perjalanan Dinas</span>
                                                        </div>
                                                    </Col>
                                            </Row>
                                            <Row className=''>
                                                    <Col  xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2' style={{ background:listColor.a, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.biaya_pajak? addCommas(parseFloat(data?.biaya_pajak).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>Biaya Pajak</span>
                                                        </div>
                                                    </Col>
                                                    <Col  xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2' style={{ background:listColor.a, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.biaya_pemasaran? addCommas(parseFloat(data?.biaya_pemasaran).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>Biaya Pemasaran</span>
                                                        </div>
                                                    </Col>
                                                    <Col  xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2' style={{ background:listColor.b, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{addCommas(
                                                                (parseFloat(data.biaya_personalia? data?.biaya_personalia : 0)+
                                                                parseFloat(data.biaya_sewa? data?.biaya_sewa : 0)+
                                                                parseFloat(data.biaya_kantor? data?.biaya_kantor : 0)+
                                                                parseFloat(data.biaya_umum_dan_administrasi? data?.biaya_umum_dan_administrasi : 0)+
                                                                parseFloat(data.biaya_umum_lainnya? data?.biaya_umum_lainnya : 0)+
                                                                parseFloat(data.biaya_perjalanan_dinas? data?.biaya_perjalanan_dinas : 0)+
                                                                parseFloat(data.biaya_pajak? data?.biaya_pajak : 0)+
                                                                parseFloat(data.biaya_pemasaran? data?.biaya_pemasaran : 0)).toFixed(0)
                                                            )}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>BIAYA USAHA</span>
                                                        </div>
                                                    </Col>
                                            </Row>
                                            
                                        </Col>
                                        
                                    </Row>
                                    <hr/>
                                    
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={14} >
                                    <Row  gutter={[8,8]} style={{textAlign:'center',  padding:5}}>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                            <Row className=''>
                                                    <Col xs={24} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                                        <div className='p-2' style={{ background:listColor.c, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.pendapatan_jasa_giro? addCommas(parseFloat(data?.pendapatan_jasa_giro).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>Pendapatan Jasa Giro</span>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                                        <div className='p-2' style={{ background:listColor.c, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.pendapatan_bunga_deposito? addCommas(parseFloat(data?.pendapatan_bunga_deposito).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>Penadapatan Bunga Deposito</span>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                                        <div className='p-2' style={{ background:listColor.c, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.pendapatan_non_operasi_lainnya? addCommas(parseFloat(data?.pendapatan_non_operasi_lainnya).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>Pendapatan Non Operasi Lainnya</span>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                                        <div className='p-2' style={{ background:listColor.b, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.other_incomes? addCommas(
                                                                (parseFloat(data?.other_incomes)).toFixed(0)
                                                            ):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>OTHER INCOMES</span>
                                                        </div>
                                                    </Col>
                                                
                                            </Row>
                                        </Col>
                                    </Row>
                                    
                                    <hr/>
                                    <Row  gutter={[8,8]} style={{textAlign:'center',  padding:5}}>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                            <Row className=''>
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2' style={{ background:listColor.a, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.biaya_pajak_atas_bunga? addCommas(parseFloat(data?.biaya_pajak_atas_bunga).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>Biaya Pajak atas Bunga</span>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2' style={{ background:listColor.a, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.biaya_administrasi_bank? addCommas(parseFloat(data?.biaya_administrasi_bank).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>Biaya Administrasi Bank</span>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2' style={{ background:listColor.b, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.other_expenses? addCommas(
                                                                (parseFloat(data?.other_expenses)).toFixed(0)
                                                            ):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>OTHER EXPENSES</span>
                                                        </div>
                                                    </Col>
                                                
                                            </Row>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row  gutter={[8,8]} style={{textAlign:'center', padding:5}}>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                            <Row className=''>
                                                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                                        <div className='p-2' style={{ background:listColor.b, minHeight:100, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.pajak? addCommas(parseFloat(data?.pajak).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>PAJAK</span>
                                                        </div>
                                                    </Col>
                                                    
                                                
                                            </Row>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row  gutter={[8,8]} style={{textAlign:'center', padding:5}}>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                            <Row className=''>
                                                    <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                                        <div className='p-2' style={{ background:listColor.d, minHeight:80, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{data.gross_profit? addCommas(parseFloat(data?.gross_profit).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>GROSS PROFIT</span>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                                        <div className='p-2' style={{ background:listColor.d, minHeight:80, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>
                                                                {addCommas((
                                                                    parseFloat(data.gross_profit? data?.gross_profit:0)
                                                                    -
                                                                    (
                                                                        parseFloat(data.biaya_personalia? data?.biaya_personalia : 0)+
                                                                        parseFloat(data.biaya_sewa? data?.biaya_sewa : 0)+
                                                                        parseFloat(data.biaya_kantor? data?.biaya_kantor : 0)+
                                                                        parseFloat(data.biaya_umum_dan_administrasi? data?.biaya_umum_dan_administrasi : 0)+
                                                                        parseFloat(data.biaya_umum_lainnya? data?.biaya_umum_lainnya : 0)+
                                                                        parseFloat(data.biaya_perjalanan_dinas? data?.biaya_perjalanan_dinas : 0)+
                                                                        parseFloat(data.biaya_pajak? data?.biaya_pajak : 0)+
                                                                        parseFloat(data.biaya_pemasaran? data?.biaya_pemasaran : 0)
                                                                    )
                                                                ).toFixed(0)
                                                                    
                                                                )}</p>
                                                            <span style={{fontSize:12,color:'#fff'}}>OPERATING PROFIT</span>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                                        <div className='p-2' style={{ background:listColor.d, minHeight:109, border:'1px solid #fafafa'}}>
                                                            <p style={{fontSize:32, color:'#fff', fontWeight:600}}>{data.net_profit? addCommas(parseFloat(data?.net_profit).toFixed(0)):'0'}</p>
                                                            <span style={{fontSize:18,color:'#fff'}}>NET PROFIT</span>
                                                        </div>
                                                    </Col>
                                                
                                            </Row>
                                        </Col>
                                    </Row>
                                    <hr/>
                                </Col>
                                

                                {/* <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                                   <TableAutoScrollKeuangan
                                        source={dataTableKeuangan} 
                                        column={column}
                                        height={500}
                                    />
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