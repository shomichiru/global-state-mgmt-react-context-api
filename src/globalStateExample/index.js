// src/globalStateExample.js

import React from "react";
import { View, StyleSheet } from "react-native";
import TodoContext from "./todoContext";
import { initialTodos } from "./initialTodos";
import { todoReducer } from "./todoReducer";
import { filterReducer } from "./filterReducer";
import { Filter } from "./Filter";
import { TodoList } from "./TodoList";
import { AddToDo } from "./AddToDo";

const GlobalStateWithReactContext = () => {
  const [todos, dispatchTodos] = React.useReducer(todoReducer, initialTodos);
  const [filter, dispatchFilter] = React.useReducer(filterReducer, "SHOW_ALL");

  const filteredTodos = todos.filter(todo => {
    if (filter === "SHOW_ALL") return true;
    if (filter === "SHOW_COMPLETE" && todo.isComplete) return true;
    if (filter === "SHOW_INCOMPLETE" && !todo.isComplete) return true;
    return false;
  });

  return (
    <TodoContext.Provider value={dispatchTodos}>
      <View style={styles.container}>
        <Filter dispatch={dispatchFilter} />
        <TodoList todos={filteredTodos} />
        <AddToDo />
      </View>
    </TodoContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default GlobalStateWithReactContext;
