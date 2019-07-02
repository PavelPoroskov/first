import React from "react";
import { Collection, CollectionItem } from "react-materialize";

import AddGameForm from "./AddGameForm";

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
};

export default GameList;
