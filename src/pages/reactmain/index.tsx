import React from 'react';
import { Typography, Card } from '@arco-design/web-react';

function ReactMain() {
  return (
    <Card style={{ height: '80vh' }}>
      <Typography.Title heading={6}>这里是react的主应用</Typography.Title>
      <Typography.Text>You can add content here :)</Typography.Text>
    </Card>
  );
}

export default ReactMain;
