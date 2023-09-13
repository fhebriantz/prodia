import React from "react";
import { Row,Col,Card} from 'antd';


function LabelBackground({
    item_text_first="",
    title_first="",
    bg_color="",
    height=""
}) {
  return (
    <Card 
        className='max-w-full'  
        size="small" 
        title={null} 
        style={{background : `${bg_color}`, minHeight: height}}
        extra={null} >
          <Row style={{paddingTop:32, textAlign:'center', paddingBottom:32,  borderRadius:"10px"}}>
              <Col xs={24} >
                <div>
                  <p style={{fontSize:24, color:'#fff', fontWeight:600}}>{item_text_first}</p>
                  <span style={{fontSize:14,color:'#fff'}}>{title_first}</span>
                </div>
              </Col>
          </Row>
      </Card>
    );
}

export default LabelBackground;