import React, { useRef, useState,useEffect  } from 'react';
const TableAutoScrollPemanfaatan = ({
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
              {column.map(el=>{
                return (
                  <th>{el}</th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {source.map(el=>{
                return (
                  <tr>
                    <td>{el.key}</td>
                    <td><a href={`/pemanfaatan/${el.name}`}>{el.name}</a></td>
                    <td>{el.potensi_luas}</td>
                    <td>{el.aktivitas_terakhir}</td>
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

export default TableAutoScrollPemanfaatan;