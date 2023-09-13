import React, { useState,useRef  } from 'react';
import Authenticated from '@/Layouts/Authenticated';

import { Head } from '@inertiajs/inertia-react';
import { Col, Divider, Row, Select} from 'antd';
import { CheckCircleOutlined,AimOutlined,FormOutlined } from '@ant-design/icons';
import LabelIconSummary from '@/Components/Atoms/LabelIconSummary';
import {
 listColor
} from "../Const/colorPalete";
import {
 years
} from "../Const/dummy";

import TableAutoScrollPerolehan from '@/Components/Molecules/Perolehan/TableAutoScrollPerolehan';
export default function Welcome(props) {
    const {Option} = Select
    const {title,perolehanData,year,url} = props
    const column = ['No','Name', 'Potensi Luas', 'Aktivitas Terakhir']
    const [selectedYear, setSelectedYear] = useState(year)
    const handleYearChange = (value) => {
        setSelectedYear(value);
        window.location.href = `${url}/segment/perolehan/${value}`
      };
      
  
    function addCommas(numberString) {
        if(numberString!=null){
        if(numberString.toString().length > 1){
            const parts = numberString.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return parts.join(",");
        }else{
            return numberString
        }
        }else{
        return numberString
        }
    }
    console.log(perolehanData)
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
                                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                                       <LabelIconSummary
                                            title_first="Target HPL"
                                            title_second="Kekurangan HPL"
                                            item_text_first={perolehanData.perolehan_target?`${addCommas(perolehanData?.perolehan_target)} Ha`:'0'}
                                            item_text_second={perolehanData.perolehan_kekurangan? `${addCommas(perolehanData?.perolehan_kekurangan)} Ha`:'0'}
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
                                            item_text_first={perolehanData.perolehan_potensi? `${addCommas(perolehanData?.perolehan_potensi)} Ha`:'0'}
                                            item_text_second={perolehanData.perolehan_dalam_proses? `${addCommas(perolehanData?.perolehan_dalam_proses)} Ha`:'0'}
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
                                            item_text_first={perolehanData.perolehan_hpl? `${addCommas(perolehanData?.perolehan_hpl)} Ha (${addCommas(perolehanData?.perolehan_hpl_persen?.toFixed(2))}%)` : '-'}
                                            item_text_second={perolehanData.perolehan_lokasi_hpl? `${addCommas(perolehanData?.perolehan_lokasi_hpl)}`:'0'}
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
                                            <Row className='divide-y-2  divide-white-400 md:divide-x-2  md:divide-y-0 sm:divide-x-2 sm:divide-y-0'>
                                                {perolehanData.tahapans?.slice(0, 3).map((el, i) => {
                                                    let value = 0
                                                    perolehanData.sites?.map((e) => {
                                                     if(e.tahapan_urutan == el.tahapan){
                                                        value++
                                                     }  
                                                    })
                                                    return  (
                                                    <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                                                        <div className='p-2'>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{addCommas(value)}</p>
                                                            <span style={{fontSize:10,color:'#fff'}}>{el.perolehan_status_nama}</span>
                                                        </div>
                                                    </Col>
                                                    );
                                                })}
                                                
                                            </Row>
                                        </Col>
                                    </Row>
                                    
                                    {/* ------------- Blue Box ------------ */}
                                    <Row className='mb-2' gutter={[8,8]} style={{textAlign:'center', background:listColor.d, padding:5}}>
                                        <Col  xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className="divide-y-2  divide-white-400">
                                            <Row className='divide-y-2  divide-white-400 md:divide-x-2  md:divide-y-0 sm:divide-x-2 sm:divide-y-0'>
                                                {perolehanData.tahapans?.slice(3, 7).map((el, i) => {
                                                    let value = 0
                                                    perolehanData.sites?.map((e) => {
                                                     if(e.tahapan_urutan == el.tahapan){
                                                        value++
                                                     }  
                                                    })
                                                    return  (
                                                    <Col key={i} xs={24} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                                        <div className='p-2'>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{addCommas(value)}</p>
                                                            <span style={{fontSize:10,color:'#fff'}}>{el.perolehan_status_nama}</span>
                                                        </div>
                                                    </Col>
                                                    );
                                                })}
                                            </Row>
                                            <Row className='divide-y-2  divide-white-400 md:divide-x-2  md:divide-y-0 sm:divide-x-2 sm:divide-y-0'>
                                                 {perolehanData.tahapans?.slice(7, 11).map((el, i) => {
                                                    let value = 0
                                                    perolehanData.sites?.map((e) => {
                                                     if(e.tahapan_urutan == el.tahapan){
                                                        value++
                                                     }  
                                                    })
                                                    return  (
                                                    <Col key={i} xs={24} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                                        <div className='p-2'>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{addCommas(value)}</p>
                                                            <span style={{fontSize:10,color:'#fff'}}>{el.perolehan_status_nama}</span>
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
                                                {perolehanData.tahapans?.slice(11, 13).map((el, i) => {
                                                    let value = 0
                                                    perolehanData.sites?.map((e) => {
                                                     if(e.tahapan_urutan == el.tahapan){
                                                        value++
                                                     }  
                                                    })
                                                    return  (
                                                    <Col key={i} xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                                        <div className='p-2'>
                                                            <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{value}</p>
                                                            <span style={{fontSize:10,color:'#fff'}}>{el.perolehan_status_nama}</span>
                                                        </div>
                                                    </Col>
                                                    );
                                                })}
                                            </Row>
                                        </Col>
                                    </Row>
                                    
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                                    <TableAutoScrollPerolehan 
                                        source={perolehanData} 
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