import React from "react";
import { Row,Col} from 'antd';
import LabelIcon from "../../Atoms/LabelIcon";

import { PushpinFilled,AimOutlined,MoneyCollectOutlined,CheckCircleOutlined } from '@ant-design/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
 listColor
} from "../../../Const/colorPalete";
import { faMountainSun,faBullseye,faHourglassStart,faLocationDot,faRupiahSign,faCircleCheck,faMapLocationDot} from '@fortawesome/free-solid-svg-icons';
function CardLabelPemanfaatan3({
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
        item_color="#5B7AD8"
        item_size={16}
        subitem_text="Penetapan Tanah RA"
        subitem_size={12}
        icon={
            <FontAwesomeIcon style={{fontSize:25, color:listColor.d}} icon={faMapLocationDot} />
        }
      />
      <LabelIcon
        item_text="-"
        subitem_text="Target Tanah RA"
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
        subitem_text="Target To Go"
        subitem_size={12}
        icon={
            <FontAwesomeIcon style={{fontSize:30, color:listColor.b}} icon={faHourglassStart} />
        }
      />
      <LabelIcon
        item_text="-"
        item_color="#5B7AD8"
        item_size={16}
        subitem_text="Lokasi"
        subitem_size={12}
        icon={
            <FontAwesomeIcon style={{fontSize:30, color:listColor.f}} icon={faLocationDot} />
        }
      />
  </div>
    );
}

export default CardLabelPemanfaatan3;