import React from "react";
import { Card} from 'antd';
import { Chart } from "../../Components/Atoms/Chart"


function CardDonutChart({
  source={},
  title=''
}) {
  return (
    <Card className='max-w-full' size="small" title={title} extra={<a href="#">More</a>} >
        <Chart option={source}  style={{width: '100%' , height:300}}/>
    </Card>
    );
}

export default CardDonutChart;