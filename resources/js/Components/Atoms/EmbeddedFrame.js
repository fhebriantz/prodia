import React from 'react';
import { Card } from 'antd';

const EmbeddedFrame = ({
  url=""
}) => {
  const frameUrl = url;

  return (
    <Card title={false} >
      <iframe src={frameUrl} title="Embedded Frame" width="100%" height="300px" frameBorder="0" />
    </Card>
  );
};

export default EmbeddedFrame;