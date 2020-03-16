import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { seed } from "../utils/uuidSeed";

export const initialTodos = [
  {
    id: uuidv4({ random: seed() }),
    task: "Learn React Native",
    isComplete: true
  },
  {
    id: uuidv4({ random: seed() }),
    task: "Learn Redux",
    isComplete: true
  },
  {
    id: uuidv4({ random: seed() }),
    task: "Learn React Native Paper",
    isComplete: false
  },
  {
    id: uuidv4({ random: seed() }),
    task: "Learn React Redux",
    isComplete: true
  }
];
