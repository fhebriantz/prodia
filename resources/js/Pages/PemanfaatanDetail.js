import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Link, Head } from '@inertiajs/inertia-react';
import { Card, Col, Row,DatePicker, Table, Divider} from 'antd';

const { Column, ColumnGroup } = Table;
import {
 listColor
} from "../Const/colorPalete";

import {
 linechart, speedometer,columntable,population,datatable, piechart,stackedbarchartvertical, stackedbarcharthorizontal, barchart,donnutChart, inprogress,done,todo, columnPemanfaatan, dataPemanfaatan, columnPemanfaatanMap, dataPemanfaatanMap
} from "../Const/dummy";
import TableWithoutHeader from '@/Components/Molecules/Pemanfaatan/TableWithoutHeader';
import CardTable from '@/Components/Atoms/CardTable';
import EmbeddedFrame from '@/Components/Atoms/EmbeddedFrame';
import Tableau from '@/Components/Atoms/Tableau';
import ExpandibleTable from '@/Components/ExpandibleTable';
export default function Welcome(props) {
    const {title, description, id} = props
    
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
                                    <Row gutter={[8,8]}>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                                            <Tableau/>
                                        </Col>
                                        
                                        <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                                            <TableWithoutHeader name={id} height={300}/>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                                            <Table pagination={false} dataSource={dataPemanfaatan} size="small" scroll={{ y: 260 }}>
                                                <ColumnGroup title={<span style={{ fontSize: 12 }}>DATA PROGRES</span>}>
                                                    <Column title={<span style={{ fontSize: 11 }}>No</span>}  width={50} dataIndex="key" key="key" render={(text) => <p style={{ fontSize: 11 }}>{text}</p>}/>
                                                    <Column title={<span style={{ fontSize: 11 }}>Tahap</span>}  dataIndex="tahap" key="tahap" render={(text) => <p style={{ fontSize: 11 }}>{text}</p>}/>
                                                    <Column title={<span style={{ fontSize: 11 }}>Waktu</span>} width={100}  dataIndex="waktu" key="waktu" render={(text) => <p style={{ fontSize: 11 }}>{text}</p>}/>
                                                </ColumnGroup>
                                            </Table>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                                            <Table pagination={false} dataSource={null} size="small" scroll={{ y: 260 }}>
                                                <ColumnGroup title={<span style={{ fontSize: 12 }}>Sertifikat HPL</span>}>
                                                    <Column title={<span style={{ fontSize: 11 }}>No</span>}  width={50} dataIndex="key" key="key" render={(text) => <p style={{ fontSize: 11 }}>{text}</p>}/>
                                                    <Column title={<span style={{ fontSize: 11 }}>Kode Bidang</span>}  dataIndex="kode_bidang" key="kode_bidang" render={(text) => <p style={{ fontSize: 11 }}>{text}</p>}/>
                                                    <Column title={<span style={{ fontSize: 11 }}>No. Sertifikat</span>} width={100}  dataIndex="no_sertifikat" key="no_sertifikat" render={(text) => <p style={{ fontSize: 11 }}>{text}</p>}/>
                                                    <Column title={<span style={{ fontSize: 11 }}>Luas Bidang</span>} width={100}  dataIndex="luas_bidang" key="luas_bidang" render={(text) => <p style={{ fontSize: 11 }}>{text}</p>}/>
                                                </ColumnGroup>
                                            </Table>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={16}>
                                            <Table pagination={false} dataSource={null} size="small" scroll={{ y: 260 }}>
                                                <ColumnGroup title={<span style={{ fontSize: 12 }}>Kendala Pemanfaatan</span>}>
                                                    <Column title={<span style={{ fontSize: 11 }}>No</span>}  width={50} dataIndex="key" key="key" render={(text) => <p style={{ fontSize: 11 }}>{text}</p>}/>
                                                    <Column title={<span style={{ fontSize: 11 }}>Kendala</span>}  dataIndex="kendala" key="kendala" render={(text) => <p style={{ fontSize: 11 }}>{text}</p>}/>
                                                    <Column title={<span style={{ fontSize: 11 }}>Status</span>} width={100}  dataIndex="status" key="status" render={(text) => <p style={{ fontSize: 11 }}>{text}</p>}/>
                                                </ColumnGroup>
                                            </Table>
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