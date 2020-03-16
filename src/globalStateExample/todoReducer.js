import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { seed } from "../utils/uuidSeed";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "DONE_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, isComplete: true };
        } else {
          return todo;
        }
      });
    case "UNDO_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, isComplete: false };
        } else {
          return todo;
        }
      });
    case "ADD_TODO":
      return state.concat({
        id: uuidv4({ random: seed() }),
        task: action.task,
        isComplete: false
      });
    default:
      throw new Error();
  }
};
