export const ADD_GAME = 'ADD_GAME';

export const addGame = (title) => {
  return {
    type: ADD_GAME,
    title,
  };
};