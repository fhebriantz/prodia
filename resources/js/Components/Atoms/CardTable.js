import React from "react";
import { Card, Table} from 'antd';


function CardTable({
  columns=[],
  source=[],
  title=''
}) {
  return (
    
      <Card className='max-w-full' size="small" title={title} extra={<a href="#">More</a>} >
          <Table columns={columns} dataSource={source} size="small" style={{width: '100%' , height:300}}/>
      </Card>
    );
}

export default CardTable;