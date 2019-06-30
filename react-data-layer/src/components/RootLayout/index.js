import React from "react";

import { Col, Row } from "react-materialize";

const RootLayout = ({children}) => (
  <Row>
    <Col s={12} m={10} l={8} offset="m1 l2">
      {children}
    </Col>
  </Row>
);

export default RootLayout;
