import React from "react";
import { Collection, CollectionItem } from "react-materialize";

import AddGameForm from "./AddGameForm";

const GameList = ({ games, addGame }) => {
  const tryAddGame = (_title) => {
    const title = _title.trim()
    if (games.indexOf(title) === -1) {
      addGame(title)
      return {
        success: true,
        msg: null
      }
    }

    return {
      success: false,
      msg: `Game "${title}" is already on the list.`
    }
  }

  return (
    <React.Fragment>
      <AddGameForm onAddGame={tryAddGame} />
      <Collection header="Video Games">
        {games.map(game => (
          <CollectionItem key={game}>{game}</CollectionItem>
        ))}
      </Collection>
    </React.Fragment>
  );
};

export default GameList;
