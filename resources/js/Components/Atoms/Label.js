import React from "react";
import { Row,Col,Card} from 'antd';


function Label({
    item_text="",
    title="",
    icon="",
    bg_color=""
}) {
  return (
    <Card 
        className='max-w-full'  
        size="small" 
        title={null} 
        style={{background : `${bg_color}`}}
        extra={null} >
          <Row style={{paddingTop:10, textAlign:'center', paddingBottom:10,  borderRadius:"10px"}}>
              <Col xs={24} >
                <div>
                  <p style={{fontSize:18, color:'#fff', fontWeight:600}}>{item_text}</p>
                  <span style={{fontSize:12,color:'#fff'}}>{title}</span>
                </div>
              </Col>
          </Row>
      </Card>
    );
}

export default Label;