import { CaretDownOutlined, CaretUpOutlined, DownCircleFilled, FundFilled, UpCircleFilled } from '@ant-design/icons';
import React, { useRef, useState,useEffect  } from 'react';
import {
 listColor
} from "../../../Const/colorPalete";
const TableAutoScrollPendistribusian = ({
  column = "",
  source = "",
  height = ""
}) => {
  const tableRef = useRef(null);
  const heightRow = 1
  const timeScroll = 50 //in millisec
  const decreaseHeightScroll = 150 //in px
  const [heightPerRow, setHeightPerRow] = useState(heightRow);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(true);
  const buttonRef = useRef(null);
  const handleScrollBy = () => {
    const table = tableRef.current; //get element table
    const scrollHeight = table.scrollHeight - decreaseHeightScroll; //get height table

    if (table) {
      if(down==true && up==false){
        setCurrentScroll(currentScroll+heightPerRow) //ubah posisi scroll sekarang
      }else if(down==false && up==true){
        setCurrentScroll(currentScroll+heightPerRow) //ubah posisi scroll sekarang
      }
      table.scrollBy(0,heightPerRow); //exekusi scroll
    }
    
    const isDown = currentScroll < 0 
    const isUp = currentScroll > scrollHeight
    if (isDown) { 
      
      setUp(false)
      setDown(true)
      setHeightPerRow(heightRow)
    }
    if (isUp) { 
      console.log('Window is fully scrolled up');
      setUp(true)
      setDown(false)
      setHeightPerRow(-1*(heightRow))
    }
    
  };

  
  function addCommas(numberString) {
        if(numberString!=null){
        if(numberString.toString().length > 1){
            const parts = numberString.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return `${parts.join(",")}`;
        }else{
            return numberString
        }
        }else{
        return numberString
        }
    }

  useEffect(() => {
    const interval = setInterval(() => {
      buttonRef.current.click();
    }, timeScroll);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const styleTable ={
    maxHeight: height,
    overflowY: 'auto',
    scrollBehavior: 'smooth'
  }

  return (
    <div>
      <div style={styleTable} className='table-container'  ref={tableRef}>
        <table style={{ overflowX:1500}}>
          <thead>
            <tr>
              {/* ['No','Kode Lokasi', 'Kota', 'Provinsi','Potensi Luas','Potensi Revenue','Realisasi Luas','Realisasi Revenue'] */}
              <th  style={{textAlign:'center', width:'100px'}}>No</th>
              <th  style={{textAlign:'center'}}>Kode Lokasi</th>
              <th  style={{textAlign:'center'}}>Kota</th>
              <th  style={{textAlign:'center'}}>Provinsi</th>
              <th  style={{textAlign:'center', width:'120px'}}>Potensi Luas</th>
              <th  style={{textAlign:'center', width:'140px'}}>Potensi Revenue</th>
              <th  style={{textAlign:'center', width:'120px'}}>Realisasi Luas</th>
              <th  style={{textAlign:'center', width:'140px'}}>Realisasi Revenue</th>
            </tr>
          </thead>
          <tbody>
            {source?.map((el,i)=>{
                return (
                  <tr>
                    <td style={{textAlign:'center'}}>{i+1}</td>
                    <td style={{textAlign:'center'}}><a href={`/pengelolaan/${el.pemanfaatan_id}`}>{el.kode_lokasi}</a></td>
                    <td style={{textAlign:'center'}}>{el.kota}</td>
                    <td style={{textAlign:'center'}}>{el.provinsi}</td>
                    <td style={{textAlign:'center'}}>{el.potensi_luas?el.potensi_luas+' Ha':'-'}</td>
                    <td style={{textAlign:'center'}}>{el.potensi_revenue?'Rp '+addCommas(parseFloat(el.potensi_revenue).toFixed(0)):0}</td>
                    <td style={{textAlign:'center'}}>{el.potensi_luas?el.realisasi_luas+' Ha':'-'}</td>
                    <td style={{textAlign:'center'}}>{el.realisasi_revenue?'Rp '+addCommas(parseFloat(el.realisasi_revenue).toFixed(0)):0}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
      <button ref={buttonRef} onClick={handleScrollBy}/>
    </div>
  );
};

export default TableAutoScrollPendistribusian;