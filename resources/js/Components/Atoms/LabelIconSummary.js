import React from "react";
import { Row,Col,Card} from 'antd';


function LabelIconSummary({
    item_text_first="",
    item_text_second="",
    title_first="",
    title_second="",
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
              <Col xs={10} >
                <div>
                  <p style={{fontSize:14, color:'#fff', fontWeight:600}}>{item_text_first}</p>
                  <span style={{fontSize:12,color:'#fff'}}>{title_first}</span>
                </div>
              </Col>
              <Col xs={4}>
                  <div className='grid px-2 py-0 '> 
                      <span style={{color: '#fff'}}>{icon}</span>
                  </div>
              </Col>
              <Col xs={10}>
                  <p style={{fontSize:14, color:'#fff', fontWeight:600}}>{item_text_second}</p>
                  <span style={{fontSize:12,color:'#fff'}}>{title_second}</span>
              </Col>
          </Row>
      </Card>
    );
}

export default LabelIconSummary;