import { CaretDownOutlined, CaretUpOutlined, DownCircleFilled, FundFilled, UpCircleFilled } from '@ant-design/icons';
import React, { useRef, useState,useEffect  } from 'react';
import {
 listColor
} from "../../../Const/colorPalete";
const TableAutoScrollKeuangan = ({
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
        <table style={{ width:1000}}>
          <thead>
            <tr>
              <th  style={{textAlign:'center', width:'100px'}}>No</th>
              <th  style={{textAlign:'center'}}>Revenue</th>
              <th  style={{textAlign:'right'}}>COGS</th>
              <th  style={{textAlign:'right'}}>GROSS</th>
              <th  style={{textAlign:'center'}}>Opex</th>
              <th  style={{textAlign:'right'}}>Other Income</th>
              <th  style={{textAlign:'right'}}>Other Expenses</th>
              <th  style={{textAlign:'right'}}>Total Sebelum Pajak</th>
              <th  style={{textAlign:'right'}}>Pajak</th>
              <th  style={{textAlign:'right'}}>Net Profit</th>
            </tr>
          </thead>
          <tbody>
            {source.map(el=>{
                return (
                  <tr>
                    <td style={{textAlign:'center'}}>{el.key}</td>
                    <td style={{textAlign:'center'}}>{el.month}</td>
                    <td style={{textAlign:'right'}}>{el.revenue} {el.growth_color=='red'?<DownCircleFilled style={{color:listColor.a}} />:<UpCircleFilled style={{color:listColor.c}}/>}</td>
                    <td style={{textAlign:'right'}}>{el.growth} {el.growth_color=='red'?<CaretDownOutlined style={{color:listColor.a}}/>:<CaretUpOutlined style={{color:listColor.c}}/>}</td>
                    <td style={{textAlign:'center'}}>{el.expense}</td>
                    <td style={{textAlign:'right'}}>{el.profit} {el.growth_color=='red'?<DownCircleFilled style={{color:listColor.a}}/>:<UpCircleFilled style={{color:listColor.b}}/>}</td>
                    <td style={{textAlign:'right'}}>{el.revenue} {el.growth_color=='red'?<DownCircleFilled style={{color:listColor.a}} />:<UpCircleFilled style={{color:listColor.c}}/>}</td>
                    <td style={{textAlign:'right'}}>{el.growth} {el.growth_color=='red'?<CaretDownOutlined style={{color:listColor.a}}/>:<CaretUpOutlined style={{color:listColor.c}}/>}</td>
                    <td style={{textAlign:'right'}}>{el.profit} {el.growth_color=='red'?<DownCircleFilled style={{color:listColor.a}}/>:<UpCircleFilled style={{color:listColor.b}}/>}</td>
                    <td style={{textAlign:'right'}}>{el.growth} {el.growth_color=='red'?<CaretDownOutlined style={{color:listColor.a}}/>:<CaretUpOutlined style={{color:listColor.c}}/>}</td>
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

export default TableAutoScrollKeuangan;