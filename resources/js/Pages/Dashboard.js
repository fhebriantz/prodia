import React, { useState,useEffect,useContext  } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Link,Head } from '@inertiajs/inertia-react';
import CardLabelPerolehan from "../Components/Molecules/Dashboard/CardLabelPerolehan"
import CardLabelPendapatan from "../Components/Molecules/Dashboard/CardLabelPendapatan"
import CardLabelPengelolaan from "../Components/Molecules/Dashboard/CardLabelPengelolaan"
import CardLabelBiaya from "../Components/Molecules/Dashboard/CardLabelBiaya"
import { Card, Col, Row,DatePicker,Select} from 'antd';
import {
 listColor
} from "../Const/colorPalete";
import {
 years
} from "../Const/dummy";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faListCheck,faArrowsSpin,faUserCheck,faMoneyBill,faUsers,faSackDollar} from '@fortawesome/free-solid-svg-icons';

import CardLabelPemanfaatan1 from '@/Components/Molecules/Dashboard/CardLabelPemanfaatan1';
import CardLabelPemanfaatan2 from '@/Components/Molecules/Dashboard/CardLabelPemanfaatan2';
import CardLabelPemanfaatan3 from '@/Components/Molecules/Dashboard/CardLabelPemanfaatan3';
import CardIncomeStatement from '@/Components/Molecules/Dashboard/CardIncomeStatement';
export default function Welcome(props) {
    const {title,data,year,url,token} = props
    const {Option} = Select
    const [selectedYear, setSelectedYear] = useState(year)
    const handleYearChange = (value) => {
        setSelectedYear(value);
        window.location.href = `${url}/dashboard/${value}`
      };
      console.log(data)
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
                        

                        <div className='max-full pt-2  px-2 text-right'>
                        <span className='mr-2'>Select Year</span>
                        <Select defaultValue={selectedYear} style={{ width: 120, textAlign:'left'}} onChange={handleYearChange}>
                            {years.map((el)=>{
                                return <Option value={el}>{el}</Option>
                            })}
                        </Select>
                        </div>

                        <div className='max-full p-2'>
                            <Row gutter={[8,8]}>
                                <Col  xs={24} sm={24} md={24} lg={24} xl={12}>
                                    <Row gutter={[8,8]}>
                                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                            <Card headStyle={{background:`${listColor.a}`}} className='max-w-full' size="small" title={<span style={{color:'#fff'}}>{<><FontAwesomeIcon icon={faListCheck} /> Perolehan</>}</span>} extra={<a style={{color:'#fff'}} href={`/segment/perolehan/${year}`}>More</a>} >
                                                <CardLabelPerolehan 
                                                    title="Perolehan"
                                                    subtitle="Actual vs Target (Ha)"
                                                    data={data}
                                                />
                                            </Card>
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                            <Card headStyle={{background:`${listColor.b}`}} className='max-w-full' size="small" title={<span style={{color:'#fff'}}>{<><FontAwesomeIcon icon={faArrowsSpin} /> Pengelolaan</>}</span>} extra={<a style={{color:'#fff'}} href={`/segment/pengelolaan/${year}`}>More</a>} >
                                                <CardLabelPengelolaan 
                                                    title="Pengembangan Lahan"
                                                    subtitle="Actual vs Target (Ha)"
                                                    data={data}
                                                />
                                            </Card>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                            <Card headStyle={{background:`${listColor.a}`}} className='max-w-full' size="small" title={<span style={{color:'#fff'}}>{<><FontAwesomeIcon icon={faUsers} /> Pendistribusian</>}</span>} extra={<a style={{color:'#fff'}} href={`/segment/pendistribusian/${year}`}>More</a>} >
                                                <div style={{width: '100%' , height:'auto'}}>
                                                    <Row>
                                                        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                                                            <CardLabelPemanfaatan1 
                                                                title="Pemanfaatan Komersial"
                                                                subtitle="Actual vs Target (Ha)"
                                                                data={data}
                                                            />
                                                        </Col>
                                                        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                                                            <CardLabelPemanfaatan2 
                                                                title="Pemanfaatan Tanah RA"
                                                                subtitle="Actual vs Target (Ha)"
                                                                data={data}
                                                            />
                                                        </Col>
                                                        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                                                            <CardLabelPemanfaatan3 
                                                                title="Distribusi Lainnya"
                                                                subtitle="Actual vs Target (Ha)"
                                                            />
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col  xs={24} sm={24} md={24} lg={24} xl={12}>
                                    <Row gutter={[8,8]}>
                                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                            <Card headStyle={{background:`${listColor.c}`}} className='max-w-full' size="small" title={<span style={{color:'#fff'}}>{<><FontAwesomeIcon icon={faUserCheck} /> Pendapatan</>}</span>} extra={<a style={{color:'#fff'}} href="#">More</a>} >
                                            <CardLabelPendapatan 
                                                    title="Pendapatan Actual vs Target"
                                                    subtitle="(Juta Rupiah)"
                                                    data={data}
                                                />
                                            </Card>
                                        </Col>
                                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                            <Card headStyle={{background:`${listColor.d}`}} className='max-w-full' size="small" title={<span style={{color:'#fff'}}>{<><FontAwesomeIcon icon={faMoneyBill} /> Biaya</>}</span>} extra={<a style={{color:'#fff'}} href="#">More</a>} >
                                                <CardLabelBiaya 
                                                    title="Biaya"
                                                    subtitle="(Juta Rupiah)"
                                                />
                                            </Card>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                            <Card headStyle={{background:`${listColor.c}`}} className='max-w-full' size="small" title={<span style={{color:'#fff'}}>{<><FontAwesomeIcon icon={faSackDollar} /> Income Statement</>}</span>} extra={<a style={{color:'#fff'}} href={`/segment/keuangan/${year}`}>More</a>} >
                                                <CardIncomeStatement 
                                                    data={data}
                                                />
                                            </Card>
                                        </Col>
                                    </Row>
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