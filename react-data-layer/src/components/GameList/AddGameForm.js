import React, { useState } from "react";
import { Button, TextInput, Row, Col } from "react-materialize";

import "./styles.css";

const AddGameForm = ({ onAddGame }) => {
  const [newGameTitle, setNewGameTitle] = useState("");

  const handleChangeText = event => {
    setNewGameTitle(event.target.value);
  };

  const handleAddGame = event => {
    event.preventDefault();
    onAddGame(newGameTitle);
    setNewGameTitle("");
  };

  //   <div style={{ marginLeft: "0.75rem", marginRight: "0.75rem", display: 'inline-flex' }}>
  //      <Button className="col s12 m2 l1 input-field">Add</Button>
  //           </div>

  //   <Row>
  //   <form action="#">
  //     <div class="file-field input-field">
  //       <div class="btn">
  //         <span>File</span>
  //         <input type="file" />
  //       </div>
  //       <div class="file-path-wrapper">
  //         <input class="file-path validate" type="text" />
  //       </div>
  //     </div>
  //   </form>
  // </Row>
  return (
    <React.Fragment>
      <form onSubmit={handleAddGame}>
        <Row>
          <TextInput
            label="New Game Title"
            value={newGameTitle}
            onChange={handleChangeText}
            s={12}
            m={10}
            l={11}
          />

          <Col
            m={2}
            l={1}
            className="hide-on-small-only"
            style={{ marginTop: "1rem" }}
          >
            <Button style={{ width: "100%" }}>Add</Button>
          </Col>
          <Col s={12} className="hide-on-med-and-up">
            <Button style={{ width: "100%" }}>Add</Button>
          </Col>
        </Row>
      </form>
    </React.Fragment>
  );
};

export default AddGameForm;
