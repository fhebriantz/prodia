import React from "react";
import { Card} from 'antd';
import { Chart } from "../Atoms/Chart"


function CardGaugeChart({
  source={},
  title=''
}) {
  return (
        <Chart option={source}  style={{width: '100%' , height:190}}/>
    );
}

export default CardGaugeChart;