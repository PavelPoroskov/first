import React from "react";
import { Collection, CollectionItem//, Row, Col 
} from "react-materialize";

import AddGameForm from "./AddGameForm";

//<Row>
//</Row>
const GameList = ({ games, addGame }) => {
  return (
    <React.Fragment>
      <AddGameForm onAddGame={addGame} />
      <Collection header="Video Games">
        {games.map(game => (
          <CollectionItem key={game}>{game}</CollectionItem>
        ))}
      </Collection>
    </React.Fragment>
  );
  // return (
  //   <React.Fragment>
  //       <AddGameForm onAddGame={addGame} />
  //     <Row>
  //       <Col s={12}>
  //         <Collection header="Video Games">
  //           {games.map(game => (
  //             <CollectionItem key={game}>{game}</CollectionItem>
  //           ))}
  //         </Collection>
  //       </Col>
  //     </Row>
  //   </React.Fragment>
  // );
};

export default GameList;
