import React from "react";
import { Row,Col} from 'antd';
import LabelIcon from "../../Atoms/LabelIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountainSun,faRupiahSign,faLocationDot,faHelmetSafety } from '@fortawesome/free-solid-svg-icons';

import { PushpinFilled,AimOutlined,MoneyCollectOutlined,CloseCircleOutlined } from '@ant-design/icons';

import {
 listColor
} from "../../../Const/colorPalete";
function CardLabelPengelolaan({
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
        item_text={data.pengembangan_luas? `${addCommas(parseFloat(data?.pengembangan_luas).toFixed(2))} Ha`:'0'}
        item_color="#5B7AD8"
        item_size={16}
        subitem_text="Luas Pengembangan"
        subitem_size={12}
        icon={
            <FontAwesomeIcon  style={{fontSize:25, color:listColor.d}} icon={faMountainSun} />
        }
      />
      <LabelIcon
        item_text={data.pengembangan_biaya? `Rp ${addCommas(parseFloat(data?.pengembangan_biaya).toFixed(0))}`:'0'}
        subitem_text="Biaya Pengembangan"
        item_color="#5B7AD8"
        item_size={16}
        subitem_size={12}
        icon={
           <FontAwesomeIcon style={{fontSize:30, color:listColor.c}} icon={faRupiahSign} />
        }
      />
      <LabelIcon
        item_text={data.pengembangan_proyek? `${addCommas(parseFloat(data?.pengembangan_proyek).toFixed(2))} Ha`:'0'}
        item_color="#5B7AD8"
        item_size={16}
        subitem_text="Proyek Pengembangan"
        subitem_size={12}
        icon={
           <FontAwesomeIcon style={{fontSize:30, color:listColor.b}} icon={faHelmetSafety} />
        }
      />
      <div ></div>
      <LabelIcon
        item_text={data.pengembangan_lokasi? `${addCommas(parseFloat(data?.pengembangan_lokasi).toFixed(0))}`:'0'}
        item_color="#5B7AD8"
        item_size={16}
        subitem_text="Lokasi Pengembangan"
        subitem_size={12}
        icon={
            <FontAwesomeIcon style={{fontSize:30, color:listColor.f}}  icon={faLocationDot} />
        }
      />
  </div>
    );
}

export default CardLabelPengelolaan;