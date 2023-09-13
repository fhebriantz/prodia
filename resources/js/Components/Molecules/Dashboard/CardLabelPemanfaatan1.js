import React from "react";
import { Row,Col} from 'antd';
import LabelIcon from "../../Atoms/LabelIcon";

import { PushpinFilled,AimOutlined,MoneyCollectOutlined,CloseCircleOutlined } from '@ant-design/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
 listColor
} from "../../../Const/colorPalete";
import { faMountainSun,faBullseye,faHourglassStart,faLocationDot,faRupiahSign,faCircleCheck} from '@fortawesome/free-solid-svg-icons';
function CardLabelPemanfaatan1({
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
        item_text={data.komersial_luas_pemanfaatan? `${addCommas(data?.komersial_luas_pemanfaatan)} Ha`:'0'}
        item_color="#5B7AD8"
        item_size={16}
        subitem_text="Luas Pemanfaatan"
        subitem_size={12}
        icon={
            <FontAwesomeIcon  style={{fontSize:25, color:listColor.d}} icon={faMountainSun} />
        }
      />
      <LabelIcon
        item_text={data.komersial_target? `${addCommas(data?.komersial_target)} Ha`:'0'}
        subitem_text="Target Luas"
        item_color="#5B7AD8"
        item_size={16}
        subitem_size={12}
        icon={
            <FontAwesomeIcon style={{fontSize:30, color:listColor.a}} icon={faBullseye} />
        }
      />
      <LabelIcon
        item_text={data.komersial_target_to_go? `${addCommas(data?.komersial_target_to_go)} Ha`:'0'}
        item_color="#5B7AD8"
        item_size={16}
        subitem_text="Pemanfaatan To Go"
        subitem_size={12}
        icon={
            <FontAwesomeIcon style={{fontSize:30, color:listColor.b}}  icon={faHourglassStart} />
        }
      />
      <LabelIcon
        item_text={data.komersial_lokasi_pemanfaatan? addCommas(data?.komersial_lokasi_pemanfaatan):'0'}
        item_color="#5B7AD8"
        item_size={16}
        subitem_text="Lokasi Pemanfaatan"
        subitem_size={12}
        icon={
            <FontAwesomeIcon style={{fontSize:30, color:listColor.f}}  icon={faLocationDot} />
        }
      />
  </div>
    );
}

export default CardLabelPemanfaatan1;