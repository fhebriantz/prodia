import React from "react";
import { Row,Col} from 'antd';
import LabelIcon from "../../Atoms/LabelIcon";

import { PushpinFilled,AimOutlined,MoneyCollectOutlined,CloseCircleOutlined,FileDoneOutlined } from '@ant-design/icons';

import {
 listColor
} from "../../../Const/colorPalete";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupiahSign,faCircleCheck,faBullseye} from '@fortawesome/free-solid-svg-icons';
function CardLabelPendapatan({
  title="",
  subtitle="",
  data=""
}) {
  
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
  return (
      <div className="w-full" style={{minHeight:324}}>
      <div style={{fontWeight: 600, color:'#555'}}>
          <p style={{fontSize:12}}>{title}</p>
          <p style={{fontSize:12}}>{subtitle}</p>
      </div>
      <LabelIcon
        item_text={data.pemanfaatan_actual_revenue ? `Rp ${addCommas(parseFloat(data?.pemanfaatan_actual_revenue).toFixed(0))}` : '0'}
        item_color="#5B7AD8"
        item_size={16}
        subitem_text="Actual Revenue"
        subitem_size={12}
        icon={
            <FontAwesomeIcon style={{fontSize:30, color:listColor.c}} icon={faRupiahSign} />
        }
      />
      <LabelIcon
        item_text="-"
        subitem_text="Target Revenue"
        item_color="#5B7AD8"
        item_size={16}
        subitem_size={12}
        icon={
          <FontAwesomeIcon style={{fontSize:30, color:listColor.a}} icon={faBullseye} />
        }
      />
      <LabelIcon
        item_text="-"
        item_color="#5B7AD8"
        item_size={16}
        subitem_text="Target To Do"
        subitem_size={12}
        icon={
            <FontAwesomeIcon style={{fontSize:30, color:listColor.c}}  icon={faCircleCheck} />
        }
      />
  </div>
    );
}

export default CardLabelPendapatan;