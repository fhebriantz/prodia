import React from "react";
import { Card} from 'antd';
import { Chart } from "../Atoms/Chart"


function CardStackedBarHorizontalChart({
  source={},
  height=''
}) {
  return (
        <Chart option={source}  style={{width: '100%' , height:height}}/>
    );
}

export default CardStackedBarHorizontalChart;