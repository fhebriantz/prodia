import React from "react";
import { Row,Col} from 'antd';
import LabelIcon from "../../Atoms/LabelIcon";
import { PushpinFilled,AimOutlined,MoneyCollectOutlined,CloseCircleOutlined } from '@ant-design/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck,faHourglassStart,faLocationDot,faBullseye } from '@fortawesome/free-solid-svg-icons';

import {
 listColor
} from "../../../Const/colorPalete";
function CardLabelPerolehan({
  title="",
  subtitle="",
  data={}
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
        item_text={data.perolehan_hpl? `${addCommas(parseFloat(data?.perolehan_hpl).toFixed(2))} Ha (${parseFloat(data?.perolehan_hpl_persen).toFixed(2)}%)`:'0'}
        item_color="#5B7AD8"
        item_size={16}
        subitem_text="Hpl diperoleh"
        subitem_size={12}
        icon={
            <FontAwesomeIcon style={{fontSize:30, color:listColor.c}}  icon={faCircleCheck} />
        }
      />
      <LabelIcon
        item_text={data.perolehan_target? `${addCommas(parseFloat(data?.perolehan_target).toFixed(2))} Ha`:'0'}
        subitem_text="Target Perolehan"
        item_color="#5B7AD8"
        item_size={16}
        subitem_size={12}
        icon={
          <FontAwesomeIcon style={{fontSize:30, color:listColor.a}} icon={faBullseye} />
        }
      />
      <LabelIcon
        item_text={data.perolehan_dalam_proses? `${addCommas(parseFloat(data?.perolehan_dalam_proses).toFixed(2))} Ha`:'0'}
        item_color="#5B7AD8"
        item_size={16}
        subitem_text="Dalam Proses"
        subitem_size={12}
        icon={
            <FontAwesomeIcon style={{fontSize:30, color:listColor.b}}  icon={faHourglassStart} />
        }
      />
      <LabelIcon
        item_text={data.perolehan_lokasi_hpl? `${data?.perolehan_lokasi_hpl}`:'0'}
        item_color="#5B7AD8"
        item_size={16}
        subitem_text="Lokasi HPL BBT"
        subitem_size={12}
        icon={
            <FontAwesomeIcon style={{fontSize:30, color:listColor.f}}  icon={faLocationDot} />
        }
      />
  </div>
    );
}

export default CardLabelPerolehan;