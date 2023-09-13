import React from "react";
import { Row,Col, Divider} from 'antd';
import LabelIcon from "../../Atoms/LabelIcon";
import { PushpinFilled,AimOutlined,MoneyCollectOutlined,CloseCircleOutlined } from '@ant-design/icons';

function CardIncomeStatement({
  title="",
  subtitle="",
  data=""
}) {
  
  function addRupiah(numberString) {
    if(numberString!=null){
      if(numberString.toString().length > 1){
        const parts = numberString.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return `Rp ${parts.join(",")}`;
      }else{
        return numberString
      }
    }else{
      return numberString
    }
  }
  return (
      <div className="w-full" style={{height:324, color:'#555'}}>
        <Row className="px-5 py-1">
          <Col xs={12} className="font-bold italic">Revenue</Col>
          <Col xs={12} className="text-right italic">{data.income_revenue? addRupiah(data?.income_revenue):'0'}</Col>
        </Row>
        <Divider style={{margin:10}}/>
        <Row className="px-5 py-1">
          <Col xs={12} className="font-bold italic">Gross Profit</Col>
          <Col xs={12} className="text-right font-bold italic">{data.income_gross_profit? addRupiah(data?.income_gross_profit):'0'}</Col>
        </Row>
        <Row className="px-5 py-1">
          <Col xs={12} className="italic" style={{fontSize:12}}>Pendapatan Komersial</Col>
          <Col xs={12} className="text-right italic" style={{fontSize:12}}>{data.income_pendapatan_komersial? addRupiah(parseFloat(data?.income_pendapatan_komersial).toFixed(0)):'0'}</Col>
        </Row>
        <Row className="px-5 py-1">
          <Col xs={12} className="italic" style={{fontSize:12}}>Pendapatan Usaha Lainnya</Col>
          <Col xs={12} className="text-right italic" style={{fontSize:12}}>{data.income_pendapatan_usaha_lainnya? addRupiah(parseFloat(data?.income_pendapatan_usaha_lainnya).toFixed(0)):'0'}</Col>
        </Row>
        <Row className="px-5 py-1">
          <Col xs={12} className="italic" style={{fontSize:12}}>Beban Pokok Usaha Lainnya</Col>
          <Col xs={12} className="text-right italic" style={{fontSize:12}}>{data.income_beban_pokok_usaha_lainnya? addRupiah(parseFloat(data?.income_beban_pokok_usaha_lainnya).toFixed(0)):'0'}</Col>
        </Row>
        <Row className="px-5 py-1">
          <Col xs={12} className="font-bold italic">Other Income</Col>
          <Col xs={12} className="text-right font-bold italic">{data.income_other_incomes?  addRupiah(parseFloat(data?.income_other_incomes).toFixed(0)):'0'}</Col>
        </Row>
        <Row className="px-5 py-1">
          <Col xs={12} className="font-bold italic">Other Expenses</Col>
          <Col xs={12} className="text-right font-bold italic">{data.income_other_expenses? addRupiah(parseFloat(data?.income_other_expenses).toFixed(0)):'0'}</Col>
        </Row>
        <Row className="px-5 py-1">
          <Col xs={12} className="font-bold italic">Operating Profit</Col>
          <Col xs={12} className="text-right font-bold italic">{data.income_operating_profit? addRupiah(parseFloat(data?.income_operating_profit).toFixed(0)): '-'}</Col>
        </Row>
        <Divider style={{margin:10}}/>
        <Row className="px-5 py-1">
          <Col xs={12} className="font-bold italic">Net Profit</Col>
          <Col xs={12} className="text-right font-bold italic">{data.income_net_profit? addRupiah(parseFloat(data?.income_net_profit).toFixed(0)): '-'}</Col>
        </Row>
      </div>
    );
}

export default CardIncomeStatement;