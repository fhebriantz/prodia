import React from "react";
import { Row,Col} from 'antd';
import LabelIcon from "../../Atoms/LabelIcon";

import { PushpinFilled,AimOutlined,MoneyCollectOutlined,CheckCircleOutlined,CloseCircleOutlined } from '@ant-design/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
 listColor
} from "../../../Const/colorPalete";
import { faMountainSun,faBullseye,faHourglassStart,faLocationDot,faRupiahSign,faCircleCheck,faMapLocationDot} from '@fortawesome/free-solid-svg-icons';
function CardLabelPemanfaatan2({
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
        item_text={data.reforma_penetapan_ra? `${addCommas(data?.reforma_penetapan_ra)} Ha`:'0'}
        item_color="#5B7AD8"
        item_size={16}
        subitem_text="Penetapan Tanah RA"
        subitem_size={12}
        icon={
            <FontAwesomeIcon style={{fontSize:25, color:listColor.d}} icon={faMapLocationDot} />
        }
      />
      <LabelIcon
        item_text={data.reforma_target? `${addCommas(data?.reforma_target)} Ha`:'0'}
        subitem_text="Target Tanah RA"
        item_color="#5B7AD8"
        item_size={16}
        subitem_size={12}
        icon={
            <FontAwesomeIcon style={{fontSize:30, color:listColor.a}} icon={faBullseye} />
        }
      />
      <LabelIcon
        item_text={data.reforma_target_to_go? `${addCommas(data?.reforma_target_to_go)} Ha`:'0'}
        item_color="#5B7AD8"
        item_size={16}
        subitem_text="Target To Go"
        subitem_size={12}
        icon={
            <FontAwesomeIcon style={{fontSize:30, color:listColor.b}} icon={faHourglassStart} />
        }
      />
      <LabelIcon
        item_text={data.reforma_lokasi_ra? data?.reforma_lokasi_ra:'0'}
        item_color="#5B7AD8"
        item_size={16}
        subitem_text="Lokasi RA"
        subitem_size={12}
        icon={
            <FontAwesomeIcon style={{fontSize:30, color:listColor.f}} icon={faLocationDot} />
        }
      />
  </div>
    );
}

export default CardLabelPemanfaatan2;