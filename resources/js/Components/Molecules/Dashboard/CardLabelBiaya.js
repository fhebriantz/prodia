import React from "react";
import { Row,Col} from 'antd';
import LabelIcon from "../../Atoms/LabelIcon";

import { PushpinFilled,AimOutlined,MoneyCollectOutlined,CloseCircleOutlined,FileDoneOutlined } from '@ant-design/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
 listColor
} from "../../../Const/colorPalete";
import { faMountainSun,faBullseye,faHourglassStart,faLocationDot,faRupiahSign,faCircleCheck} from '@fortawesome/free-solid-svg-icons';
function CardLabelBiaya({
  title="",
  subtitle=""
}) {
  return (
    <div className="w-full" style={{minHeight:324}}>
      <div style={{fontWeight: 600, color:'#555'}}>
          <p style={{fontSize:12}}>{title}</p>
          <p style={{fontSize:12}}>{subtitle}</p>
      </div>
      <LabelIcon
        item_text="-"
        subitem_text="Target Perolehan"
        item_color="#5B7AD8"
        item_size={16}
        subitem_size={12}
        icon={
            <FontAwesomeIcon style={{fontSize:30, color:listColor.c}} icon={faBullseye} />
        }
      />
      <LabelIcon
        item_text="-"
        item_color="#5B7AD8"
        item_size={16}
        subitem_text="Target To Go"
        subitem_size={12}
        icon={
            <FontAwesomeIcon style={{fontSize:30, color:listColor.a}} icon={faBullseye} />
        }
      />
      <LabelIcon
        item_text="-"
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

export default CardLabelBiaya;