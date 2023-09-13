import React, { useRef, useState,useEffect  } from 'react';
import { Progress, Button } from 'antd';
const TableAutoScrollPenggunaan = ({
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
        <table>
          <thead>
            <tr>
              <th  style={{textAlign:'center', width:'100px'}}>Task</th>
              <th  style={{textAlign:'center'}}>Assigned To</th>
              <th  style={{textAlign:'center'}}>Priority</th>
              <th  style={{textAlign:'center'}}>Status</th>
              <th  style={{textAlign:'center'}}>Complete</th>
            </tr>
          </thead>
          <tbody>
            {source.map(el=>{
                return (
                  <tr>
                    <td style={{textAlign:'center'}}><a href={`/penggunaan/${el.task}`}>{el.task}</a></td>
                    <td style={{textAlign:'center'}}>{el.asign}</td>
                    <td style={{textAlign:'center'}}>
                      <Button disabled size='small' type="primary" 
                        style={
                          el.priority=='high'?{backgroundColor:'#DA542E', width:100, color:'white', fontSize:11}:
                          el.priority=='low'?{backgroundColor:'#28B779', width:100, color:'white', fontSize:11}:
                          {backgroundColor:'#FFB848', width:100, color:'white', fontSize:11}
                        }>
                        {el.priority}
                      </Button></td>
                    <td style={{textAlign : 'center'}}> 
                      <Button disabled size='small' type="primary" 
                        style={
                          el.status=='cancelled'?{background:'#DA542E', width:100, color:'white', fontSize:11}:
                          el.status=='done'?{background:'#28B779', width:100, color:'white', fontSize:11}:
                          {background:'#FFB848', width:100, color:'white', fontSize:11}
                        }>
                        {el.status}
                      </Button>
                    </td>
                    <td style={{textAlign:'center'}}><Progress percent={el.complete} status={el.status=='cancelled'?'exception':el.status=='done'?'success':'active'} /></td>
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

export default TableAutoScrollPenggunaan;