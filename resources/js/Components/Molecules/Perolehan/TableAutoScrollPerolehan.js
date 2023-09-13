import React, { useRef, useState,useEffect  } from 'react';
const TableAutoScrollPerolehan = ({
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
    <div>
      <div style={styleTable} className='table-container'  ref={tableRef}>
        <table>
          <thead>
            <tr>
              {column.map((el,i)=>{
                return (
                  <th key={i}>{el}</th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {source.sites?.map((el,i)=>{
                return (
                  <tr key ={i}>
                    <td>{i+1}</td>
                    <td><a href={`/detail/perolehan/${el.perolehan_id}`}>{el.site_name}</a></td>
                    <td>{el.perolehan_luas?addCommas(el.perolehan_luas)+' Ha':'0'}</td>
                    <td>
                      {el.tahapan_urutan?
                          source.tahapans?.map((e,li)=>{
                            if(e.tahapan == el.tahapan_urutan){
                              return e.perolehan_status_nama
                            }
                          })
                        :
                          '-'
                        }
                    </td>
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

export default TableAutoScrollPerolehan;