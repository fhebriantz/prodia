import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Link, Head } from '@inertiajs/inertia-react';
import { Chart } from "../Components/Atoms/Chart"
import CardDonutChart from "../Components/Atoms/CardDonutChart"
import CardStackedBarVerticalChart from "../Components/Atoms/CardStackedBarVerticalChart"
import CardStackedBarHorizontalChart from "../Components/Atoms/CardStackedBarHorizontalChart"
import CardBarLineChart from "../Components/Atoms/CardBarLineChart"
import CardLineChart from "../Components/Atoms/CardLineChart"
import CardGaugeChart from "../Components/Atoms/CardGaugeChart"
import CardProgressGaugeChart from "../Components/Atoms/CardProgressGaugeChart"
import CardBarChartHorizontal from "../Components/Atoms/CardBarChartHorizontal"
import CardPieChart from "../Components/Atoms/CardPieChart"
import CardTable from "../Components/Atoms/CardTable"

import { Card, Col, Row,DatePicker, Table} from 'antd';
import {
 linechart, speedometer,columntable,population,datatable, piechart,stackedbarchartvertical, stackedbarcharthorizontal, barchart,donnutChart, inprogress,done,todo
} from "../Const/dummy";

export default function Welcome(props) {
    const {title, description} = props
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={true}
        >
        <div>
            <Head title={title} />
            <div className="py-3">
                <div className="max-w-full mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="py-3 px-6 bg-green-800 text-white border-b border-gray-200">{title}</div>
                        <div className='max-full p-2'>
                            <Row gutter={[8,8]}>
                                <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                                    <CardGaugeChart source={speedometer}  title="Skor KPI"/>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                                    <CardLineChart source={linechart}  title="Sales Comparison"/>
                                </Col>

                                <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                                    <CardStackedBarHorizontalChart source={stackedbarcharthorizontal}  title="Distribusi Tanah"/>
                                </Col>

                                <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                                    <CardBarLineChart source={barchart}  title="Cash Flow last 12 Month"/>
                                </Col>
                                
                                <Col xs={24} sm={12} md={24} lg={16} xl={12}>
                                    <CardStackedBarVerticalChart source={stackedbarchartvertical}  title="Sales by Month"/>
                                </Col>
                                
                                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                    <CardDonutChart source={donnutChart} title="Sale by Product Category"/>
                                </Col>
                                
                                <Col xs={24} sm={12} md={12} lg={12} xl={8}>
                                    <CardProgressGaugeChart source={done} title="Completed Tasks"/>
                                </Col>
                                
                                <Col xs={24} sm={12} md={12} lg={12} xl={8}>
                                    <CardProgressGaugeChart source={inprogress} title="Tasks In Progress"/>
                                </Col>
                                
                                <Col xs={24} sm={12} md={12} lg={12} xl={8}>
                                    <CardProgressGaugeChart source={todo} title="Not Started Tasks"/>
                                </Col>
                                
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <CardBarChartHorizontal source={population} title="Progress Perolehan"/>
                                </Col> 

                                <Col xs={24} sm={12} md={12} lg={8} xl={8}>
                                    <CardPieChart source={piechart} title="Asal Perolehan"/>
                                </Col>

                                 <Col xs={24} sm={12} md={12} lg={16} xl={16}>
                                    <CardTable columns={columntable} source={datatable} title="Table Example"/>
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