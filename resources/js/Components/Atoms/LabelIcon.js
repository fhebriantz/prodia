import React from "react";
import { Row,Col} from 'antd';


function LabelIcon({
    item_text="",
    item_color="",
    item_size="",
    subitem_text="",
    subitem_size="",
    icon=""
}) {
  return (
      <div>
          <Row style={{paddingTop:10, paddingBottom:10}}>
              <Col flex="50px" >
                  <div className='grid px-2 py-1.5' > 
                      <span >{icon}</span>
                  </div>
              </Col>
              <Col flex="70%">
                  <p style={{fontSize:item_size, color:item_color}}>{item_text}</p>
                  <span style={{fontSize:subitem_size}}>{subitem_text}</span>
              </Col>
          </Row>
      </div>
    );
}

export default LabelIcon;