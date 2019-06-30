import React from "react";

import { Col, Row } from "react-materialize";
import GameList from "./GameListConnected";

const ScreenApp = () => (
  <Row>
    <Col s={12} m={10} l={8} offset="m1 l2">
      <GameList />
    </Col>
  </Row>
);

export default ScreenApp;
