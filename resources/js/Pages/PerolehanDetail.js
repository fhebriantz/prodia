import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Link, Head } from '@inertiajs/inertia-react';
import { Card, Col, Row,DatePicker, Table, Divider} from 'antd';
import moment from "moment"

const { Column, ColumnGroup } = Table;
import {
 listColor
} from "../Const/colorPalete";

import {
 linechart, speedometer,columntable,population,datatable, piechart,stackedbarchartvertical, stackedbarcharthorizontal, barchart,donnutChart, inprogress,done,todo, columnPerolehan, dataPerolehan, columnPerolehanMap, dataPerolehanMap
} from "../Const/dummy";
import TableWithoutHeader from '@/Components/Molecules/Perolehan/TableWithoutHeader';
import CardTable from '@/Components/Atoms/CardTable';
import EmbeddedFrame from '@/Components/Atoms/EmbeddedFrame';
import Tableau from '@/Components/Atoms/Tableau';
import ExpandibleTable from '@/Components/ExpandibleTable';
export default function Welcome(props) {
    const {title, perolehanData, id} = props
    const tahapan = perolehanData.tahapans?.map((el, i) => {
        let date_start = []
        let date_end = []
        perolehanData.progres?.map((e, li) => {
            if(el.perolehan_status_id == e.perolehan_status_id){
                date_start.push(e.tgl_awal)
                date_end.push(e.tgl_akhir)
            }
        })
        let dateStart = date_start.sort();
        let dateEnd = date_end.sort();
        const tgl_awal = date_start.length>0?dateStart[0]:null
        const tgl_akhir = date_end.length>0?dateEnd[date_end.length - 1]:null
        const startDate = moment(tgl_awal);
        const endDate = moment(tgl_akhir);
        const duration = moment.duration(endDate.diff(startDate)).asDays();
        return  {
            key : i+1,
            tahap : el.perolehan_status_nama,
            waktu : tgl_akhir==null&&tgl_awal!=null?'Sedang Berlangsung':tgl_awal==null?'-':`${duration+1} Hari`,
            date_start : tgl_awal,
            date_end : tgl_akhir
        }
    })
    
    const bidang = perolehanData.bidangs?.map((el, i) => { return  {
        key : i+1,
        kode_bidang : el.kode_bidang,
        no_sertifikat : el.nomor_sertipikat,
        luas_bidang : el.bidang_luas
        }
    })

    const kendala = perolehanData.kendalas?.map((el, i) => { return  {
        key : i+1,
        kendala : el.kendala,
        pihak_terkait : el.pihak_terkait,
        status : el.status
        }
    })

    console.log('isi',tahapan)
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
                                            <Tableau site_name={perolehanData?perolehanData.perolehan.site_name:''}/>
                                        </Col>
                                        
                                        <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                                            <TableWithoutHeader source={perolehanData?.perolehan} name={id} height={300}/>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                                            <Table pagination={false} dataSource={tahapan} size="small" scroll={{ y: 260 }}>
                                                <ColumnGroup title={<span style={{ fontSize: 12 }}>DATA PROGRES</span>}>
                                                    <Column title={<span style={{ fontSize: 11 }}>No</span>}  width={50} dataIndex="key" key="key" render={(text) => <p style={{ fontSize: 11 }}>{text}</p>}/>
                                                    <Column title={<span style={{ fontSize: 11 }}>Tahap</span>}  dataIndex="tahap" key="tahap" render={(text) => <p style={{ fontSize: 11 }}>{text}</p>}/>
                                                    <Column title={<span style={{ fontSize: 11 }}>Waktu</span>} width={100}  dataIndex="waktu" key="waktu" render={(text) => <p style={{ fontSize: 11 }}>{text}</p>}/>
                                                </ColumnGroup>
                                            </Table>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                                            <Table pagination={false} dataSource={bidang} size="small" scroll={{ y: 260 }}>
                                                <ColumnGroup title={<span style={{ fontSize: 12 }}>Sertifikat HPL</span>}>
                                                    <Column title={<span style={{ fontSize: 11 }}>No</span>}  width={50} dataIndex="key" key="key" render={(text) => <p style={{ fontSize: 11 }}>{text}</p>}/>
                                                    <Column title={<span style={{ fontSize: 11 }}>Kode Bidang</span>}  dataIndex="kode_bidang" key="kode_bidang" render={(text) => <p style={{ fontSize: 11 }}>{text}</p>}/>
                                                    <Column title={<span style={{ fontSize: 11 }}>No. Sertifikat</span>} dataIndex="no_sertifikat" key="no_sertifikat" render={(text) => <p style={{ fontSize: 11 }}>{text}</p>}/>
                                                    <Column title={<span style={{ fontSize: 11 }}>Luas Bidang</span>} width={100}  dataIndex="luas_bidang" key="luas_bidang" render={(text) => <p style={{ fontSize: 11 }}>{text} Ha</p>}/>
                                                </ColumnGroup>
                                            </Table>
                                        </Col>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={16}>
                                            <Table pagination={false} dataSource={kendala} size="small" scroll={{ y: 260 }}>
                                                <ColumnGroup title={<span style={{ fontSize: 12 }}>Kendala Perolehan</span>}>
                                                    <Column title={<span style={{ fontSize: 11 }}>No</span>}  width={50} dataIndex="key" key="key" render={(text) => <p style={{ fontSize: 11 }}>{text}</p>}/>
                                                    <Column title={<span style={{ fontSize: 11 }}>Kendala</span>}  dataIndex="kendala" key="kendala" render={(text) => <p style={{ fontSize: 11 }}>{text}</p>}/>
                                                    <Column title={<span style={{ fontSize: 11 }}>Pihak Terkait</span>}   dataIndex="pihak_terkait" key="pihak_terkait" render={(text) => <p style={{ fontSize: 11 }}>{text}</p>}/>
                                                    <Column title={<span style={{ fontSize: 11 }}>Status</span>}   dataIndex="status" key="status" render={(text) => <p style={{ fontSize: 11 }}>{text}</p>}/>
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