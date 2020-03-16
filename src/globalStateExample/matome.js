import React, { useReducer, useState, useContext, createContext } from "react";
import { View, Text } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { seed } from "../utils/uuidSeed";
import { TextInput, Button, Checkbox } from "react-native-paper";

const TodoContext = createContext(null);

const initialTodos = [
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

const GlobalStateWithUseContext = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);
  const [filter, dispatchFilter] = useReducer(filterReducer, "SHOW_ALL");

  const filteredTodos = todos.filter(todo => {
    if (filter === "SHOW_ALL") return true;
    if (filter === "SHOW_COMPLETE" && todo.isComplete) return true;
    if (filter === "SHOW_INCOMPLETE" && !todo.isComplete) return true;
    return false;
  });

  return (
    <TodoContext.Provider value={dispatchTodos}>
      <View style={{ flex: 1 }}>
        <Filter dispatch={dispatchFilter} />
        <TodoList todos={filteredTodos} />
        <AddToDo />
      </View>
    </TodoContext.Provider>
  );
};
export default GlobalStateWithUseContext;

const todoReducer = (state, action) => {
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
        id: uuidv4(),
        task: action.task,
        isComplete: false
      });
    default:
      throw new Error();
  }
};

const TodoList = ({ todos }) => (
  <View>
    {todos.map(todo => {
      return <TodoItem key={todo.id} todo={todo} />;
    })}
  </View>
);

const TodoItem = ({ todo }) => {
  const dispatch = useContext(TodoContext);

  const handleChange = () => {
    dispatch({
      type: todo.isComplete ? "UNDO_TODO" : "DONE_TODO",
      id: todo.id
    });
  };

  return (
    <View style={{ flexDirection: "row", paddingLeft: 40 }}>
      <Checkbox.Android
        status={todo.isComplete ? "checked" : "unchecked"}
        onPress={handleChange}
      />
      <Text>{todo.task}</Text>
    </View>
  );
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ALL":
      return "SHOW_ALL";
    case "SHOW_COMPLETE":
      return "SHOW_COMPLETE";
    case "SHOW_INCOMPLETE":
      return "SHOW_INCOMPLETE";
    default:
      throw new Error();
  }
};

const Filter = ({ dispatch }) => {
  const handleShowAll = () => {
    dispatch({ type: "SHOW_ALL" });
  };

  const handleShowComplete = () => {
    dispatch({ type: "SHOW_COMPLETE" });
  };

  const handleShowIncomplete = () => {
    dispatch({ type: "SHOW_INCOMPLETE" });
  };

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginVertical: 10
      }}
    >
      <Button onPress={handleShowAll}>All</Button>
      <Button onPress={handleShowComplete}>Complete</Button>
      <Button onPress={handleShowIncomplete}>Incomplete</Button>
    </View>
  );
};

const AddToDo = () => {
  const dispatch = useContext(TodoContext);
  const [text, setText] = useState("");
  const handleChangeText = () => {
    if (text) {
      dispatch({
        type: "ADD_TODO",
        task: text
      });
    }
    setText("");
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <TextInput
        label="Add ..."
        returnKeyType="done"
        value={text}
        onChangeText={text => setText(text)}
        keyboardType="default"
        style={{ margin: 5 }}
      />
      <Button mode="contained" onPress={handleChangeText}>
        Add Todo
      </Button>
    </View>
  );
};
